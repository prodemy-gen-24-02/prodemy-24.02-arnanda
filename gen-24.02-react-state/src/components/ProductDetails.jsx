import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import gale1 from "../assets/images/gallery-1.jpg";
import gale2 from "../assets/images/gallery-2.jpg";
import gale3 from "../assets/images/gallery-3.jpg";
import gale4 from "../assets/images/gallery-4.jpg";

const ProductDetails = (product) => {
  const [mainImage, setMainImage] = useState(gale1); // Menggunakan gale1 sebagai gambar utama

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-4xl">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 space-y-4 px-5">
          <div className="overflow-hidden border p-1">
            <img
              src={mainImage}
              alt={product.title}
              className="w-full cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex justify-between space-x-2">
            <img
              src={gale1}
              alt="Gambar Baju Kecil 1"
              className="w-1/4 cursor-pointer border p-1 transition-transform duration-300 hover:scale-105"
              onClick={() => handleImageClick(gale1)}
            />
            <img
              src={gale2}
              alt="Gambar Baju Kecil 2"
              className="w-1/4 cursor-pointer border p-1 transition-transform duration-300 hover:scale-105"
              onClick={() => handleImageClick(gale2)}
            />
            <img
              src={gale3}
              alt="Gambar Baju Kecil 3"
              className="w-1/4 cursor-pointer border p-1 transition-transform duration-300 hover:scale-105"
              onClick={() => handleImageClick(gale3)}
            />
            <img
              src={gale4}
              alt="Gambar Baju Kecil 4"
              className="w-1/4 cursor-pointer border p-1 transition-transform duration-300 hover:scale-105"
              onClick={() => handleImageClick(gale4)}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-4 px-5">
          <p className="text-sm text-gray-600">Home / T-Shirt</p>
          <h1 className="text-2xl font-bold">Red Printed T-Shirt by HRX</h1>
          <h4 className="text-xl font-semibold text-red-500 my-5">$50.00</h4>
          <div>
            <select
              id="size-select"
              className="block w-48 mt-2 p-2.5 border border-orange-500 rounded-lg"
            >
              <option value="" disabled selected>
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
            <input
              type="number"
              min="1"
              className="w-16 p-2 border border-orange-500 rounded-md text-lg mr-2"
            />
            <button className="bg-[#ff523b] hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <FontAwesomeIcon icon={faCartPlus} className="mr-1" />
              Add to Cart
            </button>
          </div>
          <h3 className="text-lg font-semibold flex items-center space-x-2">
            <span>Product Details</span>
            <i className="text-gray-500"></i>
          </h3>
          <p className="mt-2 text-gray-600">
            Give your summer wardrobe a style upgrade with the HRX Mens Active
            T- shirt Team it with a pair of shorts for your morning workout or a
            denims for an evening out with the guys.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
