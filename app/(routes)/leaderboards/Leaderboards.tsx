export default async function Leaderboards() {
  // const leaderboards = await getLeaderboards();
  return (
    <div className="pb-[100px] pt-20">
      <div className="mx-auto w-full max-w-5xl px-4">
        <LeaderboardTabs />
      </div>
    </div>
  );
}
