export default function CountriesLayout({
  children,
  clubs,
  players,
}: {
  children: React.ReactNode;
  clubs: React.ReactNode;
  players: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex flex-col items-center px-4 pt-40 sm:max-w-lg min-[878px]:max-w-3xl lg:max-w-4xl">
      {children}
      <div className="mt-4 flex w-full gap-x-4">
        <section className="w-1/2">
          <h2 className="text-center text-base font-semibold sm:text-lg md:text-xl">
            Player
          </h2>
          {players}
        </section>
        <section className="w-1/2">
          <h2 className="text-center text-base font-semibold sm:text-lg md:text-xl">
            Clubs
          </h2>
          {clubs}
        </section>
      </div>
    </div>
  );
}
