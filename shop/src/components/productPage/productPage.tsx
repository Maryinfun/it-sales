import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../types";

const ProductPage = () => {
  const { productName } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/data/productData.json");
        if (!response.ok) {
          throw new Error("Failed to fetch product data.");
        }

        const products: Product[] = await response.json();
        const foundProduct = products.find(
          (p) => p.name.toLowerCase() === productName?.toLowerCase()
        );

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError("Product not found.");
        }
      } catch (error) {
        setError("Failed to load product details.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productName]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0 && value <= 999) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product?.name}(s) to the cart!`);
  };

  if (loading) {
    return <div className="text-center text-lg font-medium">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-lg font-medium text-red-500">
        {error}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center text-lg font-medium">Product not found.</div>
    );
  }

  return (
    <div className="p-4 flex flex-col items-center w-full">
      <div className="mt-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-48 h-48 object-contain sm:w-64 sm:h-64 md:w-80 md:h-80"
        />
      </div>

      <h1 className="text-2xl font-bold text-center text-custom-black sm:text-3xl md:text-4xl">
        {product.name.toUpperCase()}
      </h1>

      <p className="mt-4 text-custom-black text-base text-center sm:text-lg md:text-xl">
        {product.description}
      </p>

      <p className="mt-2 text-lg text-center text-custom-black font-medium sm:text-xl md:text-2xl">
        Price: {product.price}
      </p>

      <div className="mt-6 flex flex-col items-center">
        <label
          htmlFor="quantity"
          className="text-lg font-medium text-custom-black"
        >
          Quantity
        </label>
        <div className="flex items-center">
          <button
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            className="p-2 border border-gray-300 text-custom-black rounded-l-md text-lg"
          >
            -
          </button>
          <input
            id="quantity"
            type="number"
            min="1"
            max="999"
            value={quantity}
            onChange={handleQuantityChange}
            className="p-2 border-t border-b border-gray-300 text-custom-black text-center w-20 text-lg"
          />
          <button
            onClick={() => setQuantity(quantity < 999 ? quantity + 1 : 999)}
            className="p-2 border border-gray-300 text-custom-black rounded-r-md text-lg"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className="bg-custom-black py-2 px-5 text-white rounded-lg w-full sm:w-auto opacity-100"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
