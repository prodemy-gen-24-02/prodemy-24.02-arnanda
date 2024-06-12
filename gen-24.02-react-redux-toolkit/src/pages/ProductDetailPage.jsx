import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductDetails from "../components/ProductDetails";
import RelatedProducts from "../components/RelatedProducts";

const ProductDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <Navbar />
      <ProductDetails id={id} />
      <RelatedProducts currentProductId={id} />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
