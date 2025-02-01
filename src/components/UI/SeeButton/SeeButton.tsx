import { StyledSeeButton } from "./SeeButton.style";

type SeeButtonProps = {
  textColor?: string;
  backgroundColor?: string;
  styles?: React.CSSProperties;
};

export default function SeeButton({
  textColor,
  backgroundColor,
  styles,
}: SeeButtonProps) {
  return (
    <StyledSeeButton
      textColor={textColor}
      backgroundColor={backgroundColor}
      style={styles}
    >
      See Product
    </StyledSeeButton>
  );
}
