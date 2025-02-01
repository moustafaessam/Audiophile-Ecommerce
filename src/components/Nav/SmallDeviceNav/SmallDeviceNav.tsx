import {
  StyledSmallDeviceNavContainer,
  StyledNavImage,
  StyledNavContainer,
  StyledNavItem,
} from "./SmallDeviceNav.styles";

type SmallDeviceNavProps = {
  isClicked: boolean;
  handleClick: () => void;
};
export default function SmallDeviceNav({
  isClicked,
  handleClick,
}: SmallDeviceNavProps) {
  return (
    <StyledSmallDeviceNavContainer>
      <StyledNavImage
        src="/images/shared/tablet/minimize-2.svg"
        onClick={handleClick}
        alt={isClicked ? "nav-close" : "nav-open"}
      />
      <StyledNavContainer>
        <StyledNavItem>Home</StyledNavItem>
        <StyledNavItem>Headphones</StyledNavItem>
        <StyledNavItem>Speakers</StyledNavItem>
        <StyledNavItem>Earphones</StyledNavItem>
      </StyledNavContainer>
    </StyledSmallDeviceNavContainer>
  );
}
