import styled from "styled-components";

export const CartModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
`;

export const CartModalPosition = styled.div`
  max-width: 111rem;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  margin-top: 9rem;
  @media (max-width: 768px) {
    max-width: 68.9rem;
  }
  @media (max-width: 640px) {
    margin-right: 2.4rem;
  }
`;

export const CartModalContainer = styled.div`
  background-color: var(--white);
  padding: 3.2rem;
  max-width: 37.7rem;
  width: 100%;
  border-radius: 0.8rem;
  @media (max-width: 640px) {
    max-width: 32.7rem;
  }
`;

export const CartEmptyCotainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartEmptyCotainerText = styled.p`
  font-family: "Manrope Bold";
  font-size: 2rem;
`;

export const CartEmptyContainerImage = styled.img``;

export const CartHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.2rem;
`;

export const CartItemsHeader = styled.p`
  font-family: "Manrope Bold";
  font-size: 1.8rem;
  letter-spacing: 0.129rem;
  text-transform: uppercase;
  color: var(--pure-black);
`;

export const CartRemoveAll = styled.p`
  cursor: pointer;
  text-decoration: underline;
  color: var(--pure-black);
  opacity: 50%;
  line-height: 2.5rem;
  font-size: 1.5rem;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 3.2rem;
`;

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const CartItemImage = styled.img`
  width: 6.4rem;
  height: 6.4rem;
`;

export const CartItemDetailsContainer = styled.div`
  font-family: "Manrope Bold";

  line-height: 2.5rem;
  color: var(--pure-black);
`;

export const CartItemName = styled.p`
  font-size: 1.5rem;
`;

export const CartItemPrice = styled.p`
  font-size: 1.4rem;
`;

export const CartItemAmountChangeContainer = styled.div`
  width: 9.6rem;
  height: 3.2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--grey);
  font-family: "Manrope Bold";
  font-size: 1.3rem;
  color: var(--pure-black);
  letter-spacing: 0.1rem;
`;

export const CartItemAmountIncrease = styled.p`
  opacity: 50%;
  cursor: pointer;
`;

export const CartItemAmountNumber = styled.p``;

export const CartItemAmountDecrease = styled(CartItemAmountIncrease)`
  opacity: 50%;
`;

export const CartTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.4rem;
`;

export const CartTotalText = styled.p`
  font-family: "Manrope Medium";
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: var(--pure-black);
  opacity: 50%;
  text-transform: uppercase;
`;

export const CartTotalPrice = styled.p`
  font-family: "Manrope Bold";
  font-size: 1.8rem;
  color: var(--pure-black);
`;

export const CartCheckoutButton = styled.button`
  width: 100%;
  border: none;
  background-color: var(--dark-brown);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.8rem;
  font-family: "Manrope Bold";
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    opacity: 25%;
  }
`;
