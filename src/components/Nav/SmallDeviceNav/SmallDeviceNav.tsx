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
  function handleChangePage() {
    handleClick();
  }

  return (
    <StyledSmallDeviceNavContainer>
      <StyledNavImage
        src="/images/shared/tablet/minimize-2.svg"
        onClick={handleClick}
        alt={isClicked ? "nav-close" : "nav-open"}
      />
      <StyledNavContainer>
        <StyledNavItem to="/home" onClick={handleChangePage}>
          Home
        </StyledNavItem>
        <StyledNavItem to="/headphones" onClick={handleChangePage}>
          Headphones
        </StyledNavItem>
        <StyledNavItem to="/speakers" onClick={handleChangePage}>
          Speakers
        </StyledNavItem>
        <StyledNavItem to="/earphones" onClick={handleChangePage}>
          Earphones
        </StyledNavItem>
      </StyledNavContainer>
    </StyledSmallDeviceNavContainer>
  );
}
