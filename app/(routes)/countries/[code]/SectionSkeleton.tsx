export function SectionSkeleton() {
  return (
    <ul className="mt-4 rounded-md bg-neutral-900 px-4">
      {Array.from({ length: 25 }).map((_, i) => (
        <li
          key={i}
          className="h-8 animate-pulse odd:bg-transparent even:bg-neutral-800"
        />
      ))}
    </ul>
  );
}
