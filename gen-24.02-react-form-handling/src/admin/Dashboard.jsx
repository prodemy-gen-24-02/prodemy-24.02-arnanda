import { Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import AddProductForm from "./ProductForm";
import NavbarAdmin from "./NavbarAdmin";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <NavbarAdmin />
      <div className="content">
        <Routes>
          <Route path="products" element={<ProductList />} />
          <Route path="addproduct" element={<AddProductForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
