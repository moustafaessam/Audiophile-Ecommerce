import { StyledCheckoutDetailsContainer } from "./CheckoutDetails.styles";
import CustomerDetails from "./CustomerDetails/CustomerDetails";

export default function CheckoutDetails() {
  return (
    <StyledCheckoutDetailsContainer>
      <CustomerDetails />
    </StyledCheckoutDetailsContainer>
  );
}
