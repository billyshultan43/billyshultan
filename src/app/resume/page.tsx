import Link from "next/link";
import { Download, GraduationCap, BadgeCheck, Award, Briefcase, Code2 } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/content/experience";
import { education } from "@/content/education";
import { certificates } from "@/content/certificates";
import { achievements } from "@/content/achievements";
import { skills } from "@/content/skills";
import { profile } from "@/content/profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Resume",
  description:
    "Full resume of Billy Shultan Al Hadiy — experience, education, certificates, awards, and skills.",
};

export default function ResumePage() {
  return (
    <>
      <PageIntro
        eyebrow="Resume"
        title="Experience & Credentials"
        description="A complete overview of my professional background, education, certifications, and skills."
      />
      <div className="section-container -mt-6">
        <Link
          href={profile.cvFile}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "lg" }), "rounded-full")}
        >
          Download CV
        </Link>
      </div>

      <section className="section-container space-y-20 pb-24">
        {/* Experience Details */}
        <div>
          <SectionHeading eyebrow="Work" title="Experience" className="mb-8" />
          <ol className="relative ml-3 border-l border-line">
            {experience.map((item, i) => (
              <Reveal as="li" key={item.id} delay={i * 0.06} className="relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-accent-gradient ring-4 ring-background" />
                <Card className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <Briefcase size={18} className="mt-0.5 text-accent" />
                      <div>
                        <h3 className="font-semibold text-white">{item.role}</h3>
                        <p className="text-sm text-secondary">{item.company}</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-white/[0.04] px-3 py-1 text-xs font-medium text-secondary">
                      {item.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {item.responsibilities.map((r, idx) => (
                      <li key={idx} className="flex gap-2 text-sm leading-relaxed text-secondary">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Education */}
        <div>
          <SectionHeading eyebrow="Study" title="Education" className="mb-8" />
          {education.map((item) => (
            <Reveal key={item.id}>
              <Card className="p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <GraduationCap size={20} className="mt-0.5 text-accent" />
                    <div>
                      <h3 className="font-semibold text-white">{item.degree}</h3>
                      <p className="text-sm text-secondary">{item.institution}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-white/[0.04] px-3 py-1 text-xs font-medium text-secondary">
                    {item.period}
                  </span>
                </div>
                {item.gpa && (
                  <p className="mt-4 text-sm text-secondary">
                    GPA: <span className="font-medium text-white">{item.gpa}</span>
                  </p>
                )}
                {item.thesis && (
                  <p className="mt-2 text-sm leading-relaxed text-secondary">
                    <span className="font-medium text-white">Thesis: </span>
                    {item.thesis}
                  </p>
                )}
                {item.details && (
                  <ul className="mt-4 space-y-2">
                    {item.details.map((d, idx) => (
                      <li key={idx} className="flex gap-2 text-sm leading-relaxed text-secondary">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Certificates */}
        <div>
          <SectionHeading eyebrow="Credentials" title="Certificates & Training" className="mb-8" />
          <div className="grid gap-4 md:grid-cols-2">
            {certificates.map((cert, i) => (
              <Reveal key={cert.id} delay={i * 0.06}>
                <Card className="flex h-full flex-col p-6">
                  <div className="flex items-start gap-3">
                    <BadgeCheck size={20} className="mt-0.5 shrink-0 text-accent" />
                    <div>
                      <Badge className="border-accent/30 bg-accent/10 text-accent">{cert.category}</Badge>
                      <h3 className="mt-2 text-base font-semibold leading-snug text-white">{cert.name}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-secondary">
                    <span className="text-white">Issuer:</span> {cert.issuer}
                  </p>
                  <p className="text-sm text-secondary">
                    <span className="text-white">Date:</span> {cert.date}
                  </p>
                  {cert.file && (
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:bg-white/[0.06]"
                    >
                      <Download size={15} /> Preview
                    </a>
                  )}
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <SectionHeading eyebrow="Recognition" title="Awards" className="mb-8" />
          {achievements.length === 0 ? (
            <p className="text-secondary">No awards listed.</p>
          ) : (
            <div className="grid gap-4 lg:grid-cols-2">
              {achievements.map((ach) => (
                <Reveal key={ach.id}>
                  <Card className="flex h-full flex-col overflow-hidden">
                    {ach.image && (
                      <div className="relative h-48 w-full overflow-hidden border-b border-line">
                        <img src={ach.image} alt={ach.title} className="h-full w-full object-cover" />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-6">
                      <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        <Award size={14} /> {ach.title}
                      </span>
                      <h3 className="mt-3 font-semibold text-white">{ach.event}</h3>
                      <p className="mt-2 text-sm text-secondary">{ach.organizer}</p>
                      <p className="text-sm text-secondary">{ach.date}</p>
                      <p className="mt-3 text-sm leading-relaxed text-secondary">{ach.description}</p>
                      {ach.file && (
                        <a
                          href={ach.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:bg-white/[0.06]"
                        >
                          <Download size={15} /> View certificate
                        </a>
                      )}
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          )}
        </div>

        {/* Skills Summary */}
        <div>
          <SectionHeading eyebrow="Capabilities" title="Skills Summary" className="mb-8" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((cat, i) => (
              <Reveal key={cat.name} delay={i * 0.05}>
                <Card className="h-full p-6">
                  <div className="flex items-center gap-2.5">
                    <Code2 size={16} className="text-accent" />
                    <h3 className="text-sm font-semibold text-white">{cat.name}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="flex justify-center pt-4">
            <Link
              href={profile.cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "rounded-full")}
            >
              Download CV
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
