import Image from "next/image";
import { List, X } from "phosphor-react";
import { useState } from "react";
import { Company, Features, Carrear, Menus } from "../../data/menusMobile";
import { Dropdown } from "./Dropdown";

export function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleOpenMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div className="flex  md:hidden w-full justify-between p-5">
    <div className="md:hidden">
      <div className="flex w-full justify-between p-5">
        <div>
          <Image src="/images/logo.svg" width={91} height={30} alt="" />
        </div>
        <div className="z-20">
          <button onClick={handleOpenMenu}>
            {isMenuOpen ? (
              <X size={32} color="#070109" />
            ) : (
              <List size={32} color="#070109" />
            )}
          </button>
        </div>
      </div>
      {/* Content */}
      <div className="absolute inset-0 z-10 flex w-full md:p-5">
      <div className="hidden md:block">
          <Image src="/images/logo.svg" width={91} height={30} alt="" />
        </div>
        <div
          className={`z-10 h-screen w-1/3 origin-top bg-black bg-opacity-60 duration-500 ${
            !isMenuOpen ? "h-0 overflow-hidden" : "h-screen  p-5"
          }`}
        />
        <div
          className={`z-10  w-2/3 origin-top bg-white pt-20 duration-500 ${
            !isMenuOpen ? "h-0 overflow-hidden" : "h-screen  p-5"
          }`}
        >
          <Dropdown titleMenu={Features} title="Features" />
          <Dropdown titleMenu={Company} title="Company" />
          <div className="flex flex-col">
            <div
              className="w-full origin-top-right  bg-white pl-4 ring-black ring-opacity-5 duration-300 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div className="py-1" role="none">
                <ul>
                  {Menus.map((menu, index) => (
                    <li
                      key={index}
                      className="flex items-center mb-3 text-base text-almostBlack"
                    >
                      <span className="">{menu.icon}</span>
                      <a href={menu.link}>{menu.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-4 items-center justify-center mt-10">
            <button className="">Login</button>
            <button className=" border-2 w-full py-2 rounded-xl border-almostBlack px-4">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
