import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
