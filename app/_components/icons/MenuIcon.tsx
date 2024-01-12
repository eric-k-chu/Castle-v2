type Props = {
  className?: string;
};

export function MenuIcon({ className }: Props) {
  return (
    <svg
      className={className || "size-5 fill-neutral-900 dark:fill-neutral-200"}
      viewBox="0 -5 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M30 18a2 2 0 0 1 0 4H2a2 2 0 0 1 0-4h28Zm0-9a2 2 0 0 1 0 4H2a2 2 0 0 1 0-4h28Zm0-9a2 2 0 0 1 0 4H2a2 2 0 0 1 0-4h28Z" />
    </svg>
  );
}
