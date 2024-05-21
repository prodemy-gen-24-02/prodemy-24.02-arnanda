import ProductCard from "./component/ProductCard";
import { Data } from "./Data";

const App = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold text-left mb-4">
        Featured Products
      </h2>
      <div className="flex flex-wrap">
        {/* Loop melalui setiap produk dalam Data */}
        {Data.map((product) => (
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

export default App;
