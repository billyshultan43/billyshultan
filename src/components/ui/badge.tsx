import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-line px-2 py-0.5 font-mono text-[11px] leading-relaxed text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
