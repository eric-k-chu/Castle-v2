type Props = {
  className?: string;
};

export function Logo({ className }: Props) {
  return (
    <div>
      <svg
        className={className || "fill-primary-1 h-auto w-6"}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 120V48L18 50V103L86 103V109L102 111V48L120 50V120H0Z" />
        <path d="M34 87V0L52 2V87H34Z" />
        <path d="M68 87V23L86 25V87L68 87Z" />
      </svg>
    </div>
  );
}
