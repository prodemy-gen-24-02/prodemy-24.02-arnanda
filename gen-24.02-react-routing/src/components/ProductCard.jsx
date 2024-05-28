import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";

const ProductCard = (product) => {
  const renderStarIcon = (index) => {
    if (index + 1 <= product.rating) return faStar;
    if (index + 0.5 === product.rating) return faStarHalfAlt;
    return faStar;
  };

  const getStarColorClass = (index) => {
    return index + 1 <= product.rating || index + 0.5 === product.rating
      ? "text-[#ff523b]"
      : "text-gray-300";
  };

  return (
    <div className="border p-4 space-y-3 transition-transform duration-500 transform hover:-translate-y-2 hover:shadow-xl rounded-lg bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover mb-2 rounded-lg"
      />
      <h4 className="text-lg font-semibold text-center text-gray-900">
        {product.title}
      </h4>
      <div className="h-1 w-18 bg-[#ff523b] mx-auto mb-2 rounded-full"></div>
      <div className="flex justify-center mb-2">
        {[...Array(5)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={renderStarIcon(index)}
            className={`h-5 w-5 mr-1 ${getStarColorClass(index)}`}
          />
        ))}
      </div>
      <p className="text-gray-700 text-center text-xl font-bold">
        ${product.price}
      </p>
      <button className="block w-full bg-[#ff523b] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
        <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
