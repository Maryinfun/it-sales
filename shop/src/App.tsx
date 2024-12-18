import { useState } from "react";
import Main from "./components/main";
import Header from "./components/header";
import Menu from "./components/menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./components/productPage/productPage";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Router>
      <div className="App">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <Menu
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          setSelectedCategory={setSelectedCategory}
        />

        <Routes>
          <Route
            path="/"
            element={<Main selectedCategory={selectedCategory} />}
          />
          <Route path="/product/:productName" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;