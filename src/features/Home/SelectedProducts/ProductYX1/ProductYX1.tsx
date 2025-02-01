import SeeButton from "../../../../components/UI/SeeButton/SeeButton";
import {
  ProductYX1Container,
  ProductYX1Details,
  ProductYX1ImageDiv,
  ProductYX1Name,
} from "./ProductYX1.styles";

export default function ProductYX1() {
  return (
    <ProductYX1Container>
      <ProductYX1ImageDiv></ProductYX1ImageDiv>
      <ProductYX1Details>
        <ProductYX1Name>YX1 EARPHONES</ProductYX1Name>
        <SeeButton textColor="black" styles={{ border: "2px solid black" }} />
      </ProductYX1Details>
    </ProductYX1Container>
  );
}
