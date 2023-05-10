import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailCarousel = ({images}) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1200px] mx-auto sticky top-[60px]">
      <Carousel
        showThumbs={true}
        showStatus={false}
        showIndicators={false}
        thumbWidth={60}
     className="productCarousel"
      >
        {images?.map((image)=>(
           <img key={image.id} src={image?.attributes?.url} alt={image.attributes.name}/>
        ))}
      
      </Carousel>
    </div>
  );
};

export default ProductDetailCarousel;
