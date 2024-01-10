type Props = {
  className?: string;
};

export function PersonIcon({ className }: Props) {
  return (
    <svg
      className={className || "h-auto w-4 stroke-neutral-200"}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <circle cx="8" cy="6" r="3.25" />
      <path d="M2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5" />
    </svg>
  );
}
