type Props = {
  className?: string;
};

export function StatusIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className || "h-auto w-4 fill-zinc-200"}
    >
      <path
        fillRule="evenodd"
        d="M7.051 1.684c.29-.87 1.479-.91 1.85-.119l.048.119 3.05 9.154 1.052-3.154a1 1 0 0 1 .833-.677L14 7h1a1 1 0 0 1 .117 1.993L15 9h-.28l-1.771 5.316c-.29.87-1.479.91-1.85.119l-.048-.119L8 5.161l-2.051 6.155c-.282.844-1.421.915-1.825.168l-.052-.113L2.96 8.596l-.07.087a1 1 0 0 1-.612.31L2.16 9H1a1 1 0 0 1-.117-1.993L1 7h.495l.583-1.387c.33-.786 1.409-.814 1.797-.097l.053.113.986 2.465 2.137-6.41Z"
      />
    </svg>
  );
}
