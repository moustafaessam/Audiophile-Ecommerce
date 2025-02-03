import SeeButton from "../../../../components/UI/SeeButton/SeeButton";
import {
  StyledProductZX9Container,
  StyledProductZX9Deatils,
  StyledProductZX9DetailsText,
  StyledProductZX9Image,
  StyledProductZX9Name,
} from "./ProductZX9.styles";

export default function ProductZX9() {
  return (
    <StyledProductZX9Container>
      <StyledProductZX9Image src="/images/home/desktop/image-speaker-zx9.png" />
      <StyledProductZX9Deatils>
        <StyledProductZX9Name>ZX9 Speaker</StyledProductZX9Name>
        <StyledProductZX9DetailsText>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </StyledProductZX9DetailsText>
        <SeeButton
          textColor="white"
          backgroundColor="black"
          path="/speakers/zx9-speaker"
        />
      </StyledProductZX9Deatils>
    </StyledProductZX9Container>
  );
}
