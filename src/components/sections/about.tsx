import { Reveal } from "@/components/reveal";
import { profile } from "@/content/profile";
import { education } from "@/content/education";

export function AboutSection() {
  const edu = education[0];
  return (
    <section className="section-container section-padding">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="font-serif text-4xl tracking-tight text-primary lg:text-5xl">
            About
          </h2>
          <Reveal>
            <p className="mt-10 font-serif text-xl leading-relaxed text-primary first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.75] first-letter:text-accent lg:text-2xl">
              {profile.heroSummary}
            </p>
            <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-secondary">
              {profile.summary}
            </p>
          </Reveal>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-8">
            {profile.roles.map((role) => (
              <span key={role} className="text-sm text-secondary">
                {role}
              </span>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <Reveal delay={0.1}>
            <div className="border-t border-line pt-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Education
              </p>
              <p className="mt-6 font-serif text-2xl leading-snug text-primary">
                {edu.degree}
              </p>
              <p className="mt-2 text-sm text-secondary">{edu.institution}</p>
              <div className="mt-10 grid grid-cols-2 gap-y-8 border-t border-line pt-8">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                    GPA
                  </p>
                  <p className="mt-3 font-serif text-3xl italic text-primary">
                    {edu.gpa}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                    Period
                  </p>
                  <p className="mt-3 font-serif text-3xl italic text-primary">
                    {edu.period}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}
