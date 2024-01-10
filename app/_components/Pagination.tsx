type Props = {
  arrLength: number;
  activePage: number;
  setter: (n: number) => void;
};

export function Pagination({ arrLength, activePage, setter }: Props) {
  return (
    <nav className="ml-auto mr-2 mt-4 flex w-12 flex-col items-center gap-y-1">
      <p className="text-xs">
        <span className="font-semibold">{activePage + 1}</span>
        <span className="px-2">of</span>
        <span className="font-semibold">{arrLength}</span>
      </p>
      <div className="flex h-8 items-center justify-center text-xs">
        <button
          className="flex h-8 items-center justify-center rounded-l-lg border border-e-0 border-neutral-600 bg-transparent px-3 text-gray-300 hover:bg-gray-500"
          onClick={() => setter((activePage - 1 + arrLength) % arrLength)}
        >
          <svg
            className="h-2.5 w-2.5 rtl:rotate-180"
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
        </button>
        <button
          className="flex h-8 items-center justify-center rounded-r-lg border border-neutral-600 bg-transparent px-3 text-gray-300 hover:bg-gray-500"
          onClick={() => setter((activePage + 1) % arrLength)}
        >
          <svg
            className="h-2.5 w-2.5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
