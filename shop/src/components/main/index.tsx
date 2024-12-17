import { useState, useEffect } from "react";
// import { products } from "../../data/productData";
import { Product } from "../../types";

const Main = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>; 
  }

  return (
    <main className="p-4">
      <div className="flex justify-between flex-wrap gap-4">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="flex flex-col items-center justify-between gap-2 border p-4 rounded-lg shadow-sm w-64 h-80 overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-contain"
            />
            <h2 className="text-xl w-fit font-medium truncate">
              {product.name}
            </h2>
            <h3 className="text-lg w-fit font-medium truncate">
              {product.price}
            </h3>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
