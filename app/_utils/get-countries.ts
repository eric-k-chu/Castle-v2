import { USER_ASSIGNED_COUNTRIES } from "@/_lib/constants";
import { Country } from "@/_lib/types";
import { customList, CountryProperty } from "country-codes-list";
import { hasFlag } from "country-flag-icons";

export function getCountries(): Country[] {
  const countries: Country[] = [];
  process.env.NODE_ENV === "development" && console.log("generating");

  const countryCodes = Object.values(
    customList(
      "countryCode" as CountryProperty,
      "{countryCode},{countryNameEn}",
    ),
  );

  for (const countryCode of countryCodes) {
    const [code, name] = countryCode.split(",");
    if (hasFlag(code)) {
      countries.push({
        code,
        name,
        src: `https://catamphetamine.gitlab.io/country-flag-icons/3x2/${code}.svg`,
      });
    }
  }

  countries.push(...USER_ASSIGNED_COUNTRIES);
  return countries;
}
