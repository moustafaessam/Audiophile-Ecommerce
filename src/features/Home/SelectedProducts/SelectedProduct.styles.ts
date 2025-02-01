import styled from "styled-components";

export const StyledSelectedProducts = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  max-width: 111rem;
  @media (max-width: 768px) {
    & {
      max-width: 68.9rem;
      gap: 3.2rem;
    }
  }
  @media (max-width: 640px) {
    & {
      max-width: 32rem;
      gap: 2.4rem;
    }
  }
`;
