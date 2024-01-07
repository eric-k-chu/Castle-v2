import { getStreamers } from "@/_chessapi/streamer";

export default async function Streamers() {
  const streamers = await getStreamers();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-[100px] pt-40">
      <h1 className="text-center">Streamers</h1>
    </div>
  );
}
