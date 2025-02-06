import styled from "styled-components";

type StyledSeeButtonProps = {
  textColor?: string;
  backgroundColor?: string;
};

export const StyledSeeButton = styled.button<StyledSeeButtonProps>`
  border: none;
  max-width: 16rem;
  width: 100%;
  height: 4.8rem;
  background-color: inherit;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  font-family: "Manrope Bold";
  font-size: 1.3rem;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    opacity: 25%;
  }
`;
