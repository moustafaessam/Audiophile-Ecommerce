import styled from "styled-components";

export const StyledProductZX7Container = styled.div`
  background-image: url("/images/home/desktop/image-speaker-zx7.jpg");
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    background-image: url("/images/home/tablet/image-speaker-zx7.jpg");
  }
  @media (max-width: 640px) {
    background-image: url("/images/home/mobile/image-speaker-zx7.jpg");
    background-size: cover;
  }
`;

export const StyledProductZX9DetailsContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin-top: 10.1rem;
  margin-bottom: 10.1rem;
  margin-left: 9.5rem;
  @media (max-width: 768px) {
    margin-left: 6.2rem;
  }
  @media (max-width: 640px) {
    margin-left: 2.4rem;
  }
`;

export const StyledProductZX7Name = styled.p`
  font-family: "Manrope Bold";
  font-size: 2.8rem;
  letter-spacing: 0.2rem;
  color: black;
`;
