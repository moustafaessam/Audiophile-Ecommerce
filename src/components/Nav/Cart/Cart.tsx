import { StyledCartImage } from "./Cart.styles";
import CartModal from "../CartModal/CartModal";
import { useState } from "react";

export default function Cart() {
  const [isCartModalShown, setIsCartModalShown] = useState(false);
  function handleCartModalView() {
    setIsCartModalShown(true);
  }
  return (
    <>
      <StyledCartImage
        src="/images/shared/desktop/icon-cart.svg"
        onClick={handleCartModalView}
      />
      {isCartModalShown ? (
        <CartModal setIsCartModalShown={setIsCartModalShown}></CartModal>
      ) : (
        ""
      )}
    </>
  );
}
