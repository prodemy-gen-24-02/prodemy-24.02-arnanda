import { Link } from "react-router-dom";

const SidebarAdmin = () => {
  return (
    <div className="bg-gray-800 h-screen fixed left-0 top-0 pt-16 w-64 z-50">
      <div className="p-4">
        <h1 className="text-white text-2xl mb-4">Admin Dashboard</h1>
        <ul>
          <li className="mb-2 relative z-10">
            <Link
              to="/admin/dashboard/products"
              className="text-white hover:underline"
            >
              Product List
            </Link>
          </li>
          <li className="mb-2 relative z-10">
            <Link
              to="/admin/dashboard/addproduct"
              className="text-white hover:underline"
            >
              Add Product
            </Link>
          </li>
          <li className="mb-2 relative z-10">
            <Link
              to="/admin/dashboard/editproduct/:id"
              className="text-white hover:underline"
            >
              Edit Product
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarAdmin;
