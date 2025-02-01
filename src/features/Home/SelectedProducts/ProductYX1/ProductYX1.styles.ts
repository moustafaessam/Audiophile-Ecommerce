import styled from "styled-components";

export const ProductYX1Container = styled.div`
  display: flex;
  gap: 3rem;
  @media (max-width: 768) {
    gap: 1rem;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 2.4rem;
  }
`;

export const ProductYX1ImageDiv = styled.div`
  width: 100%;
  max-width: 54rem;
  height: 32rem;
  border-radius: 0.8rem;
  background-image: url("/images/home/desktop/image-earphones-yx1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    max-width: 33.9rem;
    background-image: url("/images/home/tablet/image-earphones-yx1.jpg");
  }
  @media (max-width: 640px) {
    width: auto;
    height: 20rem;
    background-image: url("/images/home/tablet/image-earphones-yx1.jpg");
  }
`;

export const ProductYX1Details = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f1f1f1;
  border-radius: 0.8rem;
`;

export const ProductYX1Name = styled.p`
  font-family: "Manrope Bold";
  font-size: 2.8rem;
  letter-spacing: 0.2rem;
  color: black;
`;
