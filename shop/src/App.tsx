import { useState } from "react";
import Main from "./components/main";
import Header from "./components/header";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <Header />


      {/* TRANSFER      **************    CATEGORIES MENU */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-20 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "75%" }}
      >
        <div className="flex flex-col items-center p-4">
          <div className="flex gap-4">
            {" "}
            <h2 className="text-2xl font-bold w-fit p-4">CATEGORIES</h2>
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
            <li className="text-lg">FRUIT</li>
            <li className="text-lg">SWEETS</li>
            <li className="text-lg">CAKES</li>
          </ul>
        </div>
      </div>

      {/* DARK BG IF MENU OPEN */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMenu}
        />
      )}

      <Main />
    </div>
  );
};

export default App;
