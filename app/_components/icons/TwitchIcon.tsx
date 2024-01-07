type Props = {
  className?: string;
};

export function TwitchIcon({ className }: Props) {
  return (
    <svg
      className={className || "h-auto w-6 fill-zinc-500"}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M28.125 6.25L12.5 21.875V78.125H31.25V93.75L46.875 78.125H59.375L87.5 50V6.25H28.125ZM81.25 46.875L68.75 59.375H56.25L45.3125 70.3125V59.375H31.25V12.5H81.25V46.875Z" />
      <path d="M71.875 23.4375H65.625V42.1875H71.875V23.4375ZM54.6875 23.4375H48.4375V42.1875H54.6875V23.4375Z" />
    </svg>
  );
}
