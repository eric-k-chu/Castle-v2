import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  transparent?: boolean;
};

export function PageLayout({ children, transparent }: Props) {
  return (
    <div
      className={`flex flex-col items-center ${
        transparent ? "bg-transparent" : "bg-zinc-900"
      }`}
    >
      {children}
    </div>
  );
}
