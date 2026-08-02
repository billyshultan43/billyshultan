import { Reveal } from "@/components/reveal";
import { Hairline } from "@/components/hairline";
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
    <section className={cn("section-container pb-20 pt-24 sm:pt-32", className)}>
      <Reveal>
        {meta && <p className="label mb-6 text-accent">{meta}</p>}
        <h1 className="max-w-4xl font-serif text-4xl font-normal leading-[1.04] tracking-tight text-primary sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-secondary">
            {description}
          </p>
        )}
        <div className="mt-12">
          <Hairline />
        </div>
      </Reveal>
    </section>
  );
}
