import { Reveal } from "@/components/reveal";
import { skills } from "@/content/skills";

export function SkillsSection() {
  return (
    <section className="border-t border-line">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-serif text-4xl tracking-tight text-primary sm:text-5xl">
                Capabilities
              </h2>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-secondary">
                Six domains of practice, from firmware to field calibration.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {skills.map((cat, i) => (
              <Reveal key={cat.name} delay={i * 0.04}>
                <div className="grid grid-cols-1 gap-3 border-t border-line py-8 sm:grid-cols-12 sm:gap-6">
                  <p className="text-sm font-medium text-primary sm:col-span-4">
                    {cat.name}
                  </p>
                  <p className="font-mono text-[13px] leading-relaxed text-secondary sm:col-span-8">
                    {cat.skills.join(" / ")}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
