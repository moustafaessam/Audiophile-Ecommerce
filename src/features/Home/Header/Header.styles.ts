import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #141414;
  background-image: url("images/home/desktop/image-hero.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3.2rem 2.4rem 0 2.4rem;
  @media (max-width: 1100px) {
    background-image: url("images/home/tablet/image-header.jpg");
  }
  @media (max-width: 768px) {
    & {
      padding: 3rem 4rem 0 4rem;
    }
  }
  @media (max-width: 640px) {
    & {
      padding: 0;
      background-image: url("images/home/mobile/image-header.jpg");
    }
  }
`;

export const StyledHeaderWrapper = styled.div`
  max-width: 111rem;
  width: 100%;
`;

export const StyledLineBreak = styled.hr`
  outline: none;
  border: none;
  background-color: var(--white);
  opacity: 20%;
  height: 0.1rem;
  width: 100%;
  margin-top: 3.2rem;
  @media (max-width: 768px) {
    margin-top: 3.2rem;
  }
  @media (max-width: 640px) {
    margin-top: 0;
  }
`;
