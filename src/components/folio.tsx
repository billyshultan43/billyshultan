export function Folio({ number }: { number: string }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-4 hidden select-none font-serif text-[120px] italic leading-none text-line/70 lg:block"
    >
      {number}
    </span>
  );
}
