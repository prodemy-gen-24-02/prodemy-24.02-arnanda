import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import Dashboard from "./admin/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/admin/dashboard/*" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
