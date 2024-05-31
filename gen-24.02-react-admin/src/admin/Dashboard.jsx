import NavbarAdmin from "./NavbarAdmin";
import ProductList from "./ProductList";

function Dashboard() {
  return (
    <div className="flex">
      <NavbarAdmin />
      <div className="ml-44">
        <h2>Dashboard</h2>
        <div>
          <h3>Product Overview</h3>
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
