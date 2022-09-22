import Image from "next/image";
import Link from "next/link";
import { CaretDown, List, X } from "phosphor-react";
import { useState } from "react";
import { Menus } from "../../data/menus";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  function handleOpenMenu() {
    setIsMenuOpen(!isMenuOpen);
    setIsSubMenuOpen(false);
  }

  return (
    <>
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
      {/* {isOpen ? ( */}
      <div className="absolute inset-0 z-10 flex w-full">
        <div
          className={`z-10 h-screen w-1/3 origin-top bg-black bg-opacity-60 duration-500 ${
            !isMenuOpen ? "h-0 overflow-hidden" : "h-screen  p-5"
          }`}
        />
        <div
          className={`z-10  w-2/3 origin-top bg-white duration-500 ${
            !isMenuOpen ? "h-0 overflow-hidden" : "h-screen  p-5"
          }`}
        >
          <div className="pt-16">
            <ul>
              {Menus.map((menu, index) => (
                <>
                  <li
                    key={index}
                    className={`flex items-center gap-x-4 rounded-md p-2 text-sm text-almostBlack`}
                  >
                    <span
                      className={`flex-1 font-bold duration-300 ${
                        !isMenuOpen && "hidden"
                      }`}
                    >
                      {menu.title}
                    </span>
                    {menu.submenu && isMenuOpen && (
                      <CaretDown
                        className={`${isSubMenuOpen && "rotate-180"}`}
                        size={20}
                        color="#000"
                        weight="light"
                        onClick={() => {
                          setIsSubMenuOpen(!isSubMenuOpen);
                        }}
                      />
                    )}
                  </li>
                  {menu.submenu && isSubMenuOpen &&  (
                    <ul>
                      {menu.submenuItems.map((submenuItem, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-x-4 rounded-md p-2 px-4 text-sm text-slate-900 duration-700">
                          <span className="">
                            {submenuItem.icon}
                          </span>
                          <Link href={submenuItem.link}>
                            {submenuItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ))}
            </ul>
          </div>
          <div className="flex flex-col w-full gap-4 items-center justify-center mt-10">
            <div className="">Login</div>
            <button className=" border-2 w-full py-2 rounded-xl border-almostBlack px-4">Register</button>
          </div>
        </div>
      </div>
      {/* ) : null} */}
    </>
  );
}
