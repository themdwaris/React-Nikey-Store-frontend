import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import {  BsArrowLeft, BsArrowRight} from "react-icons/bs";

const HeroBanner = () => {
  return (
    <div className="mt-8 relative text-white text-[20px] w-full max-w-[1150px] mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}

        renderArrowPrev={(clickHandler,hasPrev)=>(
            <div onClick={clickHandler} className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black/[0.9] text-white flex items-center justify-center cursor-pointer hover:opacity-90 z-10">
                <BsArrowLeft className="text-sm md:text-lg"/>
            </div>
        )}

        renderArrowNext={(clickHandler,hasPrev)=>(
            <div onClick={clickHandler} className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black/[0.9] text-white flex items-center justify-center cursor-pointer hover:opacity-90 z-10">
                <BsArrowRight className="text-sm md:text-lg"/>
            </div>
        )}
      >
        <div>
          <img
            src="/slide-1.png"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:y-[25px] absolute left-0 bottom-[30px] md:bottom-[75px] bg-white text-black/[0.8] text-[15px] md:text-[25px] font-oswald uppercase cursor-pointer hover:opacity-90">
            show now
          </div>
        </div>

        <div>
          <img
            src="/slide-2.png"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:y-[25px] absolute left-0 bottom-[30px] md:bottom-[75px] bg-white text-black/[0.8] text-[15px] md:text-[25px] font-oswald uppercase cursor-pointer hover:opacity-90">
            show now
          </div>
        </div>

        <div>
          <img
            src="/slide-3.png"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:y-[25px] absolute left-0 bottom-[30px] md:bottom-[75px] bg-white text-black/[0.8] text-[15px] md:text-[25px] font-oswald uppercase cursor-pointer hover:opacity-90">
            show now
          </div>
        </div>
      </Carousel>

      <div className="my-10 md:mt-20 flex flex-col justify-center text-center max-w-[800px] mx-auto text-black px-2">
        <div className="capitalize mb-3 text-[20px] md:text-[27px] font-semibold">Cushioning for your miles</div>
        <div className="text-[14px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus vero, similique quasi amet illo reprehenderit modi dolores dicta distinctio laboriosam.</div>
      </div>
    </div>
  );
};

export default HeroBanner;
