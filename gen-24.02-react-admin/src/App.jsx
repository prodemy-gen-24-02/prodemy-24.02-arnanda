// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import ProductDetailPage from "./pages/ProductDetailPage";
// import ProductListPage from "./admin/ProductList";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/products/:id" element={<ProductDetailPage />} />
//       <Route path="/admin/products" element={<ProductListPage />} />
//     </Routes>
//   );
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import Dashboard from "./admin/Dashboard";
import ProductList from "./admin/ProductList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/products" element={<ProductList />} />
    </Routes>
  );
}

export default App;
