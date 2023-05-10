import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltLeft } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MobileMenu from "./MobileMenu";
import { fetchDataFromApi } from "@/utils/api";
import { useSelector } from "react-redux";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);
  const {cartItems} = useSelector((state)=>state.cart)

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY >= lastScrollY && !mobileMenu) {
        setShow("translate-y-[-80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }

    setLastScrollY(window.scrollY);
  };
  // console.log(window.scrollY)
  // console.log(lastScrollY)

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await fetchDataFromApi("/api/categories?populated=*");
    setCategories(data);
  };
  // console.log(categories)
  return (
    <div
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between sticky z-20 top-0 transition-transform duration-300 ${show} shadow-sm`}
    >
      <Wrapper className="h-[60px] flex items-center justify-between">
        <div className="flex gap-3 items-center">
          {mobileMenu ? (
            <span
              className="cursor-pointer"
              onClick={() => setMobileMenu(false)}
            >
              <VscChromeClose size={25} />
            </span>
          ) : (
            <span
              className="block md:hidden cursor-pointer"
              onClick={() => setMobileMenu(true)}
            >
              <BiMenuAltLeft size={25} />
            </span>
          )}

          <Link href="/">
            <img src="/logo.svg" className="w-[40px] md:w-[60px]" />
          </Link>
        </div>

        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} categories={categories} />
        {mobileMenu && (
          <MobileMenu
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            categories={categories}
          />
        )}

        <div className="flex items-center gap-2 text-black">
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center relative hover:bg-black/[0.2] cursor-pointer">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-[10px] md:text-[12px] text-white flex justify-center items-center px-[2px] md:px-[5px]">
              43
            </div>
          </div>

          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center relative hover:bg-black/[0.2] cursor-pointer">
              <BsCart className="text-[15px] md:text-[20px]" />
              {cartItems.length>0&&<div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-[10px] md:text-[12px] text-white flex justify-center items-center px-[2px] md:px-[5px]">
                {cartItems.length}
              </div>}
            </div>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
