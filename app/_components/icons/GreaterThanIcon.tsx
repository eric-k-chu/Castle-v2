type Props = {
  className?: string;
};

export function GreaterThanIcon({ className }: Props) {
  return (
    <svg
      className={className || "h-2.5 w-2.5 rtl:rotate-180"}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 6 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 1 1 5l4 4"
      />
    </svg>
  );
}
