import { useNavigate } from "react-router-dom";
import { StyledSeeButton } from "./SeeButton.style";

type SeeButtonProps = {
  textColor?: string;
  backgroundColor?: string;
  styles?: React.CSSProperties;
  path: string;
};

export default function SeeButton({
  textColor,
  backgroundColor,
  styles,
  path,
}: SeeButtonProps) {
  const navigate = useNavigate();

  function handleNavigate() {
    window.scrollTo(0, 0);
    navigate(path);
  }

  return (
    <StyledSeeButton
      textColor={textColor}
      backgroundColor={backgroundColor}
      style={styles}
      onClick={handleNavigate}
    >
      See Product
    </StyledSeeButton>
  );
}
