import { FC } from "react";
import { MenuProps } from "../../types";

const Menu: FC<MenuProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div>
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-20 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "75%" }}
      >
        <div className="flex flex-col items-center p-4">
          <div className="flex gap-4 w-full justify-between">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-custom-black font-bold p-4 w-fit">CATEGORIES</h2>
            <button
              className="bg-transparent border-none focus:outline-none"
              onClick={toggleMenu}
            >
              <img
                src="/plus.png"
                alt="Menu"
                className={`w-12 h-12 ${isMenuOpen ? "rotate-45" : "hidden"}`}
              />
            </button>
          </div>

          <ul className="space-y-4">
            <li className="text-lg text-custom-black">FRUIT</li>
            <li className="text-lg text-custom-black">SWEETS</li>
            <li className="text-lg text-custom-black">CAKES</li>
          </ul>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default Menu;