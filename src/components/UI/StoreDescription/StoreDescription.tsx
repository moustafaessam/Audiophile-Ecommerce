import {
  StoreDescriptionContainer,
  StoreDescriptionDetailsContainer,
  StoreDescriptionHeader,
  StoreDescriptionHeaderSpanHighlited,
  StoreDescriptionImage,
  StoreDescriptionParagraph,
} from "./StoreDescription.styles";

export default function StoreDescription() {
  return (
    <StoreDescriptionContainer>
      <StoreDescriptionDetailsContainer>
        <StoreDescriptionHeader>
          Bringing you the{" "}
          <StoreDescriptionHeaderSpanHighlited>
            best{" "}
          </StoreDescriptionHeaderSpanHighlited>
          audio gear
        </StoreDescriptionHeader>
        <StoreDescriptionParagraph>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </StoreDescriptionParagraph>
      </StoreDescriptionDetailsContainer>
      <picture>
        <source
          srcSet="/images/shared/mobile/image-best-gear.jpg"
          media="(max-width: 640px)"
        />
        <source
          srcSet="/images/shared/tablet/image-best-gear.jpg"
          media="(max-width: 768px)"
        />
        <StoreDescriptionImage
          src="/images/shared/desktop/image-best-gear.jpg"
          alt="Best Gear"
          style={{
            flexGrow: "1",
          }}
        />
      </picture>
    </StoreDescriptionContainer>
  );
}
