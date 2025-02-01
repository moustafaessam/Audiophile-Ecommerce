import ProductYX1 from "./ProductYX1/ProductYX1";
import ProductZX7 from "./ProductZX7/ProductZX7";
import ProductZX9 from "./ProductZX9/ProductZX9";
import { StyledSelectedProducts } from "./SelectedProduct.styles";

export default function SelectedProducts() {
  return (
    <StyledSelectedProducts>
      <ProductZX9 />
      <ProductZX7 />
      <ProductYX1 />
    </StyledSelectedProducts>
  );
}
