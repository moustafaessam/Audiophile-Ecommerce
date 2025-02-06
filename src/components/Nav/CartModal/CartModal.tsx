import {
  CartCheckoutButton,
  CartEmptyContainerImage,
  CartEmptyCotainer,
  CartEmptyCotainerText,
  CartHeaderContainer,
  CartItemAmountChangeContainer,
  CartItemAmountDecrease,
  CartItemAmountIncrease,
  CartItemAmountNumber,
  CartItemContainer,
  CartItemDetailsContainer,
  CartItemImage,
  CartItemName,
  CartItemPrice,
  CartItemsContainer,
  CartItemsHeader,
  CartModalBackground,
  CartModalContainer,
  CartModalPosition,
  CartRemoveAll,
  CartTotalContainer,
  CartTotalPrice,
  CartTotalText,
} from "./CartModal.styles";
import data from "../../../assets/data.json";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import {
  addQuantity,
  decreaseQuantity,
  removeAllProducts,
} from "../../../redux/cartSlice";

type CartModalProps = {
  setIsCartModalShown: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CartModal({ setIsCartModalShown }: CartModalProps) {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.cart.products);
  const navigate = useNavigate();
  function handleCheckoutNavigate() {
    setIsCartModalShown(false);
    navigate("/checkout");
  }
  const totalPrice = products.reduce((acc, product) => {
    const foundElement = data.find((element) => product.name === element.slug);
    return foundElement ? acc + product.quantity * foundElement.price : acc;
  }, 0);
  return (
    <CartModalBackground onClick={() => setIsCartModalShown(false)}>
      <CartModalPosition>
        {products.length > 0 ? (
          <CartModalContainer onClick={(e) => e.stopPropagation()}>
            <CartHeaderContainer>
              <CartItemsHeader>Cart ({products.length})</CartItemsHeader>
              <CartRemoveAll
                onClick={() => {
                  dispatch(removeAllProducts());
                }}
              >
                Remove all
              </CartRemoveAll>
            </CartHeaderContainer>
            <CartItemsContainer>
              {products.map((product) => {
                const foundElement = data.find(
                  (element) => product.name === element.slug
                );
                return foundElement ? (
                  <CartItemContainer key={product.name}>
                    <CartItemImage src={foundElement.image.desktop} />
                    <CartItemDetailsContainer>
                      <CartItemName>{foundElement.name}</CartItemName>
                      <CartItemPrice>
                        {foundElement.price.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </CartItemPrice>
                    </CartItemDetailsContainer>
                    <CartItemAmountChangeContainer>
                      <CartItemAmountDecrease
                        onClick={() => {
                          dispatch(decreaseQuantity({ name: product.name }));
                        }}
                      >
                        -
                      </CartItemAmountDecrease>
                      <CartItemAmountNumber>
                        {product.quantity}
                      </CartItemAmountNumber>
                      <CartItemAmountIncrease
                        onClick={() => {
                          dispatch(addQuantity({ name: product.name }));
                        }}
                      >
                        +
                      </CartItemAmountIncrease>
                    </CartItemAmountChangeContainer>
                  </CartItemContainer>
                ) : null;
              })}
            </CartItemsContainer>
            <CartTotalContainer>
              <CartTotalText>total</CartTotalText>
              <CartTotalPrice>
                $
                {totalPrice.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </CartTotalPrice>
            </CartTotalContainer>
            <CartCheckoutButton type="button" onClick={handleCheckoutNavigate}>
              Checkout
            </CartCheckoutButton>
          </CartModalContainer>
        ) : (
          <CartModalContainer>
            <CartEmptyCotainer>
              <CartEmptyCotainerText>Cart is empty</CartEmptyCotainerText>
              <CartEmptyContainerImage src="/images/checkout/empty-cart.png" />
            </CartEmptyCotainer>
          </CartModalContainer>
        )}
      </CartModalPosition>
    </CartModalBackground>
  );
}
