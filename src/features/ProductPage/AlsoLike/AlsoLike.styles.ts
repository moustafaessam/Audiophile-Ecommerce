import styled from "styled-components";

export const StyledAlsoLikeMainContainer = styled.section`
  max-width: 111rem;
  margin: 0 auto;
  display: flex;
  margin-bottom: 16rem;
  gap: 6.4rem;
  flex-direction: column;
  @media (max-width: 768px) {
    max-width: 68.9rem;
    margin-bottom: 12rem;
    gap: 5.6rem;
  }
  @media (max-width: 640px) {
    gap: 4rem;
    max-width: 32.7rem;
  }
`;

export const StyledAlsoLikeText = styled.div`
  text-align: center;
  color: var(--black);
  font-family: "Manrope Bold";
  font-size: 3.2rem;
  letter-spacing: 0.11rem;
  line-height: 3.6rem;
  text-transform: uppercase;
`;

export const StyledOtherItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  @media (max-width: 768px) {
    gap: 1.1rem;
  }
  @media (max-width: 640px) {
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 5.6rem;
  }
`;

export const StyledOtherItemContainer = styled.div``;

export const StyledOtherItemPicture = styled.picture``;

export const StyledOtherItemSource = styled.source``;

export const StyledOtherItemImage = styled.img`
  width: 100%;
  margin-bottom: 4rem;
  @media (max-width: 640px) {
    margin-bottom: 3.2rem;
  }
`;

export const StyledOtherItemName = styled.h1`
  text-align: center;
  text-transform: uppercase;
  color: var(--black);
  font-family: "Manrope Bold";
  font-size: 2.4rem;
  letter-spacing: 0.171rem;
  margin-bottom: 3.2rem;
`;

export const SeeButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
