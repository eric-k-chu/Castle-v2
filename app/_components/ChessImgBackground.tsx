import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function ChessImgBackground({ children }: Props) {
  return (
    <main
      className="relative bg-gradient-conic-light dark:bg-gradient-conic-dark"
      style={{ backgroundPosition: "0 0", backgroundSize: "50px 50px" }}
    >
      {children}
    </main>
  );
}
