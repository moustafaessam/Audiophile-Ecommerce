import { useParams } from "react-router-dom";
import {
  SeeButtonWrapper,
  StyledAlsoLikeMainContainer,
  StyledAlsoLikeText,
  StyledOtherItemContainer,
  StyledOtherItemImage,
  StyledOtherItemName,
  StyledOtherItemPicture,
  StyledOtherItemsContainer,
  StyledOtherItemSource,
} from "./AlsoLike.styles";
import data from "../../../assets/data.json";
import SeeButton from "../../../components/UI/SeeButton/SeeButton";

export default function AlsoLike() {
  const { productName, productType } = useParams();
  const productfiltering = data.filter(
    (product) => productName?.toLowerCase() === product.slug
  );
  const product = productfiltering[0];
  return (
    <StyledAlsoLikeMainContainer>
      <StyledAlsoLikeText>You May Also Like</StyledAlsoLikeText>
      <StyledOtherItemsContainer>
        {product.others.map((element) => {
          const elementCategory = data.find((product) => product.slug);
          return (
            <StyledOtherItemContainer key={element.slug}>
              <StyledOtherItemPicture>
                <StyledOtherItemSource
                  media="(max-width:640px)"
                  srcSet={element.image.mobile}
                />
                <StyledOtherItemSource
                  media="(max-width:768px)"
                  srcSet={element.image.tablet}
                />
                <StyledOtherItemImage src={element.image.desktop} />
              </StyledOtherItemPicture>
              <StyledOtherItemName>{element.name}</StyledOtherItemName>
              <SeeButtonWrapper>
                <SeeButton
                  textColor="var(--white)"
                  backgroundColor="var(--dark-brown)"
                  path={`/${productType}/${element.slug}`}
                />
              </SeeButtonWrapper>
            </StyledOtherItemContainer>
          );
        })}
      </StyledOtherItemsContainer>
    </StyledAlsoLikeMainContainer>
  );
}
