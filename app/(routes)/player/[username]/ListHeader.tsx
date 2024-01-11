import { GreaterThanIcon, LessThanIcon } from "@/_components";

type Props = {
  header: string;
  page: string;
  prev: () => void;
  next: () => void;
};

export function ListHeader({ header, page, prev, next }: Props) {
  return (
    <div className="flex py-2">
      <h1 className="text-lg font-semibold uppercase">{header}</h1>
      <div className="ml-auto flex items-center text-neutral-500">
        <button onClick={prev}>
          <GreaterThanIcon className="mx-1 h-3 w-3" />
        </button>
        <h3>{page}</h3>
        <button onClick={next}>
          <LessThanIcon className="mx-1 h-3 w-3" />
        </button>
      </div>
    </div>
  );
}
