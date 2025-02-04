import Footer from "../../components/Footer/Footer";
import CheckoutDetails from "../../features/CheckoutDetails/CheckoutDetails";
import GoBack from "../../features/ProductPage/GoBack/GoBack";
import Header from "../../features/ProductPage/Header/Header";
import { StyledSetBackground } from "./Checkout.styles";

export default function Checkout() {
  return (
    <StyledSetBackground>
      <Header />
      <GoBack />
      <CheckoutDetails />
      <Footer />
    </StyledSetBackground>
  );
}
