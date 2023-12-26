import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  backgroundType: "hero" | "hero-2";
};

export function PageLayout({ children, backgroundType }: Props) {
  const bg = backgroundType === "hero" ? "bg-hero" : "bg-hero-2";
  return (
    <div
      className={`flex min-h-screen flex-col items-center bg-cover bg-top bg-no-repeat ${bg}`}
    >
      {children}
    </div>
  );
}
