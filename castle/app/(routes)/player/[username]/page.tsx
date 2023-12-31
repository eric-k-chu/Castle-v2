import { getPlayerData } from "@/_utils/fetcher";
import { PlayerProfileDisplay, PlayerDataDisplay } from "./_components";

export default async function SearchPage({
  params,
}: {
  params: { username: string };
}) {
  const username = params.username ?? "";
  const { player, stats, clubs, archives, tournaments } =
    await getPlayerData(username);

  return (
    <div className="flex w-full flex-col">
      <div className="mx-auto w-full max-w-7xl space-y-8 pb-4 pt-20">
        <PlayerProfileDisplay player={player} />
        <PlayerDataDisplay
          data={{ stats, clubs, archives, tournaments }}
          username={username}
        />
      </div>
    </div>
  );
}
