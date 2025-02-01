import styled from "styled-components";

export const StyledNewProductContainer = styled.div`
  position: relative;
  z-index: 99;
  max-width: 39.8rem;
  color: var(--white);
  margin-top: 12.8rem;
  margin-bottom: 15.8rem;
  @media (max-width: 1100px) {
    margin: 0 auto;
    margin-top: 12.6rem;
    max-width: 37.9rem;
    text-align: center;
    margin-bottom: 16.9rem;
  }
  @media (max-width: 640px) {
    margin-bottom: 11.2rem;
    margin-top: 10.8rem;
    max-width: 32.8rem;
  }
`;

export const StyledNewProductHeader = styled.h1`
  font-family: "Manrope Regular";
  font-size: 1.4rem;
  opacity: 50%;
  text-transform: uppercase;
  letter-spacing: 1rem;
  margin-bottom: 2.4rem;
  @media (max-width: 640px) {
    & {
      margin-bottom: 1.6rem;
    }
  }
`;

export const StyledNewProductName = styled.p`
  font-family: "Manrope Bold";
  font-size: 5.6rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  margin-bottom: 2.4rem;
  @media (max-width: 1100px) {
    & {
      font-size: 5.2rem;
      letter-spacing: 0.129rem;
    }
  }
  @media (max-width: 640px) {
    & {
      font-size: 3.6rem;
      letter-spacing: 0.129rem;
    }
  }
`;

export const StyledNewProductDetails = styled.p`
  opacity: 75%;
  font-family: "Manrope Medium";
  font-size: 1.5rem;
  letter-spacing: 0;
  max-width: 34.9rem;
  margin-bottom: 4rem;
  @media (max-width: 640px) {
    margin-bottom: 2.8rem;
  }
`;
