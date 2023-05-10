import { removeCartItem, updateQuantityAndSize } from "@/store/cartSlice";
import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

const CartItem = ({ data }) => {
  const attributes = data?.attributes;
  const quantityArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const dispatch = useDispatch();

  const clickHandler = (e, key) => {
    const payload = {
      key: key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: data?.id,
    };
    dispatch(updateQuantityAndSize(payload));
  };
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* image */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image
          src={attributes?.thumbnail?.data?.attributes?.url}
          width={100}
          height={100}
          alt={attributes.name}
        />
      </div>
      {/* image */}

      {/* item detail */}
      <div className="w-full flex flex-col">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="text-black text-md font-medium ">
            {attributes?.name}
          </div>
          <div className="block text-[14px] text-black/[.4] md:hidden">
            {attributes?.subtitle}
          </div>
          <div className="text-black/[0.7] text-[14px] font-medium mb-1">
            MRP : &#8377;{attributes?.price}
          </div>
        </div>
        <div className="hidden text-[14px] text-black/[.4] mb-1 md:block">
          {attributes?.subtitle}
        </div>

        {/* size and quantity */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-xs md:text-sm">
            <div className="flex items-center gap-1">
              <div className="font-medium text-black">Size: </div>
              <select
                className="hover:text-black cursor-pointer"
                onChange={(e) => clickHandler(e, "selectedSize")}
              >
                {attributes?.size?.data?.map((item, index) => {
                  return (
                    <option
                      key={index}
                      value={data?.selectedSize === item?.size}
                      defaultValue={item.size}
                      disabled={item.enbabled ? true : false}
                    >
                      {item.size}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-medium text-black">Quantity: </div>
              <select
                className="hover:text-black cursor-pointer"
                onChange={(e) => clickHandler(e, "quantity")}
              >
                {quantityArr.map((qun) => (
                  <option
                    key={qun}
                    defaultValue={qun}
                   value={data?.selectedSize === qun}
                  >
                    {qun}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <RiDeleteBin6Line
            onClick={() => dispatch(removeCartItem({ id: data?.id }))}
            className="text-[15px] md:text-[20px] text-black/[0.6] cursor-pointer hover:text-red-500"
          />
        </div>
        {/* size and quantity */}
      </div>
      {/* item detail */}
    </div>
  );
};

export default CartItem;
