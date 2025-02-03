import styled from "styled-components";

type StyledGalleryProps = {
  position: "first" | "second" | "third";
};

export const StyledImagesContainer = styled.section`
  max-width: 111rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 3rem;
  row-gap: 3.2rem;
  margin-bottom: 16rem;
  @media (max-width: 768px) {
    max-width: 68.9rem;
    column-gap: 1.8rem;
    row-gap: 2rem;
    margin-bottom: 12rem;
  }
  @media (max-width: 640px) {
    max-width: 32.7rem;
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 2rem;
  }
`;

export const StyledGalleryPicture = styled.picture<StyledGalleryProps>`
  grid-row: ${({ position }) => {
    switch (position) {
      case "first":
        return "1 / span 1";
      case "second":
        return "2 / span 1";
      case "third":
        return "1 / span 2";
      default:
        return "";
    }
  }};
  grid-column: ${({ position }) => {
    switch (position) {
      case "first":
        return "1 / span 1";
      case "second":
        return "1 / span 1";
      case "third":
        return "2 / span 1";
      default:
        return "";
    }
  }};
  @media (max-width: 640px) {
    grid-row: ${({ position }) => {
      switch (position) {
        case "first":
          return "1 / span 1";
        case "second":
          return "2 / span 1";
        case "third":
          return "3 / span 1";
        default:
          return "";
      }
    }};
    grid-column: auto;
  }
`;
export const StyledGalllerySource = styled.source``;

export const StyledGalleryImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
`;
