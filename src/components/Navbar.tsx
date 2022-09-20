import Image from "next/image";
import { List, X } from "phosphor-react";
import React, { useState } from "react";
import { Menu } from "./Menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="flex w-full justify-between p-5">
        <div>
          <Image src="/images/logo.svg" width={91} height={30} alt="" />
        </div>
        <div className="z-20">
          <button onClick={handleOpenMenu}>
            {isOpen ? (
              <X size={32} color="#070109" />
            ) : (
              <List size={32} color="#070109" />
            )}
          </button>
        </div>
      </div>
      {isOpen ? (
        <div className="absolute z-10 flex w-full">
        <div className="z-10 h-screen w-1/3 bg-black bg-opacity-60"></div>
        <div className="z-10 h-screen flex-1 bg-white p-5 pt-20">
          <div className="">menu</div>
          <div className="">menu</div>
        </div>
      </div>
      ) : null}
    </>
  );
}
