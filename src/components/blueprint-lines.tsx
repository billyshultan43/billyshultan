export function BlueprintLines() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 opacity-30"
    >
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-line" />
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-line" />
      <div className="absolute left-4 top-4 h-3 w-3 border border-line" />
      <div className="absolute right-4 top-4 h-3 w-3 border border-line" />
      <div className="absolute bottom-4 left-4 h-3 w-3 border border-line" />
      <div className="absolute bottom-4 right-4 h-3 w-3 border border-line" />
      <div className="absolute left-[25%] top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 border border-line" />
      <div className="absolute left-[75%] top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 border border-line" />
    </div>
  );
}
