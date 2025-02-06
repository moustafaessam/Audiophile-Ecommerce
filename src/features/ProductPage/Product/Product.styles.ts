import styled from "styled-components";

export const StyledProductPurchaseLabelContainer = styled.section`
  max-width: 111rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16rem;
  @media (max-width: 1100px) {
    gap: 6.9rem;
  }
  @media (max-width: 768px) {
    max-width: 68.9rem;
    justify-content: flex-start;

    margin-bottom: 12rem;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 3.2rem;
    max-width: 32.7rem;
    margin-bottom: 8.9rem;
  }
`;

export const StyledProductPicture = styled.picture`
  max-width: 54rem;
  height: 56rem;
  @media (max-width: 768px) {
    max-width: 28.1rem;
    height: 48rem;
    width: 100%;
  }
  @media (max-width: 640px) {
    max-width: 100%;
    height: auto;
  }
`;

export const StyledProductSource = styled.source``;

export const StyledProductImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 44.55rem;
  width: 100%;
  @media (max-width: 768px) {
    width: auto;
    max-width: 100%;
    flex-grow: 1;
  }
`;

export const StyledProductNameHeader = styled.h1`
  font-family: "Manrope Bold";
  font-size: 4rem;
  line-height: 4.4rem;
  letter-spacing: 0.143rem;
  color: var(--black);
  margin-bottom: 3.2rem;
  @media (max-width: 768px) {
    font-size: 2.8rem;
    line-height: 3.2rem;
    letter-spacing: 0.1rem;
  }
  @media (max-width: 640px) {
    line-height: normal;
    margin-bottom: 2.4rem;
  }
`;

export const StyledProductInfo = styled.p`
  color: var(--black);
  font-size: 1.5rem;
  opacity: 50%;
  line-height: 2.5rem;
  margin-bottom: 3.2rem;
  @media (max-width: 640px) {
    margin-bottom: 2.4rem;
  }
`;

export const StyledPrice = styled.p`
  font-family: "Manrope Bold";
  color: var(--black);
  font-size: 1.8rem;
  letter-spacing: 0.129rem;
  margin-bottom: 4.7rem;
  @media (max-width: 640px) {
    margin-bottom: 3.1rem;
  }
`;

export const StyledQuantityAndCartContainer = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const StyledQuantityBox = styled.div`
  width: 100%;
  max-width: 12rem;
  height: 4.8rem;
  gap: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--grey);
`;

export const StyledQuantityChange = styled.button`
  background-color: initial;
  border: none;
  cursor: pointer;
  color: var(--black);
  opacity: 25%;
  width: 1.6rem;
  height: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledQuantityNumber = styled.p`
  color: var(--black);
  font-family: "Manrope Bold";
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
`;

export const StyledAddToCart = styled.button`
  max-width: 16rem;
  width: 100%;
  height: 4.8rem;
  background-color: var(--dark-brown);
  color: var(--white);
  border: none;
  font-family: "Manrope Bold";
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 25%;
  }
`;

export const StyledItemsNumberInCartMessage = styled.p`
  color: #007bff;
  font-family: "Manrope Medium";
  font-size: 1.3rem;
`;

type StyledCartMessageProps = {
  color: "error" | "success";
};

export const StyledCartMessage = styled.p<StyledCartMessageProps>`
  color: ${(props) => (props.color === "error" ? "#dc3545" : "#28a745")};
  font-family: "Manrope Medium";
  font-size: 1.3rem;
`;
