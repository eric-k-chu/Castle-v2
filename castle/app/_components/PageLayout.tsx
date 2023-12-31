import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  radiant?: boolean;
};

export function PageLayout({ children, radiant }: Props) {
  const gradient = !radiant
    ? "linear-gradient(to top, rgba(9, 9, 11, 1) 10%, rgba(9, 9, 11, 0.75) 90%), url('/images/hero.png')"
    : "radial-gradient(600px at 50% -3%, rgba(9, 9, 11, 0.6) 0%, rgb(9, 9, 11) 100%, rgb(9, 9, 11) 100%), url('/images/hero.png')";

  return (
    <main
      style={{
        backgroundPosition: "top",
        backgroundImage: gradient,
      }}
    >
      {children}
    </main>
  );
}
