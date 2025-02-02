import { useParams } from "react-router-dom";
import Nav from "../../../components/Nav/Nav";
import { StyledLineBreak } from "../../Home/Header/Header.styles";
import {
  StyledProductHeaderWrapper,
  StyledProductMainHeader,
  StyledProductName,
} from "./Header.styles";

export default function Header() {
  const params = useParams();
  console.log();
  return (
    <StyledProductMainHeader>
      <StyledProductHeaderWrapper>
        <Nav />
        <StyledLineBreak />
        <StyledProductName>{params.productType}</StyledProductName>
      </StyledProductHeaderWrapper>
    </StyledProductMainHeader>
  );
}
