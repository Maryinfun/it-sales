import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productName } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-custom-black text-3xl sm:text-4xl md:text-5xl font-bold text-center">{productName?.toUpperCase()}</h1>
      <p className="mt-4 text-base sm:text-lg md:text-xl text-center">
      This page is under construction and will be active soon.
      </p>
    </div>
  );
};

export default ProductPage;
