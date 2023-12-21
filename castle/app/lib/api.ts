import { Country, Players, TitledPlayers } from "./types";
import { ClientError } from "./client-error";
import { TITLES, USER_ASSIGNED_COUNTRIES } from "./constants";
import { CountryProperty, customList } from "country-codes-list";
import { hasFlag } from "country-flag-icons";

export async function getAllTitledPlayers(): Promise<TitledPlayers[]> {
  const players = sessionStorage.getItem("titledPlayers");
  if (players) return JSON.parse(players);

  const titledPlayers = await Promise.all(
    TITLES.map(async (title) => {
      const res = await fetch(`https://api.chess.com/pub/titled/${title}`);
      if (!res.ok) {
        throw new ClientError(
          res.status,
          "Error in retrieving players from Chess.com",
        );
      }
      const { players } = (await res.json()) as Players;
      return players.map((name) => ({ title, name }));
    }),
  );
  const names = titledPlayers.flat();
  sessionStorage.setItem("titledPlayers", JSON.stringify(names));
  return names;
}

export function filterPlayers(
  players: TitledPlayers[] | undefined,
  query: string,
  limit = 3,
): TitledPlayers[] | undefined {
  return players
    ?.filter((player) =>
      player.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
    )
    .slice(0, limit);
}

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

export function generateCountries(): Country[] {
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
