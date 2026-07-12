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
    <section className={cn("section-container pb-8 pt-28 sm:pt-32", className)}>
      <Reveal>
        {eyebrow && (
          <span className="mb-3 inline-block text-sm font-medium uppercase tracking-[0.2em] text-secondary">
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <div className="mt-4 h-1 w-16 rounded-full bg-accent-gradient" />
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            {description}
          </p>
        )}
      </Reveal>
    </section>
  );
}
