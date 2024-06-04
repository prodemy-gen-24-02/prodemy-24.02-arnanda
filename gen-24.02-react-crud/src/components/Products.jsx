import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function Products() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }
        const data = await response.json();

        // Featured Products: Ambil 4 produk pertama
        setFeaturedProducts(data.slice(0, 4));
        // Latest Products: Ambil produk ke-5 hingga terakhir
        setLatestProducts(data.slice(4));
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

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
