import styled from "styled-components";

export const StyledNvTextContainer = styled.div`
  display: flex;
  gap: 3.2rem;
  color: var(--white);
  font-size: 1.3rem;
  font-family: "Manrope Bold";
  line-height: 25%;
  @media (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

export const StyledNavText = styled.p``;
