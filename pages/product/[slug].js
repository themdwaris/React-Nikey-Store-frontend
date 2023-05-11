import React from "react";
import Wrapper from "@/components/Wrapper";
import ProductDetailCarousel from "@/components/ProductDetailCarousel";
import { HiOutlineHeart } from "react-icons/hi";
import RelatedProducts from "@/components/RelatedProducts";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPrice } from "@/utils/helpers";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ product, products }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  // const data = useSelector((state)=>state.cart.value)
  const dispatch = useDispatch();
  const prod = product?.data?.[0]?.attributes;

  const testify = () => {
    toast.success("Your product is added!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div className="w-full md:py-20">
      <ToastContainer />
      <Wrapper>
        <div className="flex flex-col lg:flex-row  md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px]  lg:max-w-full mx-auto lg:mx-0 mt-5 md:mt-0">
            <ProductDetailCarousel images={prod?.image?.data} />
          </div>

          {/* right section start */}

          <div className="flex-[1] py-3">
            <div className="text-[34px] mb-2 font-semibold leading-tight">
              {prod?.name}
            </div>
            <div className="text-lg font-semibold mb-5 leading-tight">
              {prod?.subtitle}
            </div>

            {/* price */}
            <div className="flex items-center">
              <p className="mr-2 text-lg font-medium">&#8377;{prod?.price}</p>
              {prod?.originat_price && (
                <>
                  <p className="text-base font-medium line-through">
                    &#8377;{prod?.originat_price}
                  </p>
                  <p className="ml-auto text-base font-medium text-green-400">
                    {getDiscountedPrice(prod?.originat_price, prod?.price)}% off
                  </p>
                </>
              )}
            </div>
            {/* price */}

            <div className="text-sm font-medium text-black/[0.5]">
              Inc. Of All Taxes
            </div>
            <div className="text-sm font-medium text-black/[0.5] mb-[50px]">{`(Also includes all applicable duties)`}</div>

            {/* RANGE SELECTION start*/}
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="capitalize text-black font-semibold text-sm">
                  Select size
                </div>
                <div className="capitalize text-sm text-black/[0.5] cursor-pointer">
                  select guides
                </div>
              </div>

              {/* size select start*/}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {prod?.size?.data?.map((size, index) => (
                  <div
                    key={index}
                    className={`border text-center text-black/[0.8] py-1 font-medium rounded-md ${
                      size.enabled
                        ? "cursor-pointer hover:border-black"
                        : "cursor-not-allowed bg-black/[0.1] opacity-50 hover:border-black"
                    } ${selectedSize === size.size ? "border-black" : ""}`}
                    onClick={() => {
                      setSelectedSize(size.size);
                      setShowError(false);
                    }}
                  >
                    {size.size}
                  </div>
                ))}
              </div>
              {/* size select end */}

              {/* error msg */}
              {showError && (
                <div className="text-red-500 mt-4 select-none text-sm">
                  Size selection is required
                </div>
              )}
              {/* error msg */}
            </div>
            {/* RANGE SELECTION end */}

            {/* add to cart button */}
            <div
              className="w-full py-3 text-center text-white text-lg cursor-pointer transition-transform bg-black rounded-full font-urbanist active:scale-95 hover:opacity-90 mb-3"
              onClick={() => {
                if (!selectedSize) {
                  setShowError(true);
                } else {
                  dispatch(addToCart({ ...product?.data?.[0], selectedSize,oneQuantityPrice:prod.price }));
                  testify();
                }
              }}
            >
              Add to cart
            </div>

            <div className="w-full py-3 text-center text-black text-lg cursor-pointer bg-white transition-transform flex justify-center items-center gap-2 rounded-full font-urbanist border border-black active:scale-95 hover:bg-black hover:text-white mb-10">
              Wishlist <HiOutlineHeart size={20} />
            </div>

            {/* add to cart button */}

            <div>
              <div className="text-lg text-black mb-3 font-semibold">
                Product details
              </div>
              <div className="text-black/[0.9] text-md mb-4">
                {prod?.description}
              </div>
            </div>
          </div>
          {/* right section end */}
        </div>
        <RelatedProducts products={products} />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const product = await fetchDataFromApi("/api/products?populate=*");
  const paths = product?.data?.map((p) => {
    return {
      params: {
        slug: p?.attributes?.slug,
      },
    };
  });
  // console.log(category)
  return {
    paths,
    fallback: false,
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
    `/api/products?populate=*&[filters][slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: { product, products, slug },
  };
}
