import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "/assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { resetAuthData, selectUser } from "../store/reducers/authSlice";

const Navbar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(resetAuthData());
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md flex items-center justify-between p-5">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Website logo" className="w-32" />
        </Link>
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
        <li>
          {user.name && (
            <span className="text-gray-900">Welcome, {user.username}</span>
          )}
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="text-gray-900 hover:text-red-500"
          >
            Logout
            <FontAwesomeIcon icon={faSignOutAlt} className="ml-2" />
          </button>
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
