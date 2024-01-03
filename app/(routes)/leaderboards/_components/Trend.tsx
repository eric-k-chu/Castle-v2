import { Trend } from "@/_lib/types";

type Props = {
  trend: Trend | undefined;
  size?: string;
  textSize?: string;
};

export function Trend({
  trend,
  size = "w-4",
  textSize = "text-xs sm:text-sm",
}: Props) {
  if (trend?.direction === 0 || trend?.direction === undefined) return null;

  return (
    <div className="flex items-center gap-x-1">
      <svg
        className={`h-auto ${size} ${
          trend.direction === 1 ? "fill-green-400" : "rotate-180 fill-red-400"
        }`}
        viewBox="0 0 15 15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.538 2c-.294 0-.488.177-.615.385l-5.846 9.538C1 12 1 12.153 1 12.308c0 .538.385.692.692.692h11.616c.384 0 .692-.154.692-.692 0-.154 0-.231-.077-.385l-5.77-9.538C8.029 2.177 7.789 2 7.539 2z" />
      </svg>
      <span
        className={`${textSize} ${
          trend.direction === 1 ? "text-green-400" : "text-red-400"
        }`}
      >
        {trend.delta}
      </span>
    </div>
  );
}
