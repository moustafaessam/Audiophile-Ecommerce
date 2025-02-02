import { useNavigate } from "react-router-dom";
import { StyledBackButton, StyledBackContainer } from "./GoBack.styles";

export default function GoBack() {
  const navigate = useNavigate();
  function handleBackPage() {
    navigate(-1);
  }
  return (
    <StyledBackContainer>
      <StyledBackButton onClick={handleBackPage}>Go Back</StyledBackButton>
    </StyledBackContainer>
  );
}
