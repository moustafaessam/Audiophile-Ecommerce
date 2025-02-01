import { StyledNavText, StyledNvTextContainer } from "./NavText.styles";

export default function NavText() {
  return (
    <StyledNvTextContainer>
      <StyledNavText>Home</StyledNavText>
      <StyledNavText>Headphones</StyledNavText>
      <StyledNavText>Speakers</StyledNavText>
      <StyledNavText>Earphones</StyledNavText>
    </StyledNvTextContainer>
  );
}
