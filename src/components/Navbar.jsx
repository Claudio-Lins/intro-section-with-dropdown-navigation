import Image from "next/image";
import { useState } from "react";
import { Company, Features, Menus } from "../../data/menusMobile";
import { Dropdown } from "./Dropdown";

export function Navbar() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  function handleOpenSubmenu() {
    setIsSubMenuOpen(!isSubMenuOpen);
  }
  return (
    <div className="hidden md:flex h-24 w-full">
      <div className="container mx-auto flex items-center">
        <div className="mt-4">
          <Image src="/images/logo.svg" width={91} height={30} alt="" />
        </div>
        <div className=" ml-8 flex w-full items-center">
          <div className="flex gap-12 items-center w-full">
            <Dropdown titleMenu={Features} title="Features" />
            <Dropdown titleMenu={Company} title="Company" />
            <div className="flex flex-col ml-4">
                <div className="flex gap-16">
                    {Menus.map((menu, index) => (
                      <div
                        key={index}
                        className="flex items-center text-base md:text-sm text-almostBlack"
                      >
                        <span className="">{menu.icon}</span>
                        <a href={menu.link}>{menu.title}</a>
                      </div>
                    ))}
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <button className="text-sm">Login</button>
            <button className=" w-full rounded-xl border-2 border-almostBlack py-1 px-4 text-sm">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
