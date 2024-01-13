type Props = {
  header: string;
  message: string;
  icon?: JSX.Element;
};

export function EmptyListHeader({ header, message, icon }: Props) {
  return (
    <section className="my-8">
      <h1 className="flex items-center gap-x-2 text-base font-semibold uppercase sm:text-lg">
        {icon}
        {header}
      </h1>
      <div className="rounded-sm border border-neutral-400 bg-neutral-200 px-4 py-8 dark:border-neutral-800 dark:bg-neutral-900 ">
        <h1 className="text-center text-neutral-400">{message}</h1>
      </div>
    </section>
  );
}
