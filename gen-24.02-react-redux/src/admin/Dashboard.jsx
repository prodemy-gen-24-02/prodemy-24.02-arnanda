import { Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";
import EditProductForm from "./EditProductForm";
import SidebarAdmin from "./SidebarAdmin";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <SidebarAdmin />
      <div className="content">
        <Routes>
          <Route path="products" element={<ProductList />} />
          <Route path="addproduct" element={<AddProductForm />} />
          <Route path="editproduct/:id" element={<EditProductForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
