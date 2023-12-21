import { ClientError } from "@/_lib/client-error";
import { ChessAPIData, Club } from "@/_lib/types";

export async function getClub(urlId: string): Promise<ChessAPIData<Club>> {
  const id = urlId.trim().toLocaleLowerCase().split(" ").join("-");
  const res = await fetch(`https://api.chess.com/pub/club/${id}`);
  const error = res.ok
    ? null
    : new ClientError(res.status, "Error in retrieving Club Data.");
  const club = await res.json();
  return { data: club, error };
}
