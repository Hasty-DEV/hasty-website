import { useState } from "react";
import Logo from "./assets/Logo.svg";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import classNames from "classnames";

export function App() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <>
      <header className="w-screen bg-[#1d1b2b] sticky top-0 z-50">
        <nav className="w-full p-4 flex justify-between items-center">
          <a href="/">
            <img src={Logo} alt="Hasty DEV LOGO" />
          </a>
          <button
            type="button"
            className="p-2 text-sm text-gray-500 lg:hidden"
            onClick={() => setToggleMenu((val) => !val)}
          >
            <span className="sr-only">Open main menu</span>
            {!toggleMenu && <HiMenuAlt3 size={24} />}
            {toggleMenu && <MdClose size={24} />}
          </button>
        </nav>
      </header>
      <div
        className={classNames(
          "sticky w-full mt-2 bg-[#1d1b2b] p-4 transition-all duration-300 ease-in-out transform",
          toggleMenu && "translate-x-0 opacity-100",
          !toggleMenu && "translate-x-full opacity-0"
        )}
      >
        <ul className="flex flex-col gap-y-2 text-white">
          <li>
            <a href="#">Example 1</a>
          </li>
          <li>
            <a href="#">Example 2</a>
          </li>
          <li>
            <a href="#">Example 3</a>
          </li>
        </ul>
      </div>
    </>
  );
}
