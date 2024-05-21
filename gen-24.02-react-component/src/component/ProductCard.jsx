// Import FontAwesomeIcon dari package react-fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";

// Fungsi komponen ProductCard dengan properti product
const ProductCard = (product) => {
  // Fungsi untuk menentukan ikon bintang yang akan digunakan
  const renderStarIcon = (index) => {
    if (index + 1 <= product.rating) return faStar;
    if (index + 0.5 === product.rating) return faStarHalfAlt;
    return faStar;
  };

  // Fungsi untuk menentukan warna pada tiap bintang
  const getStarColorClass = (index) => {
    return index + 1 <= product.rating || index + 0.5 === product.rating
      ? "text-[#ff523b]" // Jika rating >= index + 1 atau rating === index + 0.5, gunakan warna [#ff523b]
      : "text-gray-300"; // Jika tidak, gunakan warna abu-abu
  };

  return (
    // Container untuk kartu produk
    <div className="border p-4 space-y-3 transition-transform duration-500 transform hover:-translate-y-2 hover:shadow-xl rounded-lg bg-white">
      {/* Gambar produk */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full mb-2 rounded-lg"
      />
      {/* Judul produk */}
      <h4 className="text-lg font-semibold text-center text-gray-900">
        {product.title}
      </h4>
      {/* Garis bawah */}
      <div className="h-1 w-18 bg-[#ff523b] mx-auto mb-2 rounded-full"></div>
      {/* Bintang rating */}
      <div className="flex justify-center mb-2">
        {[...Array(5)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={renderStarIcon(index)}
            className={`h-5 w-5 mr-1 ${getStarColorClass(index)}`}
          />
        ))}
      </div>
      {/* Harga produk */}
      <p className="text-gray-700 text-center text-xl font-bold">
        ${product.price}
      </p>
      {/* Tombol Add to Cart */}
      <button className="block w-full bg-[#ff523b] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
        <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
        Add to Cart
      </button>
    </div>
  );
};

// Ekspor komponen ProductCard
export default ProductCard;
