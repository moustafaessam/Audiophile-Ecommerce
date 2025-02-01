import StoreDescription from "../../components/UI/StoreDescription/StoreDescription";
import Header from "../../features/Home/Header/Header";
import ProductListing from "../../features/Home/ProductListing/ProductListing";
import SelectedProducts from "../../features/Home/SelectedProducts/SelectedProducts";

export default function Home() {
  return (
    <>
      <Header />
      <ProductListing />
      <SelectedProducts />
      <StoreDescription />
    </>
  );
}
