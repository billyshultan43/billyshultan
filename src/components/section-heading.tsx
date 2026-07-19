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
        "mb-14",
        align === "center" && "text-center mx-auto max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-accent/80">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight text-primary sm:text-4xl">{title}</h2>
      <div
        className={cn(
          "mt-5 h-px w-10 bg-accent/40",
          align === "center" && "mx-auto"
        )}
      />
      {description && (
        <p className="mt-6 text-base leading-relaxed text-secondary">{description}</p>
      )}
    </Reveal>
  );
}
