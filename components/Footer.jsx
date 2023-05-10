import React from "react";
import Wrapper from "./Wrapper";

import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full bg-black pt-14 pb-4 text-white">
      <Wrapper>
        <div className="text-white flex flex-wrap md:justify-between justify-center">
          <div className="flex gap-[40px] md:gap-[60px] lg:gap[75px] flex-wrap">
            <div className="flex-shrink-0 cursor-pointer">
              <p className="font-semibold mb-3">FIND A STORE</p>
              <div>
                <p className="font-semibold text-[12px] md:text-[14px]">
                  BECOME A PARTNER
                </p>
                <p className="font-semibold text-[12px] md:text-[14px]">
                  SIGN UP FOR EMAIL
                </p>
                <p className="font-semibold text-[12px] md:text-[14px]">
                 SEND US FEEDBACK
                </p>
                <p className="font-semibold text-[12px] md:text-[14px]">
                  STUDENT DISCOUNT
                </p>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-3 uppercase">Get help</p>
              <div className="cursor-pointer">
                <p className=" text-[14px] text-white/[0.5]">Order status</p>
                <p className=" text-[14px] text-white/[0.5]">Return</p>
                <p className=" text-[14px] text-white/[0.5]">Delivery</p>
                <p className=" text-[14px] text-white/[0.5]">Payment Options</p>
                <p className=" text-[14px] text-white/[0.5]">Contact us</p>
              </div>
            </div>

            <div className="w-fit">
              <p className="font-semibold mb-3 uppercase">about nike</p>
              <div className="cursor-pointer">
                <p className=" text-[14px] text-white/[0.5]">News</p>
                <p className=" text-[14px] text-white/[0.5]">Careers</p>
                <p className=" text-[14px] text-white/[0.5]">Investors</p>
                <p className=" text-[14px] text-white/[0.5]">Sustainabiity</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-5 md:mt-0">
            <div className="cursor-pointer hover:text-white/70">
              <BsFacebook className="text-[20px] md:text-[20px]"/>
            </div>
            <div className="cursor-pointer hover:text-white/70">
              <BsTwitter className="text-[20px] md:text-[20px]"/>
            </div>
            <div className="cursor-pointer hover:text-white/70">
              <BsInstagram className="text-[20px] md:text-[20px]"/>
            </div>
            <div className="cursor-pointer hover:text-white/70">
              <BsLinkedin className="text-[20px] md:text-[20px]"/>
            </div>
          </div>
        </div>
      </Wrapper>
      <div className="border-slate-800 border-t py-4 mt-5">
        <Wrapper className="flex items-center md:justify-between justify-center flex-col md:flex-row">
          <p className="text-[14px] text-white/[0.5] hover:text-white cursor-pointer">© 2023 Nike, Inc. All Rights Reserved</p>
          <div className="flex items-center gap-3">
            <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
              Guides
            </div>
            <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
              Terms of Sale
            </div>
            <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
              Terms of Use
            </div>
            <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
              Privacy Policy
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Footer;
