import styled from "styled-components";

export const StyledProductMainHeader = styled.header`
  background-color: var(--pure-black);
  padding-top: 3.2rem;
  height: 33.6rem;
  @media (max-width: 640px) {
    padding-top: 0;
    height: 19.2rem;
  }
`;

export const StyledProductHeaderWrapper = styled.div`
  height: 100%;
  max-width: 111rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    max-width: 68.9rem;
  }
  @media (max-width: 640px) {
    max-width: 100%;
  }
`;

export const StyledProductName = styled.h1`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  font-family: "Manrope Bold";
  color: var(--white);
  font-size: 4.4rem;
  letter-spacing: 0.143rem;
  line-height: 4.4rem;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
  @media (max-width: 640px) {
    font-size: 2.8rem;
    letter-spacing: 0.2rem;
  }
`;
