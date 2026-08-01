import { Reveal } from "@/components/reveal";
import { experience } from "@/content/experience";

export function ExperienceSection() {
  return (
    <section className="border-t border-line">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-serif text-4xl tracking-tight text-primary sm:text-5xl">
                Career
              </h2>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-secondary">
                From laboratory bench to field deployment, across Indonesia and
                Malaysia.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            {experience.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.06}>
                <div className="grid grid-cols-1 gap-3 border-t border-line py-10 sm:grid-cols-12 sm:gap-6 lg:py-12">
                  <p className="font-mono text-xs text-secondary sm:col-span-3">
                    {item.period}
                  </p>
                  <div className="sm:col-span-9">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="font-serif text-2xl leading-tight text-primary lg:text-3xl">
                        {item.role}
                      </h3>
                      {item.current && (
                        <span className="font-mono text-[11px] text-accent">
                          current
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-secondary">
                      {item.company}
                    </p>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-secondary">
                      {item.responsibilities[0]}
                    </p>
                    {item.technologies && item.technologies.length > 0 && (
                      <p className="mt-5 font-mono text-[11px] leading-loose text-muted">
                        {item.technologies.join(" / ")}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
