import styled from "styled-components";

export const StyledProductZX9Container = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 0.8rem;
  display: flex;
  justify-content: flex-end;
  background-color: var(--dark-brown);
  background-image: url("/images/home/desktop/pattern-circles.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 1110px) {
    & {
      background-position: top;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export const StyledProductZX9Deatils = styled.div`
  max-width: 34.9rem;
  width: 100%;
  margin-right: 9.5rem;
  margin-bottom: 12.4rem;
  margin-top: 13.3rem;
  @media (max-width: 1110px) {
    & {
      margin-right: 0;
      text-align: center;
      margin-bottom: 6.4rem;
    }
  }
  @media (max-width: 640px) {
    & {
      margin-bottom: 5%.5;
    }
  }
`;

export const StyledProductZX9Name = styled.p`
  color: var(--white);
  font-family: "Manrope Bold";
  font-size: 5.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 2.4rem;
  line-height: 5.8rem;
  @media (max-width: 768px) {
    & {
      font-size: 5.6rem;
    }
  }
  @media (max-width: 1110px) {
    & {
      font-size: 3.6rem;
      line-height: 4rem;
      letter-spacing: 0.129rem;
    }
  }
`;

export const StyledProductZX9DetailsText = styled.p`
  color: var(--white);
  opacity: 75%;
  font-family: "Manrope Medium";
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin-bottom: 4rem;
  @media (max-width: 1110px) {
    & {
      margin-bottom: 2.4rem;
    }
  }
`;

export const StyledProductZX9Image = styled.img`
  width: 41rem;
  height: 47rem;
  position: absolute;
  top: 11rem;
  left: 12rem;
  object-fit: contain;
  @media (max-width: 1110px) {
    position: static;
    width: 19.7rem;
    height: 23.7rem;
    margin-bottom: 6.4rem;
    margin-top: 5.2rem;
  }
  @media (max-width: 640px) {
    margin-bottom: 3.2rem;
    width: 17.2rem;
    height: 20.7rem;
    margin-top: 5.5rem;
  }
`;
