import { Reveal } from "@/components/reveal";
import { experience } from "@/content/experience";

export function ExperienceSection() {
  return (
    <section className="section-container section-padding">
      <h2 className="font-serif text-4xl tracking-tight text-primary lg:text-5xl">
        Experience
      </h2>
      <div className="mt-16 border-b border-line">
        {experience.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.06}>
            <div className="grid grid-cols-1 gap-3 border-t border-line py-10 lg:grid-cols-12 lg:items-baseline lg:gap-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted lg:col-span-2">
                {item.period}
              </p>
              <div className="lg:col-span-5">
                <h3 className="font-serif text-2xl leading-tight text-primary lg:text-3xl">
                  {item.role}
                </h3>
                <p className="mt-2 text-sm text-secondary">
                  {item.company}
                  {item.current && (
                    <span className="ml-3 text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                      Current
                    </span>
                  )}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-secondary lg:col-span-5">
                {item.responsibilities[0]}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
