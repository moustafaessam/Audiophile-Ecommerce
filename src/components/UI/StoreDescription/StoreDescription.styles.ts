import styled from "styled-components";

export const StoreDescriptionContainer = styled.section`
  max-width: 111rem;
  display: flex;
  gap: 12.5rem;
  margin: 20rem auto;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    max-width: 68.9rem;
    flex-direction: column;
    gap: 6.3rem;
    margin: 9.6rem auto;
  }
  @media (max-width: 640px) {
    max-width: 32rem;
    gap: 4rem;
    margin: 12rem auto;
  }
`;

export const StoreDescriptionDetailsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  min-width: 29rem;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const StoreDescriptionHeader = styled.h1`
  font-family: "Manrope Bold";
  font-size: 4rem;
  letter-spacing: 0.143rem;
  line-height: 4.4rem;
  text-transform: uppercase;
  color: black;
  @media (max-width: 640px) {
    font-size: 2.8rem;
    letter-spacing: 0.1rem;
    line-height: auto;
  }
`;

export const StoreDescriptionHeaderSpanHighlited = styled.span`
  color: var(--dark-brown);
`;

export const StoreDescriptionParagraph = styled.p`
  color: black;
  opacity: 50%;
  font-family: "Manrope Medium";
  line-height: 2.5rem;
  letter-spacing: 0;
  font-size: 1.5rem;
`;

export const StoreDescriptionImage = styled.img`
  flex-grow: 1;
  border-radius: 0.8rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
