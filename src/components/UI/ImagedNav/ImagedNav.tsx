import {
  StyledArrowImage,
  StyledImagedNavContainer,
  StyledImagedNavItem,
  StyledNavImage,
  StyledNavName,
  StyledNavShop,
} from "./ImagedNav.styles";

export default function ImagedNav() {
  function handleScroll() {
    window.scrollTo(0, 0);
  }
  return (
    <StyledImagedNavContainer>
      <StyledImagedNavItem>
        <StyledNavImage src="/images/shared/desktop/image-category-thumbnail-headphones.png" />
        <StyledNavName>Headphones</StyledNavName>
        <StyledNavShop to="/headphones" onClick={handleScroll}>
          Shop
          <StyledArrowImage src="/images/shared/desktop/icon-arrow-right.svg" />
        </StyledNavShop>
      </StyledImagedNavItem>
      <StyledImagedNavItem>
        <StyledNavImage src="/images/shared/desktop/image-category-thumbnail-speakers.png" />
        <StyledNavName>Speakers</StyledNavName>
        <StyledNavShop to="/speakers" onClick={handleScroll}>
          Shop
          <StyledArrowImage src="/images/shared/desktop/icon-arrow-right.svg" />
        </StyledNavShop>
      </StyledImagedNavItem>
      <StyledImagedNavItem>
        <StyledNavImage src="/images/shared/desktop/image-category-thumbnail-earphones.png" />
        <StyledNavName>Earphones</StyledNavName>
        <StyledNavShop to="/earphones" onClick={handleScroll}>
          Shop
          <StyledArrowImage src="/images/shared/desktop/icon-arrow-right.svg" />
        </StyledNavShop>
      </StyledImagedNavItem>
    </StyledImagedNavContainer>
  );
}
