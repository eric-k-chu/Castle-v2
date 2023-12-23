import { Country } from "@/lib/types";

export function filterCountries(
  countries: Country[],
  query: string,
  limit = 3,
): Country[] {
  return countries
    .filter((country) => {
      const code = country.code.toLocaleLowerCase();
      const name = country.name.toLocaleLowerCase();
      const q = query.toLocaleLowerCase();

      if (code.includes(q)) return true;

      if (name.includes(q)) return true;

      return false;
    })
    .slice(0, limit);
}
