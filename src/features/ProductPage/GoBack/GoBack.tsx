import { useNavigate } from "react-router-dom";
import { StyledBackButton, StyledBackContainer } from "./GoBack.styles";

type GoBackProps = {
  styles?: React.CSSProperties;
};

export default function GoBack({ styles }: GoBackProps) {
  const navigate = useNavigate();
  function handleBackPage() {
    navigate(-1);
  }
  return (
    <StyledBackContainer style={styles}>
      <StyledBackButton onClick={handleBackPage}>Go Back</StyledBackButton>
    </StyledBackContainer>
  );
}
