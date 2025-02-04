import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import {
  StyledAddressHeader,
  StyledAddressInput,
  StyledAddressLabel,
  StyledBillingDetailsContainer,
  StyledBillingDetailsHeader,
  StyledCityHeader,
  StyledCityInput,
  StyledCityLabel,
  StyledCityOption,
  StyledCountryHeader,
  StyledCountryInput,
  StyledCountryLabel,
  StyledCountryOption,
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

type FormProps = {
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
  const form = useForm<FormProps>({ mode: "onChange" });
  const {
    register,
    control,
    formState: { errors },
    watch,
    handleSubmit,
  } = form;
  const watchPaymentOption = watch("paymentOption");
  function onSubmit(data: FormProps) {
    console.log(data);
  }
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
        <StyledCityLabel htmlFor="city">
          <StyledCityHeader>
            City
            {errors.city?.message && (
              <StyledError>{errors.city.message}</StyledError>
            )}
          </StyledCityHeader>
          <StyledCityInput
            id="country"
            {...register("city", {
              required: { value: true, message: "Field is Required" },
            })}
          >
            <StyledCityOption selected disabled value="">
              Select a city
            </StyledCityOption>
            <StyledCityOption value="cairo">Cairo</StyledCityOption>
            <StyledCityOption value="alexandria">Alexandria</StyledCityOption>
            <StyledCityOption value="fayom">Fayom</StyledCityOption>
          </StyledCityInput>
        </StyledCityLabel>
        <StyledCountryLabel htmlFor="country">
          <StyledCountryHeader>
            Country
            {errors.country?.message && (
              <StyledError>{errors.country.message}</StyledError>
            )}
          </StyledCountryHeader>
          <StyledCountryInput
            id="country"
            {...register("country", {
              required: { value: true, message: "Field is Required" },
            })}
          >
            <StyledCountryOption value="" disabled selected>
              Select a country
            </StyledCountryOption>
            <StyledCountryOption value="egypt">Egypt</StyledCountryOption>
            <StyledCountryOption value="malaysia">Malaysia</StyledCountryOption>
            <StyledCountryOption value="saudi arabia">
              Saudi Arabia
            </StyledCountryOption>
          </StyledCountryInput>
        </StyledCountryLabel>
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
            />
          </StyledRadioStyle>
          <StyledPaymentOptionText>Cash on Delivery</StyledPaymentOptionText>
        </StyledPaymentOptionContainer>
      </StyledPaymentDetailsContainer>
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
              required: { value: true, message: "Field is Required" },
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
              required: { value: true, message: "Field is Required" },
            })}
          />
        </StyledEmoneyPinLabel>
        <button type="button" onClick={handleSubmit(onSubmit)}>
          Submit
        </button>
      </StyledEmoneyDetailsContainer>
      <DevTool control={control} />
    </StyledCustomerDetailsContainer>
  );
}
