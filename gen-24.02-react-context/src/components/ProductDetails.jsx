import { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { CartContext } from "../context/CartContext";

const fetchProduct = (url) => fetch(url).then((res) => res.json());

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, error } = useSWR(
    `http://localhost:3000/products/${id}`,
    fetchProduct
  );
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    if (product && product.images.length > 0) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    addToCart({ ...product, size: selectedSize }, quantity);
    navigate("/cart");
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-4xl">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 space-y-4 px-5">
          <div className="overflow-hidden border p-1">
            <img
              src={mainImage || product.images[0]}
              alt={product.title}
              className="w-full cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex justify-between space-x-2">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-1/4 cursor-pointer border p-1 transition-transform duration-300 hover:scale-105"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-4 px-5">
          <p className="text-sm text-gray-600">Home / {product.category}</p>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <h4 className="text-xl font-semibold text-red-500 my-5">
            ${product.price}
          </h4>
          <div>
            <select
              id="size-select"
              value={selectedSize}
              onChange={handleSizeChange}
              className="block w-48 mt-2 p-2.5 border border-orange-500 rounded-lg"
            >
              <option value="" disabled>
                Select Size
              </option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
          <div className="flex items-center mt-4">
            <button
              className="bg-[#ff523b] hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className="bg-gray-100 px-4 py-2">{quantity}</span>
            <button
              className="bg-[#ff523b] hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-r focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
          <button
            className="bg-[#ff523b] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
            onClick={handleAddToCart}
          >
            <FontAwesomeIcon icon={faCartPlus} className="mr-1" />
            Add to Cart
          </button>
          <h3 className="text-lg font-semibold flex items-center space-x-2">
            <span>Product Details</span>
            <i className="text-gray-500"></i>
          </h3>
          <p className="mt-2 text-gray-600">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
