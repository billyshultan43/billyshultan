import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function PageIntro({
  title,
  description,
  meta,
  className,
}: {
  title: string;
  description?: string;
  meta?: string;
  className?: string;
}) {
  return (
    <section className={cn("section-container pb-14 pt-20 sm:pt-24", className)}>
      <Reveal>
        {meta && <p className="label mb-7">{meta}</p>}
        <h1 className="max-w-4xl font-serif text-4xl font-medium leading-[1.02] tracking-tight text-primary sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-secondary">
            {description}
          </p>
        )}
      </Reveal>
    </section>
  );
}
