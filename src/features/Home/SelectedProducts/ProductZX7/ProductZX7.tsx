import SeeButton from "../../../../components/UI/SeeButton/SeeButton";
import {
  StyledProductZX7Container,
  StyledProductZX7Name,
  StyledProductZX9DetailsContainer,
} from "./ProductZX7.styles";

export default function ProductZX7() {
  return (
    <StyledProductZX7Container>
      <StyledProductZX9DetailsContainer>
        <StyledProductZX7Name>ZX7 SPEAKER</StyledProductZX7Name>
        <SeeButton textColor="color" styles={{ border: "2px solid black" }} />
      </StyledProductZX9DetailsContainer>
    </StyledProductZX7Container>
  );
}
