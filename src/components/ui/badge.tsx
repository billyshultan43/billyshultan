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
        "inline-flex items-center rounded-lg border border-line bg-white/[0.03] px-2.5 py-0.5 text-xs font-medium text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
