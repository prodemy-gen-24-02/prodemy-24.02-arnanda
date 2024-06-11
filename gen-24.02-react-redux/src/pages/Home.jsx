import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Header />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
