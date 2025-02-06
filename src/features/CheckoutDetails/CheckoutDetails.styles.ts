import styled from "styled-components";

export const StyledCheckoutDetailsContainer = styled.form`
  display: flex;
  gap: 3rem;
  max-width: 111rem;
  margin: 3.8rem auto 14.1rem auto;
  @media (max-width: 1150px) {
    max-width: 100%;
    flex-direction: column;
    gap: 3.2rem;
  }
  @media (max-width: 760px) {
    max-width: 68.9rem;

    margin: 2.4rem auto 11.6rem auto;
  }
  @media (max-width: 640px) {
    max-width: 32.7rem;
    margin: 2.4rem auto 9.7rem;
  }
`;
