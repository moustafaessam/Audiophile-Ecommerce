import {
  StyledImg,
  StyledNewProduct,
  StyledPicture,
  StyledProductDescription,
  StyledProductDetails,
  StyledProductHeader,
  StyledProductHomeContainer,
  StyledSource,
} from "./Products.styles";
import data from "../../../assets/data.json";
import SeeButton from "../../../components/UI/SeeButton/SeeButton";
import { useParams } from "react-router-dom";

export default function Products() {
  const params = useParams();
  return (
    <>
      {data.map((element) => {
        if (element.category === params.productType)
          return (
            <StyledProductHomeContainer key={element.slug}>
              <StyledPicture>
                <StyledSource
                  media="(max-width: 640px)"
                  srcSet={element.categoryImage.mobile}
                />
                <StyledSource
                  media="(max-width: 768px)"
                  srcSet={element.categoryImage.tablet}
                />
                <StyledImg src={element.categoryImage.desktop} alt="Product" />
              </StyledPicture>
              <StyledProductDetails>
                {element.new ? (
                  <StyledNewProduct>New Product</StyledNewProduct>
                ) : (
                  ""
                )}
                <StyledProductHeader>{element.name}</StyledProductHeader>
                <StyledProductDescription>
                  {element.description}
                </StyledProductDescription>
                <SeeButton
                  textColor="white"
                  backgroundColor="var(--dark-brown)"
                  path={`/${params.productType}/${element.slug}`}
                />
              </StyledProductDetails>
            </StyledProductHomeContainer>
          );
      })}
    </>
  );
}
