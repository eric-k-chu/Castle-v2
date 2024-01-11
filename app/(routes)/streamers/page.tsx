import { ChessApi } from "@/_chessapi";
import { Streamers } from "./Streamers";
import { ErrorMessage } from "@/_components";

export default async function StreamersPage() {
  const [streamers, err] = await ChessApi.getData(() =>
    ChessApi.getStreamers(),
  );

  if (err !== null) {
    return <ErrorMessage message={"Something has gone wrong!"} />;
  }

  if (!streamers) return null;

  return (
    <div className="mx-auto w-full px-4 py-24">
      <Streamers streamers={streamers} />
    </div>
  );
}
