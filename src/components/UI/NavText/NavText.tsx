import { StyledNavText, StyledNvTextContainer } from "./NavText.styles";

type NavTextProps = {
  isHidden: boolean;
  flexDir?: "column" | "row";
};

export default function NavText({ isHidden, flexDir }: NavTextProps) {
  function handleScroll() {
    window.scrollTo(0, 0);
  }
  return (
    <StyledNvTextContainer isHidden={isHidden} flexDir={flexDir}>
      <StyledNavText to="/" onClick={handleScroll}>
        Home
      </StyledNavText>
      <StyledNavText to="/headphones" onClick={handleScroll}>
        Headphones
      </StyledNavText>
      <StyledNavText to="/speakers" onClick={handleScroll}>
        Speakers
      </StyledNavText>
      <StyledNavText to="/earphones" onClick={handleScroll}>
        Earphones
      </StyledNavText>
    </StyledNvTextContainer>
  );
}
