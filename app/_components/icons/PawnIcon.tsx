type Props = {
  className?: string;
};

export function PawnIcon({ className }: Props) {
  return (
    <svg
      className={className || "h-auto w-4 fill-zinc-200"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 297 297"
      xmlSpace="preserve"
    >
      <path d="M223.333 247h-5.926c2.607-3.811 10.798-18.024-.727-32.248-13.334-16.46-39.863-65.748-27.324-98.752h.977c4.418 0 7.667-3.582 7.667-8v-1c0-4.418-3.249-8-7.667-8h-1.225c10.917-10.466 17.725-25.184 17.725-41.5 0-31.756-25.744-57.5-57.5-57.5s-57.5 25.744-57.5 57.5c0 16.316 6.808 31.034 17.725 41.5h-2.225c-4.418 0-8.333 3.582-8.333 8v1c0 4.418 3.915 8 8.333 8h1.979c12.539 33.004-13.99 82.292-27.324 98.752-11.524 14.224-3.334 28.437-.727 32.248h-6.928c-4.418 0-8.333 3.582-8.333 8v18c0 4.418 3.915 8 8.333 8H75v16h148v-16c5 0 8-3.582 8-8v-18c0-4.418-3.249-8-7.667-8z" />
    </svg>
  );
}
