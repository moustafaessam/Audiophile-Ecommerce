import styled from "styled-components";
import { Link } from "react-router-dom";

type StyledNvTextContainerProps = {
  isHidden: boolean;
  flexDir?: "column" | "row";
};

export const StyledNvTextContainer = styled.div<StyledNvTextContainerProps>`
  display: flex;
  gap: 3.2rem;
  color: var(--white);
  font-size: 1.3rem;
  font-family: "Manrope Bold";
  line-height: 25%;
  @media (max-width: 768px) {
    & {
      display: ${(props) => (props.isHidden ? "none" : "flex")};
    }
  }
  @media (max-width: 640px) {
    & {
      flex-direction: ${(props) =>
        props.flexDir === "column" ? "column" : "row"};
      align-items: ${(props) =>
        props.flexDir === "column" ? "center" : "flex-start"};
    }
  }
`;

export const StyledNavText = styled(Link)`
  text-decoration: none;
  color: var(--white);
`;
