import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const fetcher = (url) => fetch(url).then((res) => res.json());

const RelatedProducts = () => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentProduct = async () => {
      try {
        setLoading(true);
        const product = await fetcher(`http://localhost:3000/products/${id}`);
        setCurrentProduct(product);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentProduct();
  }, [id]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      if (currentProduct) {
        try {
          const products = await fetcher(
            `http://localhost:3000/products?category=${currentProduct.category}`
          );
          const filteredProducts = products.filter(
            (relatedProduct) => relatedProduct.id !== parseInt(id)
          );
          setRelatedProducts(filteredProducts);
        } catch (error) {
          setError(error);
        }
      }
    };

    fetchRelatedProducts();
  }, [currentProduct, id]);

  if (error) return <div>Error fetching data...</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Related Products</h2>
        <button className="text-gray-800 hover:text-red-500 transition-colors duration-300">
          View More
        </button>
      </div>
      <div className="flex flex-wrap">
        {relatedProducts.map(
          (product) =>
            product.id !== currentProduct.id && (
              <div key={product.id} className="w-full md:w-1/3 lg:w-1/4 p-4">
                <Link to={`/products/${product.id}`}>
                  <ProductCard
                    image={product.images[0]}
                    title={product.title}
                    rating={product.rating}
                    price={product.price}
                  />
                </Link>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
