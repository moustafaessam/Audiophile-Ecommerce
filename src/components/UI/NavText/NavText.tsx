import { StyledNavText, StyledNvTextContainer } from "./NavText.styles";

type NavTextProps = {
  isHidden: boolean;
  flexDir?: "column" | "row";
};

export default function NavText({ isHidden, flexDir }: NavTextProps) {
  return (
    <StyledNvTextContainer isHidden={isHidden} flexDir={flexDir}>
      <StyledNavText>Home</StyledNavText>
      <StyledNavText>Headphones</StyledNavText>
      <StyledNavText>Speakers</StyledNavText>
      <StyledNavText>Earphones</StyledNavText>
    </StyledNvTextContainer>
  );
}
