import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

// const subMenuData = [
//   { id: 1, name: "Jordan", doc_count: 11 },
//   { id: 2, name: "Sneakers", doc_count: 8 },
//   { id: 3, name: "Running shoes", doc_count: 64 },
//   { id: 4, name: "Football shoes", doc_count: 107 },
// ];

const MobileMenu = ({ showCatMenu, setShowCatMenu, setMobileMenu,categories }) => {
  return (
    <ul className="w-full flex flex-col md:hidden absolute top-[50px] h-[calc(100vh-50px)] left-0 bg-white text-black font-medium border-t">
      {data?.map((menuItem) => {
        return (
          <React.Fragment key={menuItem.id}>
            {!!menuItem?.subMenu ? (
              <li
                className="cursor-pointer flex flex-col border-b py-4 px-5 relative"
                onClick={()=>setShowCatMenu(!showCatMenu)}
              >
                <div className="flex justify-between items-center">
                  {menuItem.name}
                  <BsChevronDown size={14} />
                </div>

                {showCatMenu && (
                  <ul className="bg-black/[0.1] -mx-5 mt-4 -mb-4">
                    {categories?.map(({attributes:data,id}) => {
                      return (
                        <Link href={`/category/${data?.slug}`} onClick={() => {
                            setShowCatMenu(false)
                            setMobileMenu(false)
                        }} key={id}>
                          <li className="px-12 py-4 border-t flex justify-between">
                            {data?.name}
                            <span className="opacity-50 text-sm"></span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="px-5 py-4 border-b ">
                <Link href={menuItem?.url} onClick={()=>setMobileMenu(false)}>{menuItem.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MobileMenu;
