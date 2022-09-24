import Link from "next/link";
import { CaretDown } from "phosphor-react";
import { useState } from "react";

export function Dropdown({ titleMenu, title }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  function handleOpenSubmenu() {
    setIsSubMenuOpen(!isSubMenuOpen);
  }
  return (
    <div className="">
      <div className=" w-full flex justify-between items-center">
        <button
          onClick={handleOpenSubmenu}
          type="button"
          className="flex w-full justify-between px-4 py-2 text-base md:text-sm text-almostBlack focus:outline-none"
        >
          {title}
            </button>
          <div className="md:text-sm">
          <CaretDown
            className={`${isSubMenuOpen && "rotate-180"}`}
            color="#000"
            weight="bold"
            onClick={() => {
              setIsSubMenuOpen(!isSubMenuOpen);
            }}
          />
          </div>
      </div>
      {isSubMenuOpen && (
        <div className=" origin-top-right  bg-white md:absolute md:shadow rounded-md">
          <div className="py-1" role="none">
            <ul>
              {titleMenu.map((menu, index) => (
                <li
                  key={index}
                  className="flex items-center gap-x-4 rounded-md p-2 px-4 text-sm text-slate-900 duration-700"
                >
                  {menu.icon ? (<span className='pl-2'>{menu.icon}</span>) : <span className='md:hidden'>{menu.icon}</span>}
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
