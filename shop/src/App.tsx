import { useState } from "react";
import Main from "./components/main";
import Header from "./components/header";
import Menu from "./components/menu";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <Main />
    </div>
  );
};

export default App;
