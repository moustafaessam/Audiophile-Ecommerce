import styled from "styled-components";

type StyledCloseImage = {
  onClick: () => void;
};

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 640px) {
    & {
      padding: 3.2rem 2.4rem;
    }
  }
`;

export const StyledCloseImage = styled.img<StyledCloseImage>`
  width: 1.6rem;
  height: 1.5rem;
  cursor: pointer;
`;
