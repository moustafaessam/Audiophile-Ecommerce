import styled from "styled-components";

export const StyledProductHomeContainer = styled.div`
  margin: 16rem auto;
  max-width: 111rem;
  display: flex;
  gap: 12.5rem;
  @media (max-width: 768px) {
    max-width: 68.9rem;
    flex-direction: column;
    gap: 5.2rem;
    margin: 12rem auto;
  }
  @media (max-width: 640px) {
    max-width: 32.7rem;
    flex-direction: column;
    gap: 3.2rem;
  }
`;

export const StyledPicture = styled.picture`
  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const StyledSource = styled.source``;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const StyledProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const StyledNewProduct = styled.div`
  font-size: 1.4rem;
  color: var(--dark-brown);
  letter-spacing: 1rem;
  font-family: "Manrope Medium";
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  @media (max-width: 640px) {
    margin-bottom: 2.4rem;
  }
`;

export const StyledProductHeader = styled.h1`
  font-family: "Manrope Bold";
  font-size: 4rem;
  letter-spacing: 0.143rem;
  line-height: 4.4rem;
  margin-bottom: 3.2rem;
  text-transform: uppercase;
  @media (max-width: 640px) {
    font-size: 2.8rem;
    letter-spacing: 0.1rem;
    line-height: auto;
    margin-bottom: 2.4rem;
  }
`;

export const StyledProductDescription = styled.p`
  font-family: "Manrope Medium";
  font-size: 1.5rem;
  color: var(--black);
  opacity: 50%;
  line-height: 2.5rem;
  margin-bottom: 4rem;
  @media (max-width: 768px) {
    margin-bottom: 2.4rem;
  }
`;
