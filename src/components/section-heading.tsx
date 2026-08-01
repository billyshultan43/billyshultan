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
        <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-muted">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight text-primary sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed text-secondary",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
