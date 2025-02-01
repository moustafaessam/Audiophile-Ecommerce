import { StyledCloseImage, StyledNav } from "./Nav.styles";
import Logo from "../UI/Logo/Logo";
import NavText from "../UI/NavText/NavText";
import Cart from "./Cart/Cart";
import SmallDeviceNav from "./SmallDeviceNav/SmallDeviceNav";
import { useState, useEffect } from "react";

export default function Nav() {
  const [isClicked, setIsClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  function handleClick() {
    setIsClicked((previous) => !previous);
  }
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <StyledNav>
      {windowWidth <= 768 ? (
        isClicked ? (
          <SmallDeviceNav isClicked={isClicked} handleClick={handleClick} />
        ) : (
          <>
            <StyledCloseImage
              onClick={handleClick}
              src="/images/shared/tablet/maximize-2.svg"
            />
            <Logo />
            <NavText />
            <Cart />
          </>
        )
      ) : (
        <>
          <Logo />
          <NavText />
          <Cart />
        </>
      )}
    </StyledNav>
  );
}
