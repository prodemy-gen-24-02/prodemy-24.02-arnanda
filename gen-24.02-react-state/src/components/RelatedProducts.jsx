import { ProductData } from "../data/ProductData";
import ProductCard from "./ProductCard";

const RelatedProducts = () => {
  // Ambil hanya 4 produk pertama
  const productsToShow = ProductData.slice(6, 9);

  return (
    <div className="max-w-6xl mx-auto px-6 py-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Related Products</h2>
        <button className="text-gray-800 hover:text-red-500 transition-colors duration-300">
          View More
        </button>
      </div>
      <div className="flex flex-wrap justify-between">
        {productsToShow.map((product) => (
          <div key={product.id} className="w-full md:w-1/3 lg:w-1/4 p-4">
            <ProductCard
              image={product.image}
              title={product.title}
              rating={product.rating}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
