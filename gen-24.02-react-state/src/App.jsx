import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import RelatedProducts from "./components/RelatedProducts";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ProductDetails />
      <RelatedProducts />
      <Footer />
    </div>
  );
};

export default Home;
