import { Reveal } from "@/components/reveal";
import { skills } from "@/content/skills";

export function SkillsSection() {
  return (
    <section className="section-container section-padding">
      <h2 className="font-serif text-4xl tracking-tight text-primary lg:text-5xl">
        Skills
      </h2>
      <div className="mt-16 grid grid-cols-1 border-b border-line gap-x-16 lg:grid-cols-2">
        {skills.map((cat, i) => (
          <Reveal key={cat.name} delay={(i % 2) * 0.06}>
            <div className="border-t border-line py-8 lg:py-10">
              <p className="text-sm font-medium text-primary">{cat.name}</p>
              <p className="mt-4 font-serif text-lg italic leading-relaxed text-secondary lg:text-xl">
                {cat.skills.join(" / ")}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
