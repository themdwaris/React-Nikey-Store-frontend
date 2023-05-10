import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from './ProductCard';

const RelatedProducts = ({products}) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='w-full mt-16 md:mt-20 mb-5 md:mb-0'>
        <div className='text-black text-md md:text-lg mb-10 font-semibold'>Related Products</div>
        <Carousel responsive={responsive} itemClass='px-[10px]'>
        {products?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </Carousel>
    </div>
  )
}

export default RelatedProducts