import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function PageLayout({ children }: Props) {
  return (
    <div
      className="flex min-h-screen flex-col items-center bg-no-repeat"
      style={{
        backgroundPosition: "top",
        backgroundImage:
          "linear-gradient(to top, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0.5) 70%), url('/images/hero.png')",
      }}
    >
      {children}
    </div>
  );
}
