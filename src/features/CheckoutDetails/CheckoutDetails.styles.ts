import styled from "styled-components";

export const StyledCheckoutDetailsContainer = styled.section`
  display: flex;
  gap: 3rem;
  max-width: 111rem;
  margin: 3.8rem auto 14.1rem auto;
  @media (max-width: 768px) {
    max-width: 68.9rem;
    flex-direction: column;
    gap: 3.2rem;
    margin: 2.4rem auto 11.6rem auto;
  }
  @media (max-width: 640px) {
    max-width: 32.7rem;
    margin: 2.4rem auto 9.7rem;
  }
`;
