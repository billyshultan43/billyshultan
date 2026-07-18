import Link from "next/link";
import { Download, GraduationCap, BadgeCheck, Award, Briefcase, ArrowUpRight, Star } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
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
    "Full resume of Billy Shultan Al Hadiy — experience, education, certificates, awards, and skills.",
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
      {/* ──────── Hero ──────── */}
      <section className="section-container overflow-hidden pt-28 sm:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <Reveal>
            <span className="mb-3 inline-block text-sm font-medium uppercase tracking-[0.2em] text-secondary">
              RESUME
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Experience & Credentials
            </h1>
            <div className="mt-4 h-1 w-16 rounded-full bg-accent-gradient" />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              Electrical Engineer with 2+ years of professional experience in IoT, Embedded
              Systems, Full Stack Development, AI Integration, and Industrial Instrumentation.
            </p>
            <div className="mt-8 flex gap-3">
              <Link
                href={profile.cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg" }), "rounded-full")}
              >
                <Download size={16} />
                Download CV
              </Link>
            </div>
          </Reveal>

          {/* Right — stat cards + ambient bg */}
          <div className="relative">
            {/* Background layers */}
            <div className="bg-radial-glow pointer-events-none absolute inset-0 -z-10" />
            <div className="aurora-1 aurora-blob pointer-events-none absolute -right-12 -top-12 h-64 w-64 -z-10 bg-accent/15" />
            <div className="aurora-2 aurora-blob pointer-events-none absolute -bottom-8 -left-8 h-48 w-48 -z-10 bg-blue-500/10" />
            <div
              className="pointer-events-none absolute inset-0 -z-10 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* Circuit decorative lines */}
            <svg
              className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-20"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="80" cy="80" r="3" fill="#2563EB" />
              <circle cx="320" cy="40" r="3" fill="#2563EB" />
              <circle cx="360" cy="280" r="3" fill="#2563EB" />
              <circle cx="40" cy="320" r="3" fill="#2563EB" />
              <path d="M80 80 L320 40 L360 280 L40 320" stroke="#2563EB" strokeWidth="0.5" opacity="0.4" />
              <path d="M80 80 L200 200 L320 40" stroke="#2563EB" strokeWidth="0.5" opacity="0.3" />
              <path d="M200 200 L360 280 L40 320" stroke="#2563EB" strokeWidth="0.5" opacity="0.3" />
              <circle cx="200" cy="200" r="2" fill="#2563EB" />
              <path d="M200 80 L200 320" stroke="#2563EB" strokeWidth="0.3" opacity="0.2" strokeDasharray="4 4" />
              <path d="M40 200 L360 200" stroke="#2563EB" strokeWidth="0.3" opacity="0.2" strokeDasharray="4 4" />
            </svg>

            {/* Cards grid */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={cn(
                    "flex flex-col items-center justify-center rounded-2xl border border-line bg-white/[0.03] px-3 py-5 text-center backdrop-blur-md transition-all duration-300 hover:border-accent/25",
                    stat.label === "2+" || stat.label === "3" || stat.label === "15+"
                      ? "col-span-1"
                      : "col-span-1"
                  )}
                >
                  <span className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</span>
                  <span className="mt-1 text-[11px] leading-tight text-secondary">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────── Work Experience ──────── */}
      <section className="section-container space-y-20 pb-24 pt-20 sm:pt-28">
        <div>
          <SectionHeading eyebrow="Work" title="Experience" className="mb-8" />
          <ol className="relative ml-3 border-l border-line">
            {experience.map((item, i) => (
              <Reveal as="li" key={item.id} delay={i * 0.06} className="relative pb-12 pl-8 last:pb-0">
                <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-accent-gradient ring-4 ring-background" />
                <Card className="p-6 sm:p-7">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <Briefcase size={18} className="mt-0.5 shrink-0 text-accent" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                        <p className="text-sm text-secondary">{item.company}</p>
                      </div>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/[0.04] px-3 py-1 text-xs font-medium text-secondary">
                      {item.current && (
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                      )}
                      {item.period}
                    </span>
                  </div>

                  {/* Summary — first resp line */}
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {item.responsibilities[0]}
                  </p>

                  {/* Responsibilities */}
                  <ul className="mt-4 space-y-2">
                    {item.responsibilities.slice(1).map((r, idx) => (
                      <li key={idx} className="flex gap-2 text-sm leading-relaxed text-secondary">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology stack */}
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
          </ol>
        </div>

        {/* ──────── Achievements ──────── */}
        {achievements.length > 0 && (
          <div>
            <SectionHeading eyebrow="Recognition" title="Achievements" className="mb-8" />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {achievements.map((ach) => (
                <Reveal key={ach.id}>
                  <Card className="flex h-full flex-col p-6">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      <Award size={14} /> {ach.title}
                    </span>
                    <h3 className="mt-4 text-base font-semibold leading-snug text-white">
                      {ach.event}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{ach.organizer}</p>
                    <p className="mt-1 text-xs text-secondary">{ach.date}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary">
                      {ach.description}
                    </p>
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
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* ──────── Certifications ──────── */}
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
                  <div className="mt-5 flex-1 space-y-1">
                    <p className="text-sm text-secondary">
                      <span className="text-white">Issuer:</span> {cert.issuer}
                    </p>
                    <p className="text-sm text-secondary">
                      <span className="text-white">Date:</span> {cert.date}
                    </p>
                  </div>
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

        {/* ──────── Education ──────── */}
        <div>
          <SectionHeading eyebrow="Study" title="Education" className="mb-8" />
          {education.map((item) => (
            <Reveal key={item.id}>
              <Card className="p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <GraduationCap size={20} className="mt-0.5 shrink-0 text-accent" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
                      <p className="text-sm text-secondary">{item.institution}</p>
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/[0.04] px-3 py-1 text-xs font-medium text-secondary">
                    {item.period}
                  </span>
                </div>
                {item.gpa && (
                  <div className="mt-5 flex items-center gap-2">
                    <Star size={14} className="text-accent" />
                    <p className="text-sm text-secondary">
                      GPA: <span className="font-medium text-white">{item.gpa}</span>
                    </p>
                  </div>
                )}
                {item.thesis && (
                  <p className="mt-3 text-sm leading-relaxed text-secondary">
                    <span className="font-medium text-white">Thesis: </span>
                    {item.thesis}
                  </p>
                )}
                {item.details && (
                  <ul className="mt-5 space-y-2">
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

        {/* ──────── Bottom CTA ──────── */}
        <Reveal>
          <div className="flex justify-center pt-4">
            <Link
              href={profile.cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "rounded-full")}
            >
              <Download size={16} />
              Download CV
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
