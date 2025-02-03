import styled from "styled-components";

export const StyledContainer = styled.section`
  max-width: 111rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin-bottom: 16rem;
  gap: 12.5rem;
  @media (max-width: 768px) {
    display: flex;
    max-width: 68.9rem;
    flex-direction: column;
    margin-bottom: 12rem;
    gap: 12rem;
  }
  @media (max-width: 640px) {
    gap: 8.8rem;
    max-width: 32.7rem;
    margin-bottom: 8.8rem;
  }
`;

export const StyledFeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  @media (max-width: 640px) {
    gap: 2.4rem;
  }
`;

export const StyledFeaturesHeader = styled.h1`
  text-transform: uppercase;
  font-family: "Manrope Bold";
  font-size: 3.2rem;
  letter-spacing: 0.114rem;
  line-height: 3.6rem;
  color: var(--black);
  @media (max-width: 640px) {
    font-size: 2.4rem;
    letter-spacing: 0.086rem;
  }
`;

export const StyledFeautesDetails = styled.p`
  font-family: "Manrope Medium";
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: var(--black);
  opacity: 50%;
  white-space: pre-line;
`;

export const StyledBoxDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 1.1rem;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 2.4rem;
  }
`;

export const StyledBoxDetailsHeader = styled.h1`
  text-transform: uppercase;
  font-family: "Manrope Bold";
  font-size: 3.2rem;
  line-height: 3.6rem;
  letter-spacing: 0.114rem;
  color: var(--black);
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 1.1rem;
    max-width: 33.9rem;
    width: 100%;
  }
  @media (max-width: 640px) {
    max-width: fit-content;
    width: auto;
    font-size: 2.4rem;
    letter-spacing: 0.086rem;
  }
`;

export const StyledInBoxItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const StyledInBoxItems = styled.div`
  display: flex;
  gap: 2.4rem;
`;

export const StyledInBoxQuantity = styled.p`
  color: var(--dark-brown);
  font-size: 1.5rem;
  line-height: 2.5rem;
  font-family: "Manrope Bold";
`;

export const StyledInBoxItemName = styled.p`
  opacity: 50%;
  color: var(--black);
  line-height: 2.5rem;
  font-family: "Manrope Medium";
  text-transform: capitalize;
`;
