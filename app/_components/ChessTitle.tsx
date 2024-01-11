import { Title } from "@/_lib";
import { Show } from ".";

type Props = {
  title: Title | undefined;
};

export function ChessTitle({ title }: Props) {
  return (
    <Show when={title !== undefined}>
      <span className="bg-title rounded-sm px-1 py-0.5 font-mono text-white">
        {title}
      </span>
    </Show>
  );
}
