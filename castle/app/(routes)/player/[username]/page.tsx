import { getPlayerData } from "@/_utils/fetcher";
import { PlayerProfileDisplay, PlayerDataDisplay } from "./_components";

type Props = {
  params: { username: string };
};

export default async function SearchPage({ params }: Props) {
  const username = params.username ?? "";
  const { player, stats, clubs, archives, tournaments } =
    await getPlayerData(username);

  return (
    <div className="pb-[400px] pt-20">
      <div className="mx-auto w-full max-w-7xl space-y-8">
        <PlayerProfileDisplay player={player} />
        <PlayerDataDisplay
          data={{ stats, clubs, archives, tournaments }}
          username={username}
        />
      </div>
    </div>
  );
}
