import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function PageIntro({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={cn("section-container pb-10 pt-24 sm:pt-28", className)}>
      <Reveal>
        {eyebrow && (
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-muted">
            {eyebrow}
          </span>
        )}
        <h1 className="font-serif text-4xl font-normal leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-secondary">
            {description}
          </p>
        )}
      </Reveal>
    </section>
  );
}
