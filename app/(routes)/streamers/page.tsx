import { ChessApi } from "@/_chessapi/ChessApi";
import { StreamersDisplay } from "./_components";

export default async function Streamers() {
  const streamers = await ChessApi.getStreamers();

  return (
    <div className="mx-auto w-full px-4 py-24">
      <StreamersDisplay streamers={streamers} />
    </div>
  );
}
