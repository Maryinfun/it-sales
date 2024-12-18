import { useState, useEffect } from "react";
import { Product } from "../../types";
import { useLocation } from "react-router-dom";

const Main = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const location = useLocation();
  useEffect(() => {
    const category = new URLSearchParams(location.search).get("category");
    setSelectedCategory(category);
  }, [location]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("/data/productData.json");

        if (!response.ok) {
          throw new Error("Something goes wrong...");
        }

        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(`The products couldn't be loaded: ${error.message}`);
        } else {
          setError("Unknown error");
        }
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main className="p-4">
      <div className="flex justify-between flex-wrap gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center justify-between gap-2 border p-4 rounded-lg shadow-sm w-full sm:w-64 md:w-72 lg:w-80 h-80 overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-contain"
            />
            <h2 className="text-xl w-fit font-medium truncate">{product.name}</h2>
            <h3 className="text-lg w-fit font-medium truncate">{product.price}</h3>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;