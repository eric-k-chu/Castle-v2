type Props = {
  header: string;
  message: string;
};

export function EmptyListHeader({ header, message }: Props) {
  return (
    <section className="my-8">
      <h1 className="py-2 text-lg font-semibold uppercase">{header}</h1>
      <div className="rounded-sm bg-neutral-900 px-4 py-8">
        <h1 className="text-center text-neutral-400">{message}</h1>
      </div>
    </section>
  );
}
