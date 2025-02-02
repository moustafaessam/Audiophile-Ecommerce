import styled from "styled-components";

export const FooterContainer = styled.footer`
  gap: 3.6rem;
  background-color: var(--mixed-black);
  padding: 7.5rem 16.5rem 4.8rem 16.5rem;
  @media (max-width: 768px) {
    padding: 6rem 4rem 4.6rem 3.9rem;
  }
  @media (max-width: 640px) {
    padding: 3rem;
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.6rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3.2rem;
    align-items: flex-start;
    margin-bottom: 3.2rem;
  }
  @media (max-width: 640px) {
    align-items: center;
    gap: 4.8rem;
    margin-bottom: 4.8rem;
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 4fr 1fr;
  grid-template-areas: "text links" "copywright .";
  row-gap: 5.6rem;
  @media (max-width: 768px) {
    grid-template-areas: "text text" "copywright links";
    row-gap: 8rem;
  }
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    row-gap: 4.8rem;
  }
`;

export const FooterText = styled.p`
  grid-area: text;
  max-width: 54rem;
  opacity: 50%;
  color: var(--white);
  font-family: "Manrope Medium";
  font-size: 1.5rem;
  line-height: 2.5rem;
  @media (max-width: 768px) {
    max-width: 100%;
  }
  @media (max-width: 640px) {
    text-align: center;
    max-width: auto;
  }
`;

export const FooterCopywright = styled.p`
  grid-area: copywright;
  font-family: "Manrope Bold";
  color: var(--white);
  opacity: 50%;
  font-size: 1.5rem;
  display: flex;
  align-items: flex-start;

  @media (max-width: 640px) {
    justify-content: center;
    align-items: center;
  }
`;

export const FooterLinks = styled.p`
  grid-area: links;
  display: flex;
  gap: 1.6rem;
  align-items: center;
  justify-content: flex-end;
  align-items: flex-end;
  @media (max-width: 768px) {
    align-items: flex-start;
  }
  @media (max-width: 640px) {
    justify-content: center;
    align-items: flex-start;
  }
`;

export const FooterSingleLink = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;
