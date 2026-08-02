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
    <section className={cn("section-container pb-14 pt-8 sm:pb-16 sm:pt-12", className)}>
      <Reveal>
        {meta && <p className="label mb-7 text-accent">{meta}</p>}
        <h1 className="max-w-5xl font-serif text-5xl font-normal leading-[1.02] tracking-tight text-primary sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-7 max-w-2xl text-base font-light leading-[1.8] text-secondary sm:text-lg">
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
