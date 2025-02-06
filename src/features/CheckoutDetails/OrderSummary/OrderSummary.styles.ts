import styled from "styled-components";

export const OrderSummaryContainer = styled.aside`
  background: var(--white);
  height: fit-content;
  padding: 3.2rem;
  color: var(--black);
  border-radius: 0.8rem;
  flex-grow: 1;
`;

export const OrderEmptyCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OrderEmptyCartText = styled.p`
  font-family: "Manrope Bold";
  font-size: 2rem;
`;

export const OrderEmptyImage = styled.img``;

export const OrderSummaryHeader = styled.header`
  font-family: "Manrope Bold";
  font-size: 1.8rem;
  letter-spacing: 0.129rem;
  margin-bottom: 3.1rem;
  text-transform: uppercase;
`;

export const OrderSummaryItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 3.2rem;
`;

export const OrderSummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const ItemImage = styled.img`
  width: 6.4rem;
  height: 6.4rem;
`;
export const ItemDetailsContainer = styled.div``;

export const ItemName = styled.p`
  font-family: "Manrope Bold";
  font-size: 1.5rem;
  line-height: 2.5rem;
  text-transform: uppercase;
`;

export const ItemPrice = styled.p`
  font-family: "Manrope Bold";
  font-size: 1.4rem;
  line-height: 2.5rem;
  opacity: 50%;
`;

export const ItemAmountContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-grow: 1;
  justify-content: flex-end;
`;

export const ItemAmount = styled.p`
  font-family: "Manrope Bold";
  font-size: 1.5rem;
  line-height: 2.5rem;
  opacity: 50%;
`;

export const OrderPriceDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const OrderPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OrderPriceLabel = styled.p`
  font-family: "Manrope Medium";
  font-size: 1.5rem;
  opacity: 50%;
  line-height: 2.5rem;
  text-transform: uppercase;
`;

export const OrderPrice = styled.p`
  font-family: "Manrope Bold";
  font-size: 1.8rem;
  letter-spacing: 0;
  color: ${(props) => (props.color ? "var(--dark-brown)" : "var(--black)")};
`;

export const OrderCheckoutButton = styled.button`
  border: none;
  background-color: var(--dark-brown);
  width: 100%;
  color: var(--white);
  font-family: "Manrope Bold";
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  height: 4.8rem;
  cursor: pointer;
  &:hover {
    opacity: 25%;
  }
`;
