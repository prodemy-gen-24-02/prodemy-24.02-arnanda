import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md flex items-center justify-between p-5">
      <div className="logo">
        <img src={logo} alt="Website logo" className="w-32" />
      </div>
      <ul className="hidden md:flex space-x-6">
        <li>
          <a href="#home" className="text-gray-900 hover:text-red-500">
            Home
          </a>
        </li>
        <li>
          <a href="#products" className="text-gray-900 hover:text-red-500">
            Products
          </a>
        </li>
        <li>
          <a href="#about" className="text-gray-900 hover:text-red-500">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="text-gray-900 hover:text-red-500">
            Contact
          </a>
        </li>
        <li>
          <a href="#account" className="text-gray-900 hover:text-red-500">
            Account
          </a>
        </li>
      </ul>
      <a href="#cart">
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="w-8 h-8 text-gray-900 hover:text-red-500"
        />
      </a>
    </nav>
  );
};

export default Navbar;
