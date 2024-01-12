import { ChessApi } from "@/_chessapi";
import { ErrorMessage } from "@/_components";
import { ROUTES } from "@/_lib";
import { List } from "../List";

type Props = {
  params: { code: string };
};

export default async function CountryPlayers({ params }: Props) {
  const [players, err] = await ChessApi.getData(() =>
    ChessApi.getPlayersByCountry(params.code.toUpperCase()),
  );

  if (err !== null) {
    return <ErrorMessage message={err} />;
  }

  if (!players) return null;

  return <List list={players.players} link={ROUTES.player} />;
}
