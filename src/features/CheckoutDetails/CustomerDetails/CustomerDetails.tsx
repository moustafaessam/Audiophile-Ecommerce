import {
  StyledAddressHeader,
  StyledAddressInput,
  StyledAddressLabel,
  StyledBillingDetailsContainer,
  StyledBillingDetailsHeader,
  StyledCODContainer,
  StyledCODImage,
  StyledCODText,
  StyledCustomerDetailsContainer,
  StyledEmailHeader,
  StyledEmailInput,
  StyledEmailLabel,
  StyledEmoneyDetailsContainer,
  StyledEmoneyNumberHeader,
  StyledEmoneyNumberInput,
  StyledEmoneyNumberLabel,
  StyledEmoneyPinHeader,
  StyledEmoneyPinInput,
  StyledEmoneyPinLabel,
  StyledError,
  StyledFormHeader,
  StyledNameHeader,
  StyledNameInput,
  StyledNameLabel,
  StyledPaymentDetailsContainer,
  StyledPaymentDetailsHeader,
  StyledPaymentHeader,
  StyledPaymentOptionContainer,
  StyledPaymentOptionInput,
  StyledPaymentOptionText,
  StyledPhoneHeader,
  StyledPhoneInput,
  StyledPhoneLabel,
  StyledRadioStyle,
  StyledShippingDetailsContainer,
  StyledShippingDetailsHeader,
  StyledZipHeader,
  StyledZipInput,
  StyledZipLabel,
} from "./CustomerDetails.styles";
import { useFormContext } from "react-hook-form";
import CityAndCountryInput from "./CityAndCountryInput/CityAndCountryInput";

export type FormProps = {
  name: string;
  email: string;
  phoneNumber: number;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  paymentOption: "cashOnDelivery" | "eMoney";
  eMoneyNumber: string;
  eMoneyPin: string;
};

