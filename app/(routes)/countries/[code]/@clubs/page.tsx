import { ChessApi } from "@/_chessapi";
import { ErrorMessage } from "@/_components";
import { List } from "../List";
import { getClubName } from "@/_utils";
import { CHESS_API_BASE, ROUTES } from "@/_lib";

type Props = {
  params: { code: string };
};

export default async function CountryClubs({ params }: Props) {
  const [clubs, err] = await ChessApi.getData(() =>
    ChessApi.getClubsByCountry(params.code.toUpperCase()),
  );

  if (err !== null) {
    return <ErrorMessage message={err} />;
  }

  if (!clubs) return null;

  // TODO: Add club route
  return (
    <List
      list={clubs.clubs.map((n) => getClubName(n)).toSorted()}
      link={ROUTES.player}
    />
  );
}
