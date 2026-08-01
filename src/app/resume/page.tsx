import { ArrowUpRight } from "lucide-react";
import { Folio } from "@/components/folio";
import { Hairline } from "@/components/hairline";
import { ParallaxWord } from "@/components/parallax-word";
import { Reveal } from "@/components/reveal";
import { experience } from "@/content/experience";
import { education } from "@/content/education";
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
      <section className="section-container relative overflow-hidden pt-20 sm:pt-24">
        <Folio number="03" />
        <Reveal>
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Experience & Credentials
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-secondary">
            Electrical Engineer with professional experience in IoT, Embedded
            Systems, Full Stack Development, AI Integration, and Industrial
            Instrumentation.
          </p>
          <div className="mt-10 flex flex-wrap items-baseline gap-x-12 gap-y-3 border-t border-line pt-7">
            {stats.map((stat) => (
              <p key={stat.label} className="font-mono text-xs text-secondary">
                <span className="font-serif text-2xl italic text-primary">
                  {stat.value}
                </span>{" "}
                {stat.label}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-container relative overflow-hidden pb-24 pt-16">
        <ParallaxWord
          text="Resume"
          className="-translate-x-1/2 -translate-y-1/2 text-[clamp(170px,20vw,260px)] opacity-50"
        />
        <div className="relative z-10">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
            <h2 className="font-serif text-3xl tracking-tight text-primary lg:col-span-4 sm:text-4xl">
              Experience
            </h2>
            <div className="lg:col-span-8">
              {experience.map((item, i) => (
                <Reveal key={item.id} delay={i * 0.05}>
                  <div className="border-t border-line py-10">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="font-serif text-2xl leading-tight text-primary">
                        {item.role}
                      </h3>
                      {item.current && (
                        <span className="font-mono text-[11px] text-accent">
                          current
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-secondary">{item.company}</p>
                    <p className="mt-1 font-mono text-xs text-muted">
                      <span
                        aria-hidden="true"
                        className="mr-2 inline-block h-2 w-2 border border-accent/60"
                      />
                      {item.period}
                    </p>
                    <ul className="mt-6 max-w-3xl space-y-3">
                      {item.responsibilities.map((r, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-sm leading-relaxed text-secondary"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-2.5 w-2.5 shrink-0 border border-accent/60"
                          />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                    {item.technologies && item.technologies.length > 0 && (
                      <p className="mt-5 font-mono text-[11px] leading-loose text-muted">
                        {item.technologies.join(" / ")}
                      </p>
                    )}
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.15}>
                <Hairline />
              </Reveal>
            </div>
          </div>
        </Reveal>

        {achievements.length > 0 && (
          <Reveal>
            <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
              <h2 className="font-serif text-3xl tracking-tight text-primary lg:col-span-4 sm:text-4xl">
                Achievements
              </h2>
              <div className="lg:col-span-8">
                {achievements.map((ach) => (
                  <div key={ach.id} className="border-t border-line py-10">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="font-serif text-2xl leading-tight text-primary">
                        {ach.title}
                      </h3>
                      <span className="font-mono text-xs text-muted">
                        <span
                          aria-hidden="true"
                          className="mr-2 inline-block h-2 w-2 border border-accent/60"
                        />
                        {ach.date}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-secondary">{ach.event}</p>
                    <p className="mt-1 text-xs text-muted">{ach.organizer}</p>
                    <p className="mt-5 max-w-3xl text-sm leading-relaxed text-secondary">
                      {ach.description}
                    </p>
                    {ach.file && (
                      <a
                        href={ach.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-6 inline-flex items-center gap-1.5 text-sm text-accent-deep transition-colors duration-300 hover:text-primary"
                      >
                        View certificate
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>
                    )}
                  </div>
                ))}
                <Hairline />
              </div>
            </div>
          </Reveal>
        )}

        <Reveal>
          <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
            <h2 className="font-serif text-3xl tracking-tight text-primary lg:col-span-4 sm:text-4xl">
              Certificates & Training
            </h2>
            <div className="lg:col-span-8">
              {certificates.map((cert, i) => (
                <Reveal key={cert.id} delay={i * 0.05}>
                  <div className="flex flex-col justify-between gap-3 border-t border-line py-10 sm:flex-row sm:items-baseline sm:gap-6">
                    <div>
                      <h3 className="font-serif text-xl leading-snug text-primary">
                        {cert.name}
                      </h3>
                      <p className="mt-2 text-sm text-secondary">
                        {cert.category} / {cert.issuer}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center justify-between gap-8 sm:flex-col sm:items-end sm:gap-2">
                      <p className="font-mono text-xs text-muted">
                        <span
                          aria-hidden="true"
                          className="mr-2 inline-block h-2 w-2 border border-accent/60"
                        />
                        {cert.date}
                      </p>
                      {cert.file && (
                        <a
                          href={cert.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${cert.name}`}
                          className="group inline-flex items-center gap-1 font-mono text-xs text-accent-deep transition-colors duration-300 hover:text-primary"
                        >
                          PDF
                          <ArrowUpRight
                            size={13}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
              <Hairline />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
            <h2 className="font-serif text-3xl tracking-tight text-primary lg:col-span-4 sm:text-4xl">
              Education
            </h2>
            <div className="lg:col-span-8">
              {education.map((item) => (
                <div key={item.id} className="border-t border-line py-10">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="font-serif text-2xl leading-tight text-primary">
                      {item.degree}
                    </h3>
                    <p className="font-mono text-xs text-muted">
                      <span
                        aria-hidden="true"
                        className="mr-2 inline-block h-2 w-2 border border-accent/60"
                      />
                      {item.period}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-secondary">
                    {item.institution}
                  </p>
                  {item.gpa && (
                    <p className="mt-4 text-sm text-secondary">
                      GPA:{" "}
                      <span className="font-serif text-lg italic text-primary">
                        {item.gpa}
                      </span>
                    </p>
                  )}
                  {item.thesis && (
                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-secondary">
                      <span className="font-medium text-primary">Thesis: </span>
                      {item.thesis}
                    </p>
                  )}
                  {item.details && (
                    <ul className="mt-6 max-w-3xl space-y-3">
                      {item.details.map((d, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-sm leading-relaxed text-secondary"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-2.5 w-2.5 shrink-0 border border-accent/60"
                          />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <Hairline />
            </div>
          </div>
        </Reveal>
        </div>
      </section>
    </>
  );
}
