import { useFormContext } from "react-hook-form";
import {
  StyledCityHeader,
  StyledCityInput,
  StyledCityLabel,
  StyledCountryHeader,
  StyledCountryInput,
  StyledCountryLabel,
} from "./CityAndCountryInput.styles";
import { FormProps } from "../CustomerDetails";
import { StyledError } from "../CustomerDetails.styles";

export default function CityAndCountryInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormProps>();

  return (
    <>
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
        />
      </StyledCountryLabel>
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
        />
      </StyledCityLabel>
    </>
  );
}
