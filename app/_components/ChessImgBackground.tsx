import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function ChessImgBackground({ children }: Props) {
  return (
    <main
      className="bg-zinc-800"
      style={{
        background:
          "conic-gradient(from 90deg at 0.5px 0.5px,#18181b 90deg,#27272a 0) 0 0/50px 50px",
      }}
    >
      {children}
    </main>
  );
}
