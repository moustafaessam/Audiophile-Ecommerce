import {
  ItemAmount,
  ItemAmountContainer,
  ItemDetailsContainer,
  ItemImage,
  ItemName,
  ItemPrice,
  OrderCheckoutButton,
  OrderEmptyCart,
  OrderEmptyCartText,
  OrderEmptyImage,
  OrderPrice,
  OrderPriceContainer,
  OrderPriceDetailsContainer,
  OrderPriceLabel,
  OrderSummaryContainer,
  OrderSummaryHeader,
  OrderSummaryItem,
  OrderSummaryItems,
} from "./OrderSummary.styles";
import data from "../../../assets/data.json";
import OrderModal from "../OrderModal/OrderModal";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

type OrderSummaryProps = {
  isModalShown: boolean;
};

export default function OrderSummary({ isModalShown }: OrderSummaryProps) {
  const products = useSelector((state: RootState) => state.cart.products);
  const totalPrice = products.reduce((acc, product) => {
    const foundElement = data.find((element) => product.name === element.slug);
    return foundElement ? acc + product.quantity * foundElement.price : acc;
  }, 0);
  const shipping = products.length > 0 ? 50 : 0;
  const vat = totalPrice * 0.2;
  const grandTotal = totalPrice + shipping + vat;
  return (
    <OrderSummaryContainer>
      {products.length > 0 ? (
        <>
          <OrderSummaryHeader>Summary</OrderSummaryHeader>
          {products.map((product) => {
            const foundElement = data.find(
              (element) => product.name === element.slug
            );
            return foundElement ? (
              <OrderSummaryItems key={product.name}>
                <OrderSummaryItem>
                  <ItemImage src={foundElement.image.desktop} />
                  <ItemDetailsContainer>
                    <ItemName>{foundElement.name}</ItemName>
                    <ItemPrice>{foundElement.price.toLocaleString()}</ItemPrice>
                  </ItemDetailsContainer>
                  <ItemAmountContainer>
                    <ItemAmount>x{product.quantity}</ItemAmount>
                  </ItemAmountContainer>
                </OrderSummaryItem>
              </OrderSummaryItems>
            ) : null;
          })}
          <OrderPriceDetailsContainer>
            <OrderPriceContainer>
              <OrderPriceLabel>Total</OrderPriceLabel>
              <OrderPrice>
                ${" "}
                {totalPrice.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </OrderPrice>
            </OrderPriceContainer>
            <OrderPriceContainer>
              <OrderPriceLabel>Shipping</OrderPriceLabel>
              <OrderPrice>$ {shipping}</OrderPrice>
            </OrderPriceContainer>
            <OrderPriceContainer>
              <OrderPriceLabel>Vat (included)</OrderPriceLabel>
              <OrderPrice>
                $
                {vat.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </OrderPrice>
            </OrderPriceContainer>
            <OrderPriceContainer
              style={{ marginTop: "2.4rem", marginBottom: "3.2rem" }}
            >
              <OrderPriceLabel>Grand (total)</OrderPriceLabel>
              <OrderPrice color="brown">
                ${" "}
                {grandTotal.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </OrderPrice>
            </OrderPriceContainer>
          </OrderPriceDetailsContainer>
          <OrderCheckoutButton type="submit">
            Continue & pay
          </OrderCheckoutButton>
          {isModalShown ? <OrderModal grandTotal={grandTotal} /> : ""}
        </>
      ) : (
        <OrderEmptyCart>
          <OrderEmptyCartText>Cart is Empty</OrderEmptyCartText>
          <OrderEmptyImage src={"/images/checkout/empty-cart.png"} />
        </OrderEmptyCart>
      )}
    </OrderSummaryContainer>
  );
}
