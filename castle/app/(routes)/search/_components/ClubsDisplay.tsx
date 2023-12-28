import { ErrorDisplay, LoadingCircle } from "@/_components";
import { useFetcher } from "@/_hooks/useFetcher";
import { getPlayerClubs } from "@/_utils/fetcher";

type Props = {
  username: string | null;
};

export function ClubsDisplay({ username }: Props) {
  const {
    data: clubs,
    isLoading,
    error,
  } = useFetcher(getPlayerClubs, username);

  if (isLoading) {
    return (
      <div className="flex w-full justify-center py-48">
        <LoadingCircle />
      </div>
    );
  }

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  if (!clubs) return null;

  return (
    <div className="flex w-full flex-col items-center p-4">
      <ul>
        {clubs.clubs.map((n) => (
          <li key={n["@id"]}>{n.name}</li>
        ))}
      </ul>
    </div>
  );
}
