import SeeButton from "../../../../components/UI/SeeButton/SeeButton";
import {
  StyledNewProductContainer,
  StyledNewProductDetails,
  StyledNewProductHeader,
  StyledNewProductName,
} from "./NewProduct.styles";

export default function NewProduct() {
  return (
    <StyledNewProductContainer>
      <StyledNewProductHeader>New Product</StyledNewProductHeader>
      <StyledNewProductName>XX99 Mark II HeadphoneS</StyledNewProductName>
      <StyledNewProductDetails>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </StyledNewProductDetails>
      <SeeButton
        textColor="white"
        backgroundColor="var(--dark-brown)"
        path="/headphones/xx99-mark-two-headphones"
      />
    </StyledNewProductContainer>
  );
}
