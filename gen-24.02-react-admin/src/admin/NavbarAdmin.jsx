import { Link } from "react-router-dom";

const NavbarAdmin = () => {
  return (
    <div className="navbar-admin bg-gray-800 text-white py-4">
      <h2 className="text-2xl font-bold">Admin Panel</h2>
      <ul className="mt-4">
        <li className="mb-2">
          <Link to="/admin/dashboard" className="hover:text-gray-300">
            Dashboard
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/admin/products" className="hover:text-gray-300">
            Products
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarAdmin;
