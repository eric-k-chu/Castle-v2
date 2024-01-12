export default function CountriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex flex-col items-center px-4 pt-40 text-neutral-900 sm:max-w-lg min-[878px]:max-w-3xl lg:max-w-4xl dark:text-neutral-200">
      {children}
    </div>
  );
}
