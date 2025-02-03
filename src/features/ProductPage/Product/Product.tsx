import { useParams } from "react-router-dom";
import data from "../../../assets/data.json";
import {
  StyledProductDetails,
  StyledProductImage,
  StyledProductPicture,
  StyledProductPurchaseLabelContainer,
  StyledProductSource,
  StyledAddToCart,
  StyledPrice,
  StyledProductInfo,
  StyledProductNameHeader,
  StyledQuantityAndCartContainer,
  StyledQuantityBox,
  StyledQuantityChange,
  StyledQuantityNumber,
} from "./Product.styles";
import { StyledNewProduct } from "../../ProductHomePage/Products/Products.styles";

export default function Product() {
  const { productName } = useParams();
  const productfiltering = data.filter(
    (product) => productName?.toLowerCase() === product.slug
  );
  const product = productfiltering[0];
  return (
    <StyledProductPurchaseLabelContainer>
      <StyledProductPicture>
        <StyledProductSource
          media="(max-width: 640px)"
          srcSet={product.image.mobile}
        />
        <StyledProductSource
          media="(max-width: 768px)"
          srcSet={product.image.tablet}
        />
        <StyledProductImage src={product.image.desktop} alt="Product" />
      </StyledProductPicture>
      <StyledProductDetails>
        {product.new ? <StyledNewProduct>New Product</StyledNewProduct> : ""}
        <StyledProductNameHeader>{product.name}</StyledProductNameHeader>
        <StyledProductInfo>{product.description}</StyledProductInfo>
        <StyledPrice>$ {product.price.toLocaleString()}</StyledPrice>
        <StyledQuantityAndCartContainer>
          <StyledQuantityBox>
            <StyledQuantityChange>-</StyledQuantityChange>
            <StyledQuantityNumber>1</StyledQuantityNumber>
            <StyledQuantityChange>+</StyledQuantityChange>
          </StyledQuantityBox>
          <StyledAddToCart>Add to cart</StyledAddToCart>
        </StyledQuantityAndCartContainer>
      </StyledProductDetails>
    </StyledProductPurchaseLabelContainer>
  );
}
