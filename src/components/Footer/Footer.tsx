import Logo from "../UI/Logo/Logo";
import NavText from "../UI/NavText/NavText";
import {
  FooterContainer,
  FooterCopywright,
  FooterGrid,
  FooterLinks,
  FooterSingleLink,
  FooterText,
  NavWrapper,
} from "./Footer.styles";

export default function Footer() {
  return (
    <FooterContainer>
      <NavWrapper>
        <Logo />
        <NavText isHidden={false} flexDir="column" />
      </NavWrapper>
      <FooterGrid>
        <FooterText>
          Audiophile is an all in one stop to fulfill your audio needs. We{"'"}
          re a small team of music lovers and sound specialists who are devoted
          to helping you get the most out of personal audio. Come and visit our
          demo facility - we{"'"}re open 7 days a week.
        </FooterText>
        <FooterCopywright>Copyright 2021. All Rights Reserved</FooterCopywright>
        <FooterLinks>
          <FooterSingleLink src="/images/shared/desktop/icon-facebook.svg" />
          <FooterSingleLink src="/images/shared/desktop/icon-twitter.svg" />
          <FooterSingleLink src="/images/shared/desktop/icon-instagram.svg" />
        </FooterLinks>
      </FooterGrid>
    </FooterContainer>
  );
}