export default function CustomerDetails() {
  const {
    register,

    formState: { errors },
    watch,
    setValue,
  } = useFormContext<FormProps>();
  const watchPaymentOption = watch("paymentOption");

  return (
    <StyledCustomerDetailsContainer>
      <StyledFormHeader>Checkout</StyledFormHeader>
      <StyledBillingDetailsHeader>Billing Address</StyledBillingDetailsHeader>
      <StyledBillingDetailsContainer>
        <StyledNameLabel htmlFor="name">
          <StyledNameHeader>
            Name
            {errors.name?.message && (
              <StyledError>{errors.name?.message}</StyledError>
            )}
          </StyledNameHeader>

          <StyledNameInput
            type="text"
            id="name"
            {...register("name", {
              required: { value: true, message: "Field is Required" },
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
              maxLength: {
                value: 50,
                message: "Name cannot exceed 50 characters",
              },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Name must contain only letters",
              },
            })}
          />
        </StyledNameLabel>
        <StyledEmailLabel htmlFor="email">
          <StyledEmailHeader>
            Email Address
            {errors.email?.message && (
              <StyledError>{errors.email.message}</StyledError>
            )}
          </StyledEmailHeader>
          <StyledEmailInput
            type="text"
            id="email"
            {...register("email", {
              required: { value: true, message: "Field is Required" },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
          />
        </StyledEmailLabel>
        <StyledPhoneLabel htmlFor="phoneNumber">
          <StyledPhoneHeader>
            Phone Number
            {errors.phoneNumber?.message && (
              <StyledError>{errors.phoneNumber.message}</StyledError>
            )}
          </StyledPhoneHeader>
          <StyledPhoneInput
            id="phoneNumber"
            {...register("phoneNumber", {
              required: { value: true, message: "Field is Required" },
              pattern: {
                value: /^[+]?[0-9]{1,4}?[0-9\s.-]{3,}$/,
                message: "Invalid phone number",
              },
            })}
            type="text"
            inputMode="numeric"
            onKeyDown={(e) => {
              if (
                !/[\d\s+-]/.test(e.key) && // ✅ Allows digits, spaces, +, and -
                e.key !== "Backspace"
              ) {
                e.preventDefault(); // ✅ Blocks other characters
              }
            }}
          />
        </StyledPhoneLabel>
      </StyledBillingDetailsContainer>
      <StyledShippingDetailsHeader>Shipping info</StyledShippingDetailsHeader>
      <StyledShippingDetailsContainer>
        <StyledAddressLabel htmlFor="zipCode">
          <StyledAddressHeader>
            Your Address
            {errors.address?.message && (
              <StyledError>{errors.address.message}</StyledError>
            )}
          </StyledAddressHeader>
          <StyledAddressInput
            id="zipCode"
            type="text"
            {...register("address", {
              required: { value: true, message: "Field is Required" },
              minLength: { value: 10, message: "Enter more detailed Address" },
              maxLength: {
                value: 200,
                message: "Maximum length is 200 characters",
              },
              valueAsNumber: true,
            })}
          />
        </StyledAddressLabel>
        <StyledZipLabel>
          <StyledZipHeader>
            ZIP Code
            {errors.zipCode?.message && (
              <StyledError>{errors.zipCode.message}</StyledError>
            )}
          </StyledZipHeader>
          <StyledZipInput
            type="text"
            {...register("zipCode", {
              required: { value: true, message: "Field is Required" },
              minLength: { value: 3, message: "Invalid Zip Code" },
              maxLength: { value: 12, message: "Invaid Zip Code" },
            })}
          />
        </StyledZipLabel>
        <CityAndCountryInput />
      </StyledShippingDetailsContainer>
      <StyledPaymentDetailsHeader>Payment Details</StyledPaymentDetailsHeader>
      <StyledPaymentDetailsContainer>
        <StyledPaymentHeader>
          Payment Method
          {errors.paymentOption?.message && (
            <StyledError>{errors.paymentOption.message}</StyledError>
          )}
        </StyledPaymentHeader>
        <StyledPaymentOptionContainer htmlFor="eMoney">
          <StyledRadioStyle>
            <StyledPaymentOptionInput
              type="radio"
              {...register("paymentOption", {
                required: { value: true, message: "Field is Required" },
              })}
              id="eMoney"
              value="eMoney"
            />
          </StyledRadioStyle>
          <StyledPaymentOptionText>e-money</StyledPaymentOptionText>
        </StyledPaymentOptionContainer>
        <StyledPaymentOptionContainer htmlFor="cashOnDelivery">
          <StyledRadioStyle>
            <StyledPaymentOptionInput
              type="radio"
              {...register("paymentOption", {
                required: { value: true, message: "Field is Required" },
              })}
              id="cashOnDelivery"
              value="cashOnDelivery"
              onClick={() => {
                setValue("eMoneyNumber", "");
                setValue("eMoneyPin", "");
              }}
            />
          </StyledRadioStyle>
          <StyledPaymentOptionText>Cash on Delivery</StyledPaymentOptionText>
        </StyledPaymentOptionContainer>
      </StyledPaymentDetailsContainer>

      {watchPaymentOption === "eMoney" ? (
        <StyledEmoneyDetailsContainer>
          <StyledEmoneyNumberLabel>
            <StyledEmoneyNumberHeader>
              e-money Number
              {watchPaymentOption === "eMoney" &&
                errors.eMoneyNumber?.message && (
                  <StyledError>{errors.eMoneyNumber.message}</StyledError>
                )}
            </StyledEmoneyNumberHeader>
            <StyledEmoneyNumberInput
              disabled={watchPaymentOption !== "eMoney"}
              type="text"
              {...register("eMoneyNumber", {
                required: {
                  value: watchPaymentOption === "eMoney" ? true : false,
                  message: "Field is Required",
                },
              })}
            />
          </StyledEmoneyNumberLabel>
          <StyledEmoneyPinLabel>
            <StyledEmoneyPinHeader>
              e-money PIN
              {watchPaymentOption === "eMoney" && errors.eMoneyPin?.message && (
                <StyledError>{errors.eMoneyPin.message}</StyledError>
              )}
            </StyledEmoneyPinHeader>
            <StyledEmoneyPinInput
              disabled={watchPaymentOption !== "eMoney"}
              {...register("eMoneyPin", {
                required: {
                  value: watchPaymentOption === "eMoney" ? true : false,
                  message: "Field is Required",
                },
              })}
            />
          </StyledEmoneyPinLabel>
        </StyledEmoneyDetailsContainer>
      ) : watchPaymentOption === "cashOnDelivery" ? (
        <StyledCODContainer>
          <StyledCODImage src="/images/checkout/icon-cash-on-delivery.svg" />
          <StyledCODText>
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </StyledCODText>
        </StyledCODContainer>
      ) : (
        ""
      )}
    </StyledCustomerDetailsContainer>
  );
}
