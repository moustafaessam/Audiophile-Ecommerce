import styled from "styled-components";

export const StyledProductHeader = styled.header`
  background-color: black;
`;

export const StyledProductHeaderWrapper = styled.div`
  max-width: 111rem;
  margin: 0 auto;
  padding: 3.2rem 0;
  @media (max-width: 768px) {
    max-width: 68.9rem;
  }
  @media (max-width: 640px) {
    padding: 0;
  }
`;
