import { useParams } from "react-router-dom";
import {
  StyledBoxDetailsContainer,
  StyledBoxDetailsHeader,
  StyledContainer,
  StyledFeaturesContainer,
  StyledFeaturesHeader,
  StyledFeautesDetails,
  StyledInBoxItemName,
  StyledInBoxItems,
  StyledInBoxItemsContainer,
  StyledInBoxQuantity,
} from "./ProductExtraDetails.styles";
import data from "../../../assets/data.json";

export default function ProductExtraDetails() {
  const { productName } = useParams();
  const productfiltering = data.filter(
    (product) => productName?.toLowerCase() === product.slug
  );
  const product = productfiltering[0];
  return (
    <StyledContainer>
      <StyledFeaturesContainer>
        <StyledFeaturesHeader>Features</StyledFeaturesHeader>
        <StyledFeautesDetails>{product.features}</StyledFeautesDetails>
      </StyledFeaturesContainer>
      <StyledBoxDetailsContainer>
        <StyledBoxDetailsHeader>In the box</StyledBoxDetailsHeader>
        <StyledInBoxItemsContainer>
          {product.includes.map((element) => (
            <StyledInBoxItems key={element.item}>
              <StyledInBoxQuantity>{element.quantity}x</StyledInBoxQuantity>
              <StyledInBoxItemName>{element.item}</StyledInBoxItemName>
            </StyledInBoxItems>
          ))}
        </StyledInBoxItemsContainer>
      </StyledBoxDetailsContainer>
    </StyledContainer>
  );
}
