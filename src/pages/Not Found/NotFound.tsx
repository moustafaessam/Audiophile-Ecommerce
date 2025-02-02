import { StyledNotFound } from "./NotFound.styles";

export default function NotFound() {
  return (
    <StyledNotFound>
      <span style={{ color: "var(--dark-brown)" }}> Invalid </span> &nbsp;URL
    </StyledNotFound>
  );
}
