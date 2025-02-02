import Nav from "../../../components/Nav/Nav";
import {
  StyledProductHeader,
  StyledProductHeaderWrapper,
} from "./Header.styles";

export default function Header() {
  return (
    <StyledProductHeader>
      <StyledProductHeaderWrapper>
        <Nav />
      </StyledProductHeaderWrapper>
    </StyledProductHeader>
  );
}
