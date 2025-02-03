import { useParams } from "react-router-dom";
import data from "../../assets/data.json";
import NotFound from "../Not Found/NotFound";
import Header from "../../features/ProductPage/Header/Header";
import GoBack from "../../features/ProductPage/GoBack/GoBack";
import ProductListing from "../../features/Home/ProductListing/ProductListing";
import StoreDescription from "../../components/UI/StoreDescription/StoreDescription";
import Footer from "../../components/Footer/Footer";
import Product from "../../features/ProductPage/Product/Product";
import Images from "../../features/ProductPage/Images/Images";

export default function ProductPage() {
  const { productType, productName } = useParams();
  const productNames = data.map((product) => {
    if (product.category === productType?.toLowerCase()) return product.slug;
  });

  return productNames.includes(productName) ? (
    <>
      <Header />
      <GoBack />
      <Product />
      <Images />
      <ProductListing />
      <StoreDescription />
      <Footer />
    </>
  ) : (
    <NotFound />
  );
}
