import { CHESS_API_BASE, USER_ASSIGNED_COUNTRIES } from "@/_lib/constants";
import { Stats, Country, TitledPlayers } from "@/_lib/types";
import { customList, CountryProperty } from "country-codes-list";
import { hasFlag } from "country-flag-icons";

// color styles need to be in their own functions

export function getBorderColorFromRank(rank: number): string {
  if (rank === 2) return "border-white";
  if (rank === 3) return "border-amber-600";
  return "border-zinc-500";
}

export function getBgColorFromRank(rank: number): string {
  if (rank === 2) return "bg-white";
  if (rank === 3) return "bg-amber-600";
  return "bg-zinc-500";
}

export function getTextColorFromRank(rank: number): string {
  if (rank === 2) return "text-white";
  if (rank === 3) return "text-amber-600";
  return "text-zinc-500";
}

export function getGameResultColor(
  username: string,
  pgn: string,
):
  | "border-l-green-400"
  | "border-l-red-400"
  | "border-l-gray-400"
  | "border-l-black" {
  const resultMatch = pgn.match(/\[Result "(.*?)"\]/);
  const blackMatch = pgn.match(/\[Black "(.*?)"\]/);
  const whiteMatch = pgn.match(/\[White "(.*?)"\]/);

  if (resultMatch && blackMatch && whiteMatch) {
    const result = resultMatch[1];
    const black = blackMatch[1].toLocaleLowerCase();
    const white = whiteMatch[1].toLocaleLowerCase();

    if (result === "1-0" && username.toLocaleLowerCase() === white)
      return "border-l-green-400";
    if (result === "0-1" && username.toLocaleLowerCase() === black)
      return "border-l-green-400";
    if (result === "1/2-1/2") return "border-l-gray-400";

    return "border-l-red-400";
  }

  return "border-l-black";
}

export function getDateFromUtc(utcSeconds: number): {
  full: string;
  half: string;
} {
  const date = new Date(utcSeconds * 1000);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return {
    full: `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`,
    half: `${months[date.getMonth()]} ${date.getFullYear()}`,
  };
}

function getPct(wins: number, losses: number, draws: number): string {
  const pct = ((2 * wins + draws) / (2 * (wins + losses + draws))) * 100;
  return pct.toFixed(2);
}

export function extractStats(stats: Stats): {
  type: string;
  wins: number;
  losses: number;
  draws: number;
  pct: string;
}[] {
  const data = [];

  const {
    chess_daily,
    chess960_daily,
    chess_rapid,
    chess_blitz,
    chess_bullet,
  } = stats;

  if (chess_daily) {
    const { win, loss, draw } = chess_daily.record;
    data.push({
      type: "Daily",
      wins: win,
      losses: loss,
      draws: draw,
      pct: getPct(win, loss, draw),
    });
  }

  if (chess960_daily) {
    const { win, loss, draw } = chess960_daily.record;
    data.push({
      type: "Daily 960",
      wins: win,
      losses: loss,
      draws: draw,
      pct: getPct(win, loss, draw),
    });
  }

  if (chess_rapid) {
    const { win, loss, draw } = chess_rapid.record;
    data.push({
      type: "Rapid",
      wins: win,
      losses: loss,
      draws: draw,
      pct: getPct(win, loss, draw),
    });
  }

  if (chess_blitz) {
    const { win, loss, draw } = chess_blitz.record;
    data.push({
      type: "Blitz",
      wins: win,
      losses: loss,
      draws: draw,
      pct: getPct(win, loss, draw),
    });
  }

  if (chess_bullet) {
    const { win, loss, draw } = chess_bullet.record;
    data.push({
      type: "Bullet",
      wins: win,
      losses: loss,
      draws: draw,
      pct: getPct(win, loss, draw),
    });
  }

  return data;
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

export function getPages<T>(arr: T[], chunkSize = 10): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

export function getTournamentName(url: string): string {
  const urlPattern = `${CHESS_API_BASE}tournament/`;
  return url
    .split(urlPattern)[1]
    .split("-")
    .filter((n) => n.length > 0)
    .join(" ");
}

export function getDaysElapsed(endTime: EpochTimeStamp): string {
  const time = new Date(endTime * 1000);
  const now = new Date();

  const elapsedYears = now.getFullYear() - time.getFullYear();
  if (elapsedYears > 0) return `${elapsedYears}y ago`;

  const elapsedMonths = now.getMonth() - time.getMonth();
  if (elapsedMonths > 0) return `${elapsedMonths}mo ago`;

  const elapsedDays = now.getDate() - time.getDate();
  if (elapsedDays > 0) return `${elapsedDays}d ago`;

  const elapsedHours = now.getHours() - time.getHours();
  if (elapsedHours > 0) return `${elapsedHours}h ago`;

  const elapsedMinutes = now.getMinutes() - time.getMinutes();
  if (elapsedMinutes > 0) return `${elapsedMinutes}m ago`;

  return `${now.getSeconds() - time.getSeconds()}s ago`;
}
