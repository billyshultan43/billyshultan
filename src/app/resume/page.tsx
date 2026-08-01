import { Download, GraduationCap, BadgeCheck, Award, ArrowUpRight, Star } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/content/experience";
import { education } from "@/content/education";
import { certificates } from "@/content/certificates";
import { achievements } from "@/content/achievements";
import { profile } from "@/content/profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Resume",
  description:
    "Full resume of Billy Shultan Al Hadiy, experience, education, certificates, awards, and skills.",
};

const stats = [
  { value: "2+", label: "Years of Experience" },
  { value: "3", label: "Featured Projects" },
  { value: "15+", label: "Technologies" },
  { value: "Electrical", label: "Engineer" },
  { value: "IoT", label: "Embedded Systems" },
  { value: "AI", label: "Integration" },
];

export default function ResumePage() {
  return (
    <>
      <section className="section-container overflow-hidden pt-24 sm:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h1 className="font-serif text-4xl font-normal leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Experience & Credentials
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-secondary">
              Electrical Engineer with 2+ years of professional experience in IoT, Embedded
              Systems, Full Stack Development, AI Integration, and Industrial Instrumentation.
            </p>
            <div className="mt-8" />
          </Reveal>

          <div className="relative">
            <div className="-ml-px -mt-px grid grid-cols-3 border-b border-r border-line">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col justify-between gap-4 border-l border-t border-line px-4 py-6"
                >
                  <span className="font-serif text-3xl italic text-primary sm:text-4xl">{stat.value}</span>
                  <span className="text-[11px] leading-tight uppercase tracking-[0.16em] text-muted">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-container space-y-20 pb-24 pt-20 sm:pt-28">
        <div>
          <h2 className="font-serif text-3xl tracking-tight text-primary sm:text-4xl">
            Experience
          </h2>
          <div className="mt-10 border-l border-line pl-8">
            {experience.map((item, i) => (
              <Reveal as="li" key={item.id} delay={i * 0.06} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[33px] top-1.5 h-2 w-2 bg-accent" />
                <Card className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-lg text-primary">{item.role}</h3>
                      <p className="mt-1 text-sm text-secondary">{item.company}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-muted">
                      {item.current && (
                        <span className="text-[11px] uppercase tracking-[0.16em] text-accent">
                          Current
                        </span>
                      )}
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-secondary">
                    {item.responsibilities[0]}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {item.responsibilities.slice(1).map((r, idx) => (
                      <li key={idx} className="flex gap-2 text-sm leading-relaxed text-secondary/80">
                        <span className="mt-1.5 h-1 w-1 shrink-0 bg-accent/50" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>

                  {item.technologies && item.technologies.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  )}
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        {achievements.length > 0 && (
          <div>
            <h2 className="font-serif text-3xl tracking-tight text-primary sm:text-4xl">
              Achievements
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {achievements.map((ach) => (
                <Reveal key={ach.id}>
                  <Card className="flex h-full flex-col p-6">
                    <span className="inline-flex w-fit items-center gap-2 border border-accent/25 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
                      <Award size={14} /> {ach.title}
                    </span>
                    <h3 className="mt-4 font-serif text-base leading-snug text-primary">
                      {ach.event}
                    </h3>
                    <p className="mt-1 text-sm text-secondary">{ach.organizer}</p>
                    <p className="mt-1 text-xs text-muted">{ach.date}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary">
                      {ach.description}
                    </p>
                    {ach.file && (
                      <a
                        href={ach.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex w-fit items-center gap-2 border border-line px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-accent"
                      >
                        <Download size={15} /> View certificate
                      </a>
                    )}
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="font-serif text-3xl tracking-tight text-primary sm:text-4xl">
            Certificates & Training
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {certificates.map((cert, i) => (
              <Reveal key={cert.id} delay={i * 0.06}>
                <Card className="flex h-full flex-col p-6">
                  <div className="flex items-start gap-3">
                    <BadgeCheck size={20} className="mt-0.5 shrink-0 text-accent" />
                    <div>
                      <Badge className="border-accent/30 bg-accent/5 text-accent">{cert.category}</Badge>
                      <h3 className="mt-2 font-serif text-base leading-snug text-primary">{cert.name}</h3>
                    </div>
                  </div>
                  <div className="mt-5 flex-1 space-y-1">
                    <p className="text-sm text-secondary">
                      <span className="text-primary">Issuer:</span> {cert.issuer}
                    </p>
                    <p className="text-sm text-secondary">
                      <span className="text-primary">Date:</span> {cert.date}
                    </p>
                  </div>
                  {cert.file && (
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex w-fit items-center gap-2 border border-line px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-accent"
                    >
                      <Download size={15} /> Preview
                    </a>
                  )}
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-serif text-3xl tracking-tight text-primary sm:text-4xl">
            Education
          </h2>
          <div className="mt-10">
            {education.map((item) => (
              <Reveal key={item.id}>
                <Card className="p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <GraduationCap size={20} className="mt-0.5 shrink-0 text-accent" />
                      <div>
                        <h3 className="font-serif text-lg text-primary">{item.degree}</h3>
                        <p className="text-sm text-secondary">{item.institution}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
                      {item.period}
                    </span>
                  </div>
                  {item.gpa && (
                    <div className="mt-5 flex items-center gap-2">
                      <Star size={14} className="text-accent" />
                      <p className="text-sm text-secondary">
                        GPA: <span className="font-medium text-primary">{item.gpa}</span>
                      </p>
                    </div>
                  )}
                  {item.thesis && (
                    <p className="mt-3 text-sm leading-relaxed text-secondary">
                      <span className="font-medium text-primary">Thesis: </span>
                      {item.thesis}
                    </p>
                  )}
                  {item.details && (
                    <ul className="mt-5 space-y-2">
                      {item.details.map((d, idx) => (
                        <li key={idx} className="flex gap-2 text-sm leading-relaxed text-secondary/80">
                          <span className="mt-1.5 h-1 w-1 shrink-0 bg-accent/50" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
