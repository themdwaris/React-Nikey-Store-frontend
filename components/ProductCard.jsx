import { getDiscountedPrice } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ data }) => {
  return (
    <Link
      href={`/product/${data?.attributes?.slug}`}
      className="transform overflow-hidden duration-200 hover:scale-105 hover:bg-slate-100"
    >
      <Image
        className="w-full rounded-md"
        src={data?.attributes?.thumbnail?.data?.attributes?.url}
        alt={data?.attributes?.name}
        width={500}
        height={500}
      />
      <div className="p-4 text-black/[0.9]">
        <h2 className="font-semibold text-lg">{data?.attributes?.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 font-semibold">&#8377;{data?.attributes?.price}</p>
          {data?.attributes?.originat_price && (
            <>
              <p className="text-base line-through font-medium">
                &#8377;{data?.attributes?.originat_price}
              </p>
              <p className="ml-auto font-medium text-green-500">
                {getDiscountedPrice(
                  data?.attributes?.originat_price,
                  data?.attributes?.price
                )}% off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
