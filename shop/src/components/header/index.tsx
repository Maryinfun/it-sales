import { FC } from "react";
import { MenuProps } from "../../types";

const Header: FC<MenuProps> = ({ toggleMenu, isMenuOpen }) => {
  return (
    <header className="bg-white p-4 shadow-md flex flex-col justify-center items-center">
      <div className="flex flex-col items-center gap-2 text-center">
        {" "}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-custom-black font-bold font-sans">
          BEES CHOOSE US
        </h1>
        <h2 className="text-base sm:text-lg lg:text-xl text-custom-black font-sans font-semibold mb-4">
          *** WE CREATE YOUR SWEET REALITY ***
        </h2>
      </div>
      <button
        className={`fixed bottom-8 right-8 bg-transparent border-none focus:outline-none ${isMenuOpen ? "hidden" : ""} sm:hidden`}
        onClick={toggleMenu}
      >
        <img
          src="/plus.png"
          alt="Menu"
          className="w-12 h-12 transition-transform duration-300"
        />
      </button>
    </header>
  );
};
export default Header;
