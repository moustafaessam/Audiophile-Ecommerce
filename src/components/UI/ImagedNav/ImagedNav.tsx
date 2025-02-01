import {
  StyledArrowImage,
  StyledImagedNavContainer,
  StyledImagedNavItem,
  StyledNavImage,
  StyledNavName,
  StyledNavShop,
} from "./ImagedNav.styles";

export default function ImagedNav() {
  return (
    <StyledImagedNavContainer>
      <StyledImagedNavItem>
        <StyledNavImage src="/images/shared/desktop/image-category-thumbnail-headphones.png" />
        <StyledNavName>Headphones</StyledNavName>
        <StyledNavShop>
          Shop
          <StyledArrowImage src="/images/shared/desktop/icon-arrow-right.svg" />
        </StyledNavShop>
      </StyledImagedNavItem>
      <StyledImagedNavItem>
        <StyledNavImage src="/images/shared/desktop/image-category-thumbnail-speakers.png" />
        <StyledNavName>Speakers</StyledNavName>
        <StyledNavShop>
          Shop
          <StyledArrowImage src="/images/shared/desktop/icon-arrow-right.svg" />
        </StyledNavShop>
      </StyledImagedNavItem>
      <StyledImagedNavItem>
        <StyledNavImage src="/images/shared/desktop/image-category-thumbnail-earphones.png" />
        <StyledNavName>Earphones</StyledNavName>
        <StyledNavShop>
          Shop
          <StyledArrowImage src="/images/shared/desktop/icon-arrow-right.svg" />
        </StyledNavShop>
      </StyledImagedNavItem>
    </StyledImagedNavContainer>
  );
}
