import { FormProvider } from "react-hook-form";
import { StyledCheckoutDetailsContainer } from "./CheckoutDetails.styles";
import CustomerDetails, { FormProps } from "./CustomerDetails/CustomerDetails";
import { useForm } from "react-hook-form";
import OrderSummary from "./OrderSummary/OrderSummary";
import { useState } from "react";

export default function CheckoutDetails() {
  const [isModalShown, setIsModalShown] = useState(false);
  const form = useForm<FormProps>({ mode: "onChange" });
  const { handleSubmit } = form;
  function onSubmit() {
    setIsModalShown(true);
  }
  return (
    <FormProvider {...form}>
      <StyledCheckoutDetailsContainer onSubmit={handleSubmit(onSubmit)}>
        <CustomerDetails />
        <OrderSummary isModalShown={isModalShown} />
      </StyledCheckoutDetailsContainer>
    </FormProvider>
  );
}
