import { GreaterThanIcon, LessThanIcon } from "@/_components";

type Props = {
  icon?: JSX.Element;
  header: string;
  page: string;
  prev: () => void;
  next: () => void;
};

export function ListHeader({ icon, header, page, prev, next }: Props) {
  return (
    <div className="flex py-2">
      <h1 className="flex items-center gap-x-2 text-base font-semibold uppercase sm:text-lg">
        {icon}
        {header}
      </h1>
      <div className="ml-auto flex items-center text-neutral-500">
        <button onClick={prev}>
          <GreaterThanIcon className="mx-1 h-3 w-3" />
        </button>
        <h3 className="text-xs sm:text-sm">{page}</h3>
        <button onClick={next}>
          <LessThanIcon className="mx-1 h-3 w-3" />
        </button>
      </div>
    </div>
  );
}
