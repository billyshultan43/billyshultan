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
    <section className={cn("section-container pb-10 pt-28 sm:pt-32", className)}>
      <Reveal>
        {eyebrow && (
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </span>
        )}
        <h1 className="font-serif text-4xl font-normal leading-[1.12] tracking-tight text-primary sm:text-5xl">
          {title}
        </h1>
        <div className="mt-5 h-1 w-8 rounded-full bg-accent-gradient" />
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-secondary">
            {description}
          </p>
        )}
      </Reveal>
    </section>
  );
}
