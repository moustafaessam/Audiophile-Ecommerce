import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledSmallDeviceNavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  border: 3px solid transparent;
  width: 100vw;
  height: 100vh;
  background-color: #0e0e0e;
  padding: 30px 40px;
  @media (max-width: 640px) {
    & {
      padding: 32px 24px;
    }
  }
`;

export const StyledNavImage = styled.img`
  cursor: pointer;
  width: 1.6rem;
  height: 1.5rem;
`;

export const StyledNavContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: white;
  font-family: "Manrope Bold";
  font-size: 1.6rem;
`;

export const StyledNavItem = styled(Link)`
  text-decoration: none;
  color: var(--white);
`;
