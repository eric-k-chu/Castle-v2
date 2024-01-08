import { ChessApi } from "@/_chessapi/ChessApi";
import { getStreamers } from "@/_chessapi/streamer";

export default async function Streamers() {
  const { streamers } = await ChessApi.getStreamers();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-[100px] pt-40">
      <h1 className="text-center">Streamers</h1>
      {streamers.map((n) => (
        <h1 key={n.username}>{n.username}</h1>
      ))}
    </div>
  );
}
