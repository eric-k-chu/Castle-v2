type Props = {
  className?: string;
};

export function SquareIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 15 15"
      className={className || "h-auto w-4 fill-zinc-200"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v12A1.5 1.5 0 0 0 1.5 15h12a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 13.5 0h-12Z" />
    </svg>
  );
}
