import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import { BackgroundWord } from "@/components/background-word";
import { Hairline } from "@/components/hairline";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/content/experience";
import { education, organization } from "@/content/education";
import { certificates } from "@/content/certificates";
import { achievements } from "@/content/achievements";
import { skills } from "@/content/skills";
import { profile } from "@/content/profile";

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
  const allTech = Array.from(
    new Set(experience.flatMap((e) => e.technologies ?? []))
  );

  const gpa = education[0].gpa?.split("/").map((part) => part.trim()) ?? ["3.50", "4.00"];

  const metricTiles = [
    { label: "GPA", value: gpa[0], note: `of ${gpa[1]}, S1 Electrical Engineering` },
    { label: "Experience", value: "2+", note: "years in the field" },
    { label: "Systems", value: "3", note: "end-to-end delivered" },
    { label: "Certificates", value: String(certificates.length), note: "certification & training" },
    { label: "Languages", value: String(skills[5]?.skills.length ?? 2), note: "Indonesian & English" },
    { label: "Domains", value: String(skills.length), note: "of engineering practice" },
  ];

  return (
    <>
      <section className="section-container relative overflow-hidden pt-10 sm:pt-14">
        <BackgroundWord
          text="Resume"
          className="left-auto right-0 -translate-y-1/2 text-[clamp(150px,18vw,240px)] opacity-50"
        />
        <Reveal>
          <div className="relative z-10 max-w-4xl">
            <span className="label text-accent">Curriculum Vitae</span>
            <h1 className="mt-5 font-serif text-4xl leading-[1.04] tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Experience & Credentials
            </h1>
            <p className="mt-7 max-w-2xl text-base font-light leading-[1.8] text-secondary sm:text-lg">
              Electrical Engineer with professional experience in IoT, Embedded
              Systems, Full Stack Development, AI Integration, and Industrial
              Instrumentation.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a
                href={profile.cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:bg-accent hover:shadow-glow active:translate-y-[1px]"
              >
                <Download size={15} />
                Download CV
              </a>
              <div className="flex flex-wrap items-baseline gap-x-10 gap-y-3">
                {stats.map((stat) => (
                  <p key={stat.label} className="font-mono text-xs text-secondary">
                    <span className="mr-2 font-serif text-3xl italic text-primary">
                      {stat.value}
                    </span>
                    {stat.label}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-12">
              <Hairline />
            </div>
          </div>
        </Reveal>
      </section>

      {/* BENTO METRICS */}
      <section className="section-container pt-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {metricTiles.map((tile, i) => (
            <Reveal key={tile.label} delay={i * 0.04} className="h-full">
              <div
                className={`card-base flex h-full flex-col justify-between p-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-lift ${
                  i === 0 ? "border-accent/30 bg-accent text-background" : ""
                }`}
              >
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.24em] ${
                    i === 0 ? "text-background/60" : "text-accent"
                  }`}
                >
                  {tile.label}
                </span>
                <p
                  className={`mt-5 font-serif text-4xl leading-none ${
                    i === 0 ? "text-background" : "text-primary"
                  }`}
                >
                  {tile.value}
                </p>
                <p
                  className={`mt-2 font-mono text-[11px] leading-relaxed ${
                    i === 0 ? "text-background/65" : "text-secondary"
                  }`}
                >
                  {tile.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-container relative overflow-hidden pb-24 pt-24 sm:pt-28">
        <div className="relative z-10 space-y-32">
          {/* TECHNOLOGIES */}
          <div>
            <SectionHeading
              index="01"
              title="Technologies"
              right={
                <span className="font-mono text-[11px] text-secondary">
                  {allTech.length} tools across the stack
                </span>
              }
            />
            <Reveal>
              <div className="flex flex-wrap gap-2.5">
                {allTech.map((tech) => (
                  <span
                    key={tech}
                    className="chip px-4 py-2 text-[12px] transition-colors duration-300 hover:border-accent/50 hover:text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
                {skills.map((cat) => (
                  <div key={cat.name}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                      {cat.name}
                    </p>
                    <p className="mt-2 max-w-[300px] font-mono text-[11px] leading-loose text-secondary">
                      {cat.skills.join(" / ")}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* EXPERIENCE MAGAZINE TIMELINE */}
          <div>
            <SectionHeading
              index="02"
              title="Experience"
              right={
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-secondary">
                  Chronological Record
                </span>
              }
            />

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-[5px] top-0 w-px bg-line md:left-[7px]"
              />
              <div className="space-y-14">
                {experience.map((item, i) => (
                  <Reveal key={item.id} delay={i * 0.05}>
                    <div className="relative pl-10 md:pl-16">
                      <span
                        aria-hidden="true"
                        className={`absolute left-0 top-2 h-[11px] w-[11px] rounded-full border-2 border-background md:h-[15px] md:w-[15px] ${
                          item.current
                            ? "bg-accent shadow-glow"
                            : "border-line-strong bg-surface"
                        }`}
                      />
                      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                        <h3 className="font-serif text-3xl font-medium tracking-tight text-primary sm:text-4xl">
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-4">
                          {item.current && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
                              Current
                            </span>
                          )}
                          <span className="font-mono text-xs text-secondary">
                            {item.period}
                          </span>
                        </div>
                      </div>
                      <p className="mt-2 text-base font-medium text-accent-deep">
                        {item.company}
                      </p>
                      <ul className="mt-7 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                        {item.responsibilities.map((r, idx) => (
                          <li
                            key={idx}
                            className="flex gap-3 text-sm font-light leading-[1.7] text-secondary"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60"
                            />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                      {item.technologies && item.technologies.length > 0 && (
                        <div className="mt-7 flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <span key={tech} className="chip">
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
          </div>

          {/* ACHIEVEMENTS */}
          {achievements.length > 0 && (
            <div>
              <SectionHeading
                index="03"
                title="Achievements"
                right={
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-secondary">
                    Recognition
                  </span>
                }
              />
              <div className="grid grid-cols-1 gap-4">
                {achievements.map((ach) => (
                  <Reveal key={ach.id}>
                    <div className="card-base card-hover group flex flex-col gap-8 p-8 sm:flex-row sm:items-start sm:justify-between sm:p-10">
                      <div className="flex gap-8">
                        {ach.image && (
                          <div className="relative hidden h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-line bg-surface md:block">
                            <Image
                              src={ach.image}
                              alt={ach.title}
                              fill
                              sizes="112px"
                              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                            />
                          </div>
                        )}
                        <div>
                          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                            {ach.event}
                          </span>
                      <h3 className="mt-3 font-serif text-3xl font-medium text-primary">
                        {ach.title}
                      </h3>
                          <p className="mt-2 text-sm font-medium text-secondary">
                            {ach.organizer}
                          </p>
                          <p className="mt-5 max-w-3xl text-base font-light leading-[1.75] text-secondary">
                            {ach.description}
                          </p>
                          {ach.project && (
                            <Link
                              href="/projects/ambient-particulate-monitoring"
                              className="group/link mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                            >
                              {ach.project}
                              <ArrowUpRight
                                size={14}
                                className="text-accent transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                              />
                            </Link>
                          )}
                        </div>
                      </div>
                      <div className="flex shrink-0 flex-col items-start gap-4 sm:items-end">
                        <span className="font-mono text-xs text-secondary">{ach.date}</span>
                        {ach.file && (
                          <a
                            href={ach.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-mono text-xs text-primary transition-all duration-300 hover:border-accent hover:text-accent"
                          >
                            View certificate
                            <ArrowUpRight
                              size={13}
                              className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {/* CERTIFICATES & TRAINING */}
          <div>
            <SectionHeading
              index="04"
              title="Certificates & Training"
              right={
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-secondary">
                  Credentials
                </span>
              }
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {certificates.map((cert, i) => (
                <Reveal key={cert.id} delay={i * 0.05} className="h-full">
                  <div className="card-base card-hover flex h-full flex-col justify-between p-8 sm:p-10">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                          {cert.category}
                        </span>
                        <span className="font-mono text-xs text-secondary">
                          {cert.date}
                        </span>
                      </div>
                      <h3 className="mt-6 font-serif text-2xl font-medium leading-snug text-primary">
                        {cert.name}
                      </h3>
                      <p className="mt-3 text-sm font-medium text-secondary">
                        {cert.issuer}
                      </p>
                    </div>
                    {cert.file && (
                      <div className="mt-8 border-t border-line pt-6">
                        <a
                          href={cert.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2 font-mono text-xs text-primary transition-colors duration-300 hover:text-accent"
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
            <SectionHeading
              index="05"
              title="Education & Organization"
              right={
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-secondary">
                  Academic Background
                </span>
              }
            />
            <div className="space-y-4">
              {education.map((item) => (
                <Reveal key={item.id}>
                  <div className="card-base card-hover p-8 sm:p-10">
                      <div className="flex flex-wrap items-baseline justify-between gap-4">
                        <h3 className="font-serif text-2xl font-medium leading-tight tracking-tight text-primary sm:text-3xl">
                          {item.degree}
                        </h3>
                      <span className="font-mono text-xs text-secondary">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-2 text-base font-medium text-accent-deep">
                      {item.institution}
                    </p>
                    {item.gpa && (
                      <p className="mt-4 text-sm text-secondary">
                        GPA:{" "}
                        <span className="ml-1 font-serif text-3xl italic text-primary">
                          {item.gpa}
                        </span>
                      </p>
                    )}
                    {item.thesis && (
                      <p className="mt-6 max-w-4xl rounded-2xl border border-line bg-surface/50 p-6 text-sm leading-relaxed text-secondary sm:text-base">
                        <span className="font-medium text-primary">Thesis: </span>
                        {item.thesis}
                      </p>
                    )}
                    {item.details && (
                      <ul className="mt-7 space-y-3">
                        {item.details.map((d, idx) => (
                          <li
                            key={idx}
                            className="flex gap-3 text-sm font-light leading-relaxed text-secondary"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60"
                            />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}

              {organization.map((org) => (
                <Reveal key={org.id}>
                  <div className="card-base card-hover p-8 sm:p-10">
                    <div className="flex flex-wrap items-baseline justify-between gap-4">
                      <h3 className="font-serif text-2xl leading-tight tracking-tight text-primary sm:text-3xl">
                        {org.role}
                      </h3>
                      <span className="font-mono text-xs text-secondary">
                        {org.period}
                      </span>
                    </div>
                    <p className="mt-2 text-base font-medium text-accent-deep">
                      {org.organization}
                    </p>
                    <ul className="mt-7 space-y-3">
                      {org.responsibilities.map((r, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-sm font-light leading-relaxed text-secondary"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60"
                          />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
