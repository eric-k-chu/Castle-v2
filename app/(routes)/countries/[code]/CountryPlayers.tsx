import { CountryPlayers, ROUTES } from "@/_lib";
import { List } from "./List";

type Props = {
  players: CountryPlayers;
};

export function CountryPlayers({ players }: Props) {
  return <List list={players.players} link={ROUTES.player} />;
}
