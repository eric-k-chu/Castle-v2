import { ChessApi } from "@/_chessapi";
import { ErrorMessage } from "@/_components";
import { List } from "../List";
import { CHESS_API_BASE, ROUTES } from "@/_lib";

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
