import styled from "styled-components";

export const StyledProductListing = styled.div`
  max-width: 110rem;
  margin: 12rem auto 16rem auto;
  @media (max-width: 768px) {
    & {
      max-width: 68.9rem;
      margin: 9.4rem auto 9.6rem auto;
    }
  }
  @media (max-width: 640px) {
    & {
      max-width: 32.7rem;
      margin: 4rem auto 12rem auto;
    }
  }
`;
