import Nav from "../../../components/Nav/Nav";
import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledLineBreak,
} from "./Header.styles";
import NewProduct from "./NewProduct/NewProduct";

export default function Header() {
  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <Nav />
        <StyledLineBreak />
        <NewProduct />
      </StyledHeaderWrapper>
    </StyledHeader>
  );
}
