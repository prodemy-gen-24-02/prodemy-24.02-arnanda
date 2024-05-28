import { Link } from "react-router-dom";
import { ProductData } from "../data/ProductData";
import ProductCard from "./ProductCard";

function Products() {
  // Ambil 4 produk pertama untuk Featured Products
  const featuredProducts = ProductData.slice(0, 4);

  // Ambil produk ke-5 hingga terakhir untuk Latest Products
  const latestProducts = ProductData.slice(4);

  return (
    <div className="products">
      <div className="container mx-auto max-w-6xl">
        {/* Featured Products */}
        <h2 className="title text-center mt-8 mb-12 text-xl font-bold">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {featuredProducts.map((product) => (
            <div key={product.id}>
              <Link to={`/products/${product.id}`}>
                <ProductCard
                  image={product.images[0]}
                  title={product.title}
                  rating={product.rating}
                  price={product.price}
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Latest Products */}
        <h2 className="title text-center mt-8 mb-12 text-xl font-bold">
          Latest Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {latestProducts.map((product) => (
            <div key={product.id}>
              <Link to={`/products/${product.id}`}>
                <ProductCard
                  image={product.images[0]}
                  title={product.title}
                  rating={product.rating}
                  price={product.price}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
