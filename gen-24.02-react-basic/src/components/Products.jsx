import { ProductData } from "../data/ProductData";
import ProductCard from "./ProductCard";

function Products() {
  // Ambil 4 produk pertama sebagai produk unggulan (Featured Products)
  const featuredProducts = ProductData.slice(0, 4);

  // Ambil produk ke-5 hingga terakhir sebagai produk terbaru (Latest Products)
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
              <ProductCard {...product} />
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
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
