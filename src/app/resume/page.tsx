import { ArrowUpRight } from "lucide-react";
import { BackgroundWord } from "@/components/background-word";
import { Hairline } from "@/components/hairline";
import { Reveal } from "@/components/reveal";
import { experience } from "@/content/experience";
import { education, organization } from "@/content/education";
import { certificates } from "@/content/certificates";
import { achievements } from "@/content/achievements";

export const metadata = {
  title: "Resume",
  description:
    "Full resume of Billy Shultan Al Hadiy, experience, education, certificates, awards, and skills.",
};

const stats = [
  { value: "2+", label: "years experience" },
  { value: "3", label: "systems delivered" },
  { value: "15+", label: "technologies" },
];

export default function ResumePage() {
  return (
    <>
      <section className="section-container relative overflow-hidden pt-20 sm:pt-32">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Curriculum Vitae</span>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.04] tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Experience & Credentials
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-secondary">
            Electrical Engineer with professional experience in IoT, Embedded
            Systems, Full Stack Development, AI Integration, and Industrial
            Instrumentation.
          </p>
          <div className="mt-12 flex flex-wrap items-baseline gap-x-16 gap-y-4 border-t border-line pt-8">
            {stats.map((stat) => (
              <p key={stat.label} className="font-mono text-xs text-secondary">
                <span className="font-serif text-3xl italic text-primary mr-2">
                  {stat.value}
                </span>{" "}
                {stat.label}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-container relative overflow-hidden pb-32 pt-16">
        <BackgroundWord
          text="Resume"
          className="left-auto right-0 -translate-y-1/2 text-[clamp(170px,20vw,260px)] opacity-60"
        />
        <div className="relative z-10 space-y-36">
          {/* EXPERIENCE MAGAZINE TIMELINE */}
          <div>
            <Reveal>
              <div className="flex items-center justify-between mb-16 border-b border-line pb-6">
                <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-primary">
                  Experience
                </h2>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                  Chronological Record
                </span>
              </div>
            </Reveal>

            <div className="space-y-12">
              {experience.map((item, i) => (
                <Reveal key={item.id} delay={i * 0.06}>
                  <div className="rounded-[32px] border border-line bg-card p-8 sm:p-12 transition-all duration-300 hover:border-line-strong hover:shadow-xl">
                    <div className="flex flex-wrap items-baseline justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-2xl sm:text-3xl leading-tight text-primary">
                          {item.role}
                        </h3>
                        <p className="mt-2 text-base text-secondary font-medium">
                          {item.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        {item.current && (
                          <span className="rounded-full bg-accent/10 px-4 py-1 font-mono text-xs text-accent">
                            current
                          </span>
                        )}
                        <span className="font-mono text-xs text-muted">
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                      {item.responsibilities.map((r, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-sm leading-relaxed text-secondary rounded-2xl bg-surface/60 p-5 border border-line/60"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-2 w-2 shrink-0 bg-accent rounded-full"
                          />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>

                    {item.technologies && item.technologies.length > 0 && (
                      <div className="mt-8 pt-6 border-t border-line/60 flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-surface px-3.5 py-1.5 font-mono text-xs text-secondary border border-line/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* LUXURY EDITORIAL ACHIEVEMENTS */}
          {achievements.length > 0 && (
            <div>
              <Reveal>
                <div className="flex items-center justify-between mb-16 border-b border-line pb-6">
                  <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-primary">
                    Achievements
                  </h2>
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                    Recognition
                  </span>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 gap-8">
                {achievements.map((ach) => (
                  <Reveal key={ach.id}>
                    <div className="rounded-[32px] border border-line bg-card p-8 sm:p-12 shadow-sm">
                      <div className="flex flex-wrap items-baseline justify-between gap-4">
                        <div>
                          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                            {ach.event}
                          </span>
                          <h3 className="mt-3 font-serif text-3xl text-primary font-normal">
                            {ach.title}
                          </h3>
                        </div>
                        <span className="font-mono text-xs text-muted">
                          {ach.date}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-secondary font-medium">{ach.organizer}</p>
                      <p className="mt-6 max-w-4xl text-base sm:text-lg leading-relaxed text-secondary">
                        {ach.description}
                      </p>
                      {ach.file && (
                        <div className="mt-8 pt-6 border-t border-line/60">
                          <a
                            href={ach.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 font-mono text-xs text-primary transition-colors hover:text-accent"
                          >
                            View verified certificate
                            <ArrowUpRight
                              size={15}
                              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                          </a>
                        </div>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {/* CERTIFICATES & TRAINING */}
          <div>
            <Reveal>
              <div className="flex items-center justify-between mb-16 border-b border-line pb-6">
                <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-primary">
                  Certificates & Training
                </h2>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                  Credentials
                </span>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certificates.map((cert, i) => (
                <Reveal key={cert.id} delay={i * 0.05} className="h-full">
                  <div className="rounded-[32px] border border-line bg-card p-8 sm:p-10 h-full flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <span className="rounded-full bg-surface px-3.5 py-1 font-mono text-xs text-accent border border-line/50">
                          {cert.category}
                        </span>
                        <span className="font-mono text-xs text-muted">
                          {cert.date}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl leading-snug text-primary font-normal">
                        {cert.name}
                      </h3>
                      <p className="mt-3 text-sm text-secondary font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                    {cert.file && (
                      <div className="mt-8 pt-6 border-t border-line/60">
                        <a
                          href={cert.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2 font-mono text-xs text-primary transition-colors hover:text-accent"
                        >
                          Open Document PDF
                          <ArrowUpRight
                            size={14}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </a>
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* EDUCATION & ORGANIZATIONS */}
          <div>
            <Reveal>
              <div className="flex items-center justify-between mb-16 border-b border-line pb-6">
                <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-primary">
                  Education & Organization
                </h2>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                  Academic Background
                </span>
              </div>
            </Reveal>

            <div className="space-y-8">
              {education.map((item) => (
                <div key={item.id} className="rounded-[32px] border border-line bg-card p-8 sm:p-12 shadow-sm">
                  <div className="flex flex-wrap items-baseline justify-between gap-4">
                    <h3 className="font-serif text-2xl sm:text-3xl leading-tight text-primary">
                      {item.degree}
                    </h3>
                    <span className="font-mono text-xs text-muted">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-2 text-base text-secondary font-medium">
                    {item.institution}
                  </p>
                  {item.gpa && (
                    <p className="mt-4 text-sm text-secondary">
                      GPA:{" "}
                      <span className="font-serif text-2xl italic text-primary ml-1">
                        {item.gpa}
                      </span>
                    </p>
                  )}
                  {item.thesis && (
                    <p className="mt-6 max-w-4xl text-sm sm:text-base leading-relaxed text-secondary bg-surface/60 p-6 rounded-2xl border border-line/60">
                      <span className="font-medium text-primary">Thesis: </span>
                      {item.thesis}
                    </p>
                  )}
                  {item.details && (
                    <ul className="mt-8 space-y-3">
                      {item.details.map((d, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-sm leading-relaxed text-secondary"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-2 w-2 shrink-0 bg-accent rounded-full"
                          />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {organization.map((org) => (
                <div key={org.id} className="rounded-[32px] border border-line bg-card p-8 sm:p-12 shadow-sm">
                  <div className="flex flex-wrap items-baseline justify-between gap-4">
                    <h3 className="font-serif text-2xl sm:text-3xl text-primary font-normal">
                      {org.role}
                    </h3>
                    <span className="font-mono text-xs text-muted">
                      {org.period}
                    </span>
                  </div>
                  <p className="mt-2 text-base text-secondary font-medium">
                    {org.organization}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {org.responsibilities.map((r, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-sm leading-relaxed text-secondary"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-2 w-2 shrink-0 bg-accent rounded-full"
                        />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
