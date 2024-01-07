type Props = {
  className?: string;
};

export function DotsIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || "h-auto w-4 fill-zinc-200"}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.625 7.5a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Zm5 0a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12.5 8.625a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
      />
    </svg>
  );
}
