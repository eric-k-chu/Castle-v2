type Props = {
  className?: string;
};

export function MissingFileIcon({ className }: Props) {
  return (
    <svg
      className={className || "h-auto w-4 fill-neutral-200"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
    >
      <path d="M22 24H2V0h14.4L22 5.6V24zM4 22h16V8h-6V2H4v20zM16 6h3.6L16 2.4V6zm-1.7 12.7L12 16.4l-2.3 2.3-1.4-1.4 2.3-2.3-2.3-2.3 1.4-1.4 2.3 2.3 2.3-2.3 1.4 1.4-2.3 2.3 2.3 2.3-1.4 1.4z" />
    </svg>
  );
}
