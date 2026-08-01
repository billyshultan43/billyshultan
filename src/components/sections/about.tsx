import { Reveal } from "@/components/reveal";
import { profile } from "@/content/profile";
import { education } from "@/content/education";

export function AboutSection() {
  const edu = education[0];
  return (
    <section className="section-container section-padding">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <Reveal>
            <h2 className="max-w-2xl font-serif text-4xl leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Hardware, firmware, and cloud, built as one system.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-12 max-w-2xl font-serif text-2xl leading-relaxed text-primary lg:text-3xl">
              {profile.heroSummary}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-secondary">
              {profile.summary}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-7">
              {profile.roles.map((role) => (
                <span key={role} className="font-mono text-xs text-secondary">
                  {role}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <aside className="lg:col-span-3 lg:col-start-10">
          <Reveal delay={0.12}>
            <div className="border-t border-line pt-7">
              <p className="text-sm font-medium text-primary">Education</p>
              <p className="mt-5 font-serif text-2xl leading-snug text-primary">
                {edu.degree}
              </p>
              <p className="mt-2 text-sm text-secondary">{edu.institution}</p>
              <p className="mt-1 font-mono text-xs text-muted">{edu.period}</p>
              <div className="mt-8 space-y-1 border-t border-line pt-6">
                <p className="flex items-baseline justify-between gap-6 text-sm text-secondary">
                  <span>GPA</span>
                  <span className="font-serif text-xl italic text-primary">
                    {edu.gpa}
                  </span>
                </p>
                {edu.thesis && (
                  <p className="flex items-baseline justify-between gap-6 text-sm text-secondary">
                    <span>Thesis</span>
                    <span className="font-mono text-[11px] text-muted">
                      Fuzzy Mamdani
                    </span>
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}
