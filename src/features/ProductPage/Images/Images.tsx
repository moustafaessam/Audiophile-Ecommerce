import { useParams } from "react-router-dom";
import data from "../../../assets/data.json";
import {
  StyledGalleryImage,
  StyledGalleryPicture,
  StyledGalllerySource,
  StyledImagesContainer,
} from "./Images.styles";

export default function Images() {
  const { productName } = useParams();
  const productfiltering = data.filter(
    (product) => productName?.toLowerCase() === product.slug
  );
  const product = productfiltering[0];
  return (
    <StyledImagesContainer>
      {Object.entries(product.gallery).map(([key, value]) => (
        <StyledGalleryPicture
          key={key}
          position={key as "first" | "second" | "third"}
        >
          <StyledGalllerySource
            media="(max-width: 640px)"
            srcSet={value.mobile}
          />
          <StyledGalllerySource
            media="(max-width: 768px)"
            srcSet={value.tablet}
          />
          <StyledGalleryImage src={value.desktop} />
        </StyledGalleryPicture>
      ))}
    </StyledImagesContainer>
  );
}
