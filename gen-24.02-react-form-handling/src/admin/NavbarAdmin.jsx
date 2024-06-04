import { Link } from "react-router-dom";

const NavbarAdmin = () => {
  return (
    <nav className="mb-4 flex justify-between items-center bg-gray-800 p-4 rounded-md">
      <h1 className="text-white text-2xl">Admin Dashboard</h1>
      <div>
        <Link
          to="/admin/dashboard/products"
          className="mr-4 text-white hover:underline"
        >
          Product List
        </Link>
        <Link
          to="/admin/dashboard/addproduct"
          className="text-white hover:underline"
        >
          Add Product
        </Link>
      </div>
    </nav>
  );
};

export default NavbarAdmin;

// import { Link } from "react-router-dom";

// const NavbarAdmin = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/dashboard">Dashboard</Link>
//         </li>
//         <li>
//           <Link to="/add-product">Add Product</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default NavbarAdmin;
