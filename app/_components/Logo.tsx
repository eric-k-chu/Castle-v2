export function Logo({ className }: { className: string }) {
  return (
    <div>
      <svg
        className={className}
        viewBox="0 0 92 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.843311 100L1 32L14.8235 35.8835L14.6668 85.4369H77.3335L77.1767 35.8835L91.0002 32L91.157 100H0.843311Z"
          className="fill-zinc-200"
        />
        <path
          d="M25.7257 73.301V0L39.5492 3.8835V73.301H25.7257Z"
          className="fill-zinc-200"
        />
        <path
          d="M52.4512 73.301V23.301L66.2747 19.4175V73.301H52.4512Z"
          className="fill-zinc-200"
        />
      </svg>
    </div>
  );
}
