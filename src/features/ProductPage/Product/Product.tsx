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
  StyledItemsNumberInCartMessage,
  StyledCartMessage,
} from "./Product.styles";
import { StyledNewProduct } from "../../ProductHomePage/Products/Products.styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { useState } from "react";
import { addProduct } from "../../../redux/cartSlice";

export default function Product() {
  const { productName } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState(""); // To store the message
  const products = useSelector((state: RootState) => state.cart.products);
  const productState = products.find((product) => product.name === productName);
  const quantity = productState ? productState.quantity : 0;
  const productfiltering = data.filter(
    (product) => productName?.toLowerCase() === product.slug
  );
  const product = productfiltering[0];
  function handleCountIncrease() {
    if (count < 10) {
      setCount(count + 1);
      setMessage(""); // Reset message on count increase
    } else {
      setMessage("Maximum number of items is 10");
    }
  }

  function handleCountDecrease() {
    if (count > 1) {
      setCount(count - 1);
      setMessage(""); // Reset message on count decrease
    }
  }

  function resetCount() {
    setCount(1);
    setMessage(""); // Reset message when resetCount is called
  }

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
        {message && (
          <StyledCartMessage
            color={
              message === "Maximum number of items is 10" ? "error" : "success"
            }
          >
            {message}
          </StyledCartMessage>
        )}
        {quantity > 0 && (
          <StyledItemsNumberInCartMessage>
            Item(s) in cart: {quantity}
          </StyledItemsNumberInCartMessage>
        )}

        <StyledQuantityAndCartContainer>
          <StyledQuantityBox>
            <StyledQuantityChange onClick={handleCountDecrease}>
              -
            </StyledQuantityChange>
            <StyledQuantityNumber>{count}</StyledQuantityNumber>
            <StyledQuantityChange onClick={handleCountIncrease}>
              +
            </StyledQuantityChange>
          </StyledQuantityBox>
          <StyledAddToCart
            onClick={() => {
              if (productName) {
                dispatch(addProduct({ name: productName, quantity: count }));
                resetCount();
                if (productState?.quantity) {
                  if (count + productState?.quantity <= 10) {
                    setMessage("Item(s) added successfully to the cart!");
                  } else {
                    setMessage("Maximum number of items is 10");
                  }
                }
              }
            }}
          >
            Add to cart
          </StyledAddToCart>
        </StyledQuantityAndCartContainer>
      </StyledProductDetails>
    </StyledProductPurchaseLabelContainer>
  );
}
