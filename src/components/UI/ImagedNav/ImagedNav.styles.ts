import styled from "styled-components";

export const StyledImagedNavContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  @media (max-width: 768px) {
    & {
      gap: 1rem;
    }
  }
  @media (max-width: 640px) {
    & {
      grid-template-columns: auto;
      grid-template-rows: 1fr 1fr 1fr;
      gap: 3rem;
    }
  }
`;

export const StyledImagedNavItem = styled.div`
  background-color: var(--grey);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  height: 16.5rem;
  padding-top: 8.8rem;
  @media (max-width: 768px) {
    & {
      gap: 1.7rem;
    }
  }
`;

export const StyledNavImage = styled.img`
  width: 12.2rem;
  height: 16rem;
  object-fit: contain;
  position: absolute;
  top: -6rem;
  @media (max-width: 640px) {
    top: -4rem;
  }
`;

export const StyledNavName = styled.p`
  font-family: "Manrope Bold";
  font-size: 1.8rem;
  letter-spacing: 0.129rem;
  color: #000000;
  text-transform: uppercase;
  border-radius: 0.8rem;
  @media (max-width: 768px) {
    & {
      font-size: 1.5rem;
      letter-spacing: 0.107rem;
    }
  }
`;

export const StyledNavShop = styled.p`
  color: #000000;
  opacity: 50%;
  font-family: "Manrope Bold";
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  display: flex;
  align-items: center;
  gap: 1.3rem;
  cursor: pointer;
`;

export const StyledArrowImage = styled.img``;
