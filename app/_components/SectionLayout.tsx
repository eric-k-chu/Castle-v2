type Props = {
  children: React.ReactNode;
};

export function SectionLayout({ children }: Props) {
  return (
    <section className="mx-auto my-4 max-w-5xl bg-red-400">{children}</section>
  );
}
