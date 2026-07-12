import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={cn(
        "mb-12",
        align === "center" && "text-center mx-auto max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      <div
        className={cn(
          "mt-4 h-1 w-16 rounded-full bg-accent-gradient",
          align === "center" && "mx-auto"
        )}
      />
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted">{description}</p>
      )}
    </Reveal>
  );
}
