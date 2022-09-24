import Link from "next/link";
import { CaretDown } from "phosphor-react";
import { useState } from "react";
import { Features } from "../../data/menusMobile";
import { Company } from "../../data/menusMobile";

export function Dropdown({titleMenu, title}) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);


  function handleOpenSubmenu() {
    setIsSubMenuOpen(!isSubMenuOpen);
  }
  return (
    <div className="">
      <div>
        <button
          onClick={handleOpenSubmenu}
          type="button"
          className="flex w-full justify-between bg-white px-4 py-2 text-base font-semibold text-almostBlack focus:outline-none md:hover:bg-gray-50 "
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {title}
          <CaretDown
            className={`${isSubMenuOpen && "rotate-180"}`}
            size={20}
            color="#000"
            weight="bold"
            onClick={() => {
              setIsSubMenuOpen(!isSubMenuOpen);
            }}
          />
        </button>
      </div>
      {isSubMenuOpen && (
        <div
          className="w-full origin-top-right  bg-white pl-4 ring-black ring-opacity-5 duration-300 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div className="py-1" role="none">
            <ul>
              {titleMenu.map((menu, index) => (
                <li
                  key={index}
                  className="flex items-center gap-x-4 rounded-md p-2 px-4 text-sm text-slate-900 duration-700"
                >
                  <span className="">{menu.icon}</span>
                  <Link href={menu.link}>{menu.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
