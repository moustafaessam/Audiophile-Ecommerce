import {
  BackToHomeButton,
  OrderApprecitationText,
  OrderCheckImage,
  OrderEmailInform,
  OrderGrandTotalText,
  OrderItemContainer,
  OrderItemDetails,
  OrderItemDetailsContainer,
  OrderItemImage,
  OrderItemlineBreak,
  OrderItemName,
  OrderItemPrice,
  OrderItemQuantity,
  OrderItemsAndTotalContainer,
  OrderItemsMainContainer,
  OrderModalBackground,
  OrderModalContainer,
  OrderOtherItemsText,
  OrderTotalContainer,
  OrderTotalMainContainer,
  OrderTotalPrice,
} from "./OrderModal.styles";
import data from "../../../assets/data.json";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { removeAllProducts } from "../../../redux/cartSlice";

type OrderModalProps = {
  grandTotal: number;
};

export default function OrderModal({ grandTotal }: OrderModalProps) {
  const products = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch<AppDispatch>();
  const matchedFirstProduct = data.find((element) =>
    products.some((product) => product.name === element.slug)
  );

  console.log(matchedFirstProduct);
  const numberOfPurchasedProducts = products.length;
  const navigate = useNavigate();
  function handleHomeNavigate() {
    dispatch(removeAllProducts());
    navigate("/home");
  }
  return (
    <OrderModalBackground>
      <OrderModalContainer>
        <OrderCheckImage src="/images/checkout/icon-order-confirmation.svg" />
        <OrderApprecitationText>
          Thank you for your order
        </OrderApprecitationText>
        <OrderEmailInform>
          You will receive an email confirmation shortly.
        </OrderEmailInform>
        <OrderItemsAndTotalContainer>
          <OrderItemsMainContainer>
            <OrderItemContainer>
              <OrderItemDetailsContainer>
                <OrderItemImage src={matchedFirstProduct?.image.desktop} />
                <OrderItemDetails>
                  <OrderItemName>{matchedFirstProduct?.name}</OrderItemName>
                  <OrderItemPrice>
                    ${matchedFirstProduct?.price.toLocaleString()}
                  </OrderItemPrice>
                </OrderItemDetails>
                <OrderItemQuantity>x1</OrderItemQuantity>
              </OrderItemDetailsContainer>
              <OrderItemlineBreak />
              <OrderOtherItemsText>
                and {numberOfPurchasedProducts - 1} other item(s)
              </OrderOtherItemsText>
            </OrderItemContainer>
          </OrderItemsMainContainer>
          <OrderTotalMainContainer>
            <OrderTotalContainer>
              <OrderGrandTotalText>Grand Total</OrderGrandTotalText>
              <OrderTotalPrice>
                $
                {grandTotal.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </OrderTotalPrice>
            </OrderTotalContainer>
          </OrderTotalMainContainer>
        </OrderItemsAndTotalContainer>
        <BackToHomeButton type="button" onClick={handleHomeNavigate}>
          Back to home
        </BackToHomeButton>
      </OrderModalContainer>
    </OrderModalBackground>
  );
}
