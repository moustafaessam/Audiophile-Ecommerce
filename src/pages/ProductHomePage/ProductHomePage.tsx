import { useParams } from "react-router-dom";
import NotFound from "../Not Found/NotFound";
import Header from "../../features/ProductHomePage/Header/Header";
import StoreDescription from "../../components/UI/StoreDescription/StoreDescription";
import Footer from "../../components/Footer/Footer";
import ProductListing from "../../features/Home/ProductListing/ProductListing";
import Products from "../../features/ProductHomePage/Products/Products";

export default function ProductHomePage() {
  const validProducts = ["headphones", "speakers", "earphones"];
  const params = useParams();
  return validProducts.includes(params.productType || "") ? (
    <>
      <Header />
      <Products />
      <ProductListing
        styles={{ margin: "0 auto", marginTop: "12rem", marginBottom: "12rem" }}
      />
      <StoreDescription styles={{ marginTop: "0", marginBottom: "12rem" }} />
      <Footer />
    </>
  ) : (
    <NotFound />
  );
}
