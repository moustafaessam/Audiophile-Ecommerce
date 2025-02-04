import styled from "styled-components";

export const StyledCustomerDetailsContainer = styled.form`
  max-width: 73rem;
  width: 100%;
  border-radius: 0.8rem;
  padding: 5.4rem 4.8rem 4.8rem 4.8rem;
  background-color: var(--white);
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 3rem 2.7rem;
  }
  @media (max-width: 640px) {
    padding: 2.4rem;
  }
`;

export const StyledFormHeader = styled.h1`
  text-transform: uppercase;
  font-family: "Manrope Bold";
  font-size: 3.2rem;
  color: var(--black);
  letter-spacing: 0.114rem;
  line-height: 3.6rem;
  margin-bottom: 4.1rem;
  @media (max-width: 640px) {
    margin-bottom: 3.2rem;
    font-size: 2.8rem;
    letter-spacing: 0.1rem;
  }
`;

export const StyledBillingDetailsHeader = styled.h2`
  text-transform: uppercase;
  font-size: 1.3rem;
  font-family: "Manrope Bold";
  line-height: 2.5rem;
  color: var(--dark-brown);
  letter-spacing: 0.093rem;
  margin-bottom: 1.6rem;
`;

export const StyledBillingDetailsContainer = styled.div`
  display: grid;
  margin-bottom: 5.3rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  row-gap: 2.4rem;
  column-gap: 1.6rem;
  @media (max-width: 640px) {
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 2.4rem;
    margin-bottom: 3.2rem;
  }
`;

export const StyledNameLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

export const StyledNameHeader = styled.h3`
  display: flex;
  justify-content: space-between;
  font-family: "Manrope Bold";
  font-size: 1.2rem;
  letter-spacing: -0.021rem;
  color: var(--black);
`;

export const StyledError = styled.p`
  font-size: 1.2rem;
  font-family: "Manrope Medium";
  color: red;
  letter-spacing: -0.021rem;
`;

export const StyledNameInput = styled.input`
  font-family: "Manrope Bold";
  border: 1px solid #cfcfcf;
  height: 5.6rem;
  width: 100%;
  letter-spacing: -0.025rem;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  padding: 0 2.4rem;
  border-radius: 0.8rem;
  opacity: 40%;
`;

export const StyledEmailLabel = styled(StyledNameLabel)``;

export const StyledEmailHeader = styled(StyledNameHeader)``;

export const StyledEmailInput = styled(StyledNameInput)``;

export const StyledPhoneLabel = styled(StyledNameLabel)``;

export const StyledPhoneHeader = styled(StyledNameHeader)``;

export const StyledPhoneInput = styled(StyledNameInput)`
  appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledShippingDetailsHeader = styled(StyledBillingDetailsHeader)``;

export const StyledShippingDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  margin-bottom: 5.3rem;
  row-gap: 2.4rem;
  column-gap: 1.6rem;
  @media (max-width: 640px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(4, 1fr);
    gap: 2.4rem;
    margin-bottom: 3.2rem;
  }
`;

export const StyledAddressLabel = styled(StyledNameLabel)`
  grid-column: 1 / span 2;
  @media (max-width: 640px) {
    grid-column: auto;
  }
`;

export const StyledAddressHeader = styled(StyledNameHeader)``;

export const StyledAddressInput = styled(StyledNameInput)``;

export const StyledZipLabel = styled(StyledNameLabel)``;

export const StyledZipHeader = styled(StyledNameHeader)``;

export const StyledZipInput = styled(StyledNameInput)``;

export const StyledCityLabel = styled(StyledNameLabel)``;

export const StyledCityHeader = styled(StyledNameHeader)``;

export const StyledCityInput = styled(StyledNameInput).attrs({
  as: "select",
})`
  cursor: pointer;
`;

export const StyledCityOption = styled.option`
  cursor: pointer;
`;

export const StyledCountryLabel = styled(StyledNameLabel)``;

export const StyledCountryHeader = styled(StyledNameHeader)``;

export const StyledCountryOption = styled.option``;

export const StyledCountryInput = styled(StyledNameInput).attrs({
  as: "select",
})`
  cursor: pointer;
`;

export const StyledPaymentDetailsHeader = styled(StyledBillingDetailsHeader)``;

export const StyledPaymentDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr 1fr;
  row-gap: 1.6rem;
  margin-bottom: 6.1rem;
  @media (max-width: 768px) {
    margin-bottom: 2.1rem;
  }
  @media (max-width: 640px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
    margin-bottom: 3.2rem;
  }
`;

export const StyledPaymentHeader = styled(StyledNameHeader).attrs({
  as: "label",
})`
  grid-row: 1 / span 2;
  padding-right: 1rem;
  @media (max-width: 640px) {
    grid-row: auto;
    padding-right: 0;
  }
`;

export const StyledPaymentOptionContainer = styled.label`
  height: 5.6rem;
  display: flex;
  align-items: center;
  padding: 0 2.4rem;
  border: 1px solid var(--grey);
  gap: 1.6rem;
  border-radius: 0.8rem;
  &:has(input[type="radio"]:checked) {
    border: 1px solid var(--dark-brown);
  }
`;

export const StyledRadioStyle = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  border: 2px solid var(--grey);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPaymentOptionInput = styled.input`
  appearance: none;
  height: 1.2rem;
  width: 1.2rem;
  cursor: pointer;
  border-radius: 50%;
  &:checked {
    background-color: #d87d4a;
    accent-color: #d87d4a;
  }
`;

export const StyledPaymentOptionText = styled.p`
  font-family: "Manrope Bold";
  font-size: 1.4rem;
  letter-spacing: -0.025rem;
  color: var(--black);
`;

export const StyledEmoneyDetailsContainer = styled.div`
  gap: 1.6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 640px) {
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr;
  }
`;

export const StyledEmoneyNumberLabel = styled(StyledNameLabel)``;

export const StyledEmoneyNumberHeader = styled(StyledNameHeader)``;

export const StyledEmoneyNumberInput = styled(StyledNameInput)`
  &:disabled {
    background-color: var(--grey);
  }
`;

export const StyledEmoneyPinLabel = styled(StyledNameLabel)``;

export const StyledEmoneyPinHeader = styled(StyledNameHeader)``;

export const StyledEmoneyPinInput = styled(StyledEmoneyNumberInput)``;
