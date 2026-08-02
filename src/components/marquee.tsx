export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line py-5">
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee items-center">
          {row.map((item, i) => (
            <span
              key={`${item}-${i}`}
              aria-hidden={i >= items.length}
              className="flex items-center font-serif text-xl italic tracking-wide text-secondary/80 sm:text-2xl"
            >
              <span className="whitespace-nowrap px-6">{item}</span>
              <span className="text-accent/70">&#10022;</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
