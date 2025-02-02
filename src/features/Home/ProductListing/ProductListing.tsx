import ImagedNav from "../../../components/UI/ImagedNav/ImagedNav";
import { StyledProductListing } from "./ProductListing.style";

type ProductListingProps = {
  styles?: React.CSSProperties;
};

export default function ProductListing({ styles }: ProductListingProps) {
  return (
    <StyledProductListing style={styles}>
      <ImagedNav />
    </StyledProductListing>
  );
}
