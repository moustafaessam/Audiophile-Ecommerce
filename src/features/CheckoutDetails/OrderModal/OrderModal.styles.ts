import styled from "styled-components";

export const OrderModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OrderModalContainer = styled.div`
  background-color: var(--white);
  padding: 4.8rem;
  max-width: 54rem;
  border-radius: 0.8rem;
  opacity: 1;
  @media (max-width: 640px) {
    max-width: 32.7rem;
  }
`;

export const OrderCheckImage = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  margin-bottom: 3.3rem;
  @media (max-width: 640px) {
    margin-bottom: 2.3rem;
  }
`;

export const OrderApprecitationText = styled.p`
  font-family: "Manrope Bold";
  font-size: 3.2rem;
  line-height: 3.6rem;
  letter-spacing: 0.114rem;
  color: var(--black);
  text-transform: uppercase;
  margin-bottom: 2.4rem;
  max-width: 28.4rem;
  @media (max-width: 640) {
    margin-bottom: 1.6rem;
    font-size: 2.4rem;
    line-height: 2.8rem;
    letter-spacing: 0.088rem;
    max-width: 100%;
  }
`;

export const OrderEmailInform = styled.p`
  color: var(--black);
  opacity: 50%;
  font-family: "Manrope Medium";
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin-bottom: 3.3rem;
  @media (max-width: 640) {
    margin-bottom: 2.4rem;
  }
`;

export const OrderItemsAndTotalContainer = styled.div`
  background-color: var(--grey);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.4rem;
  margin-bottom: 4.6rem;
  @media (max-width: 640px) {
    grid-template-columns: auto;
    margin-bottom: 2.3rem;
  }
`;

export const OrderItemsMainContainer = styled.div`
  border-radius: 0.8rem 0 0 0.8rem;
  background-color: var(--grey);
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  padding: 2.4rem;
  @media (max-width: 640px) {
    border-radius: 0.8rem 0.8rem 0 0;
  }
`;

export const OrderItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const OrderItemDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OrderItemImage = styled.img`
  width: 5rem;
  height: 5rem;
`;

export const OrderItemDetails = styled.div``;

export const OrderItemName = styled.p`
  font-family: "Manrope Bold";
  font-size: 1.5rem;
  line-height: 2.5rem;
  text-transform: uppercase;
`;

export const OrderItemPrice = styled.p`
  opacity: 50%;
  font-family: "Manrope Bold";
  font-size: 1.4rem;
  line-height: 2.5rem;
`;

export const OrderItemQuantity = styled.p`
  opacity: 50%;
  color: var(--black);
  font-family: "Manrope Bold";
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin-left: 2rem;
  @media (max-width: 640px) {
    margin-left: 0;
  }
`;

export const OrderItemlineBreak = styled.hr`
  border: none;
  height: 0.1rem;
  background-color: #000000;
  opacity: 8%;
`;

export const OrderOtherItemsText = styled.p`
  text-align: center;
  font-family: "Manrope Bold";
  font-size: 1.2rem;
  letter-spacing: -0.021;
  opacity: 50%;
  color: var(--black);
`;

export const OrderTotalMainContainer = styled.div`
  border-radius: 0 0.8rem 0.8rem 0;
  background-color: #000000;
  display: flex;
  align-items: center;
  padding: 1.6rem;
  @media (max-width: 640px) {
    align-items: flex-start;
    border-radius: 0 0 0.8rem 0.8rem;
    height: 9.2rem;
    justify-content: flex-start;
  }
`;

export const OrderTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  @media (max-width: 640px) {
    margin: 0;
    justify-content: flex-start;
  }
`;

export const OrderGrandTotalText = styled.p`
  font-family: "Manrope Medium";
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: white;
  opacity: 50%;
  text-transform: uppercase;
`;

export const OrderTotalPrice = styled.p`
  font-family: "Manrope Bold";
  font-size: 1.8rem;
  color: var(--white);
`;

export const BackToHomeButton = styled.button`
  background-color: var(--dark-brown);
  color: var(--white);
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-family: "Manrope Bold";
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  width: 100%;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 25%;
  }
`;
