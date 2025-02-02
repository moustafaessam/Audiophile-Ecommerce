import styled from "styled-components";

export const StyledBackContainer = styled.div`
  margin: 0 auto;
  max-width: 111rem;
  padding: 7.9rem 0 5.6rem 0;
  @media (max-width: 768px) {
    max-width: 68.9rem;
    padding: 3.2rem 0;
  }
  @media (max-width: 640px) {
    padding: 3.2rem 2.4rem;
  }
`;

export const StyledBackButton = styled.button`
  background-color: initial;
  border: none;
  cursor: pointer;
  opacity: 50%;
  color: var(--black);
  font-family: "Manrope Medium";
  font-size: 1.5rem;
  line-height: 2.5rem;
`;
