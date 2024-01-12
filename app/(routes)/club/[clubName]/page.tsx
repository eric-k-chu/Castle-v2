import { ChessApi } from "@/_chessapi";
import { ErrorMessage, LinkToIcon, PersonIcon } from "@/_components";
import { ROUTES } from "@/_lib";
import { getDateFromUtc, getUsername } from "@/_utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { clubName: string };
};

export default async function ClubPage({ params }: Props) {
  const [club, err] = await ChessApi.getData(() =>
    ChessApi.getClub(params.clubName),
  );

  if (err !== null) {
    return <ErrorMessage message={"test"} />;
  }

  if (!club) return null;

  return (
    <>
      <section className="my-8 space-y-4 rounded-sm border border-neutral-800 bg-neutral-900 px-4 py-6">
        <div className="flex items-center gap-x-2">
          <div className="relative flex items-center justify-center">
            <Image
              src={club?.icon ?? "/icons/default-avatar.svg"}
              unoptimized
              width={0}
              height={0}
              alt={`${club.name} avatar`}
              className="size-8 rounded-sm border-2 border-primary-1 sm:size-10"
            />
          </div>
          <h1 className="truncate text-lg font-semibold sm:text-2xl">
            {club.name}
          </h1>
          <a className="ml-auto" target="_blank" href={club.url}>
            <LinkToIcon className="size-5 sm:size-6" />
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-around gap-y-2">
          <h3 className="flex items-center gap-x-2 p-1 text-xs sm:text-sm">
            <PersonIcon className="h-auto w-3 fill-neutral-200 sm:w-4" />
            {club.members_count.toLocaleString()}
          </h3>
          <h3 className="p-1 text-xs sm:text-sm">
            Joined {getDateFromUtc(club.created).half}
          </h3>
          <h3 className="p-1 text-xs sm:text-sm">
            Last Activity {getDateFromUtc(club.last_activity).half}
          </h3>
        </div>
      </section>
      <h2 className="flex items-center gap-x-2 text-base font-semibold uppercase sm:text-lg">
        Admins
      </h2>
      <section className="space-y-4 rounded-sm border border-neutral-800 bg-neutral-900 px-4 py-6">
        <div className="flex flex-wrap items-center justify-around gap-y-2 empty:hidden">
          {club?.admin.map((n) => (
            <Link
              key={n}
              className="rounded-sm bg-neutral-800 p-2 text-xs capitalize transition-colors duration-150 ease-in-out hover:bg-primary-1 sm:text-sm"
              href={`${ROUTES.player}/${getUsername(n)}`}
            >
              {getUsername(n)}
            </Link>
          ))}
        </div>
      </section>
      <a
        className="my-8 block w-full cursor-pointer rounded-sm bg-primary-2 py-2 text-center text-base font-semibold transition-colors duration-150 ease-in-out hover:bg-primary-1 sm:text-lg"
        target="_blank"
        href={club.join_request}
      >
        JOIN
      </a>
    </>
  );
}
