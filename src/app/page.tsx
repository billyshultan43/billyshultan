import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Code2, Layers, Cpu, Wrench, Sparkles, Globe } from "lucide-react";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { contact } from "@/content/social";
import { skills } from "@/content/skills";
import { experience } from "@/content/experience";
import { education } from "@/content/education";

const projectCards = [
  { project: projects[0], index: "01", caption: "Environmental Monitoring" },
  { project: projects[2], index: "02", caption: "Vehicle Emission" },
  { project: projects[1], index: "03", caption: "AI Cashier System" },
];

const stats = [
  { value: "2+", label: "Years" },
  { value: "3", label: "Projects" },
  { value: "15+", label: "Technologies" },
  { value: "∞", label: "Ideas" },
];

const focusTiles = [
  { label: "Tech", value: "15+", note: "Technologies practiced" },
  { label: "Hardware", value: "IoT", note: "Embedded Systems" },
  { label: "Intelligence", value: "AI", note: "Integration & Fuzzy Logic" },
  { label: "Infrastructure", value: "Cloud", note: "Real-time Solutions" },
];

const iconMap = {
  code: Code2,
  layers: Layers,
  cpu: Cpu,
  wrench: Wrench,
  sparkles: Sparkles,
  globe: Globe,
} as const;

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* BENTO INFO CARDS */}
      <section className="section-container pt-14 sm:pt-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="card-base relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden bg-primary p-8 text-background shadow-soft transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/20 blur-[70px]"
              />
              <span className="relative font-mono text-[11px] uppercase tracking-[0.28em] text-background/50">
                Since 2021
              </span>
              <div className="relative">
                <span className="font-serif text-7xl leading-none tracking-tight text-background">
                  2<span className="text-accent-light">+</span>
                </span>
                <h3 className="mt-4 font-serif text-2xl text-background">
                  Years of Experience
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-background/65">
                  Engineering solutions that scale and last.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-4" delay={0.06}>
            <Link
              href="/projects"
              className="card-base card-hover group flex h-full min-h-[280px] flex-col justify-between p-8"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
                  Portfolio
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-primary transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-background">
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
              <div>
                <span className="font-serif text-7xl leading-none tracking-tight text-primary">
                  3
                </span>
                <h3 className="mt-4 font-serif text-2xl text-primary">
                  Featured Projects
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-secondary">
                  Solving real problems with technology.
                </p>
              </div>
            </Link>
          </Reveal>

          <Reveal className="md:col-span-4" delay={0.12}>
            <div className="card-base group relative h-full min-h-[280px] overflow-hidden p-8">
              <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-line shadow-soft transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]">
                <Image
                  src={profile.profileImage}
                  alt={profile.name}
                  fill
                  sizes="112px"
                  className="object-cover object-top"
                />
              </div>
              <p className="mt-6 font-serif text-xl leading-[1.5] text-primary">
                Electrical Engineer with a passion for IoT, embedded systems,
                and AI integration.
              </p>
              <p className="mt-4 text-sm font-light leading-relaxed text-secondary">
                I build end-to-end connected systems for industrial and
                environmental monitoring.
              </p>
            </div>
          </Reveal>

          <Reveal className="md:col-span-5" delay={0.05}>
            <div className="card-base relative flex h-full min-h-[240px] flex-col justify-between overflow-hidden border-accent/30 bg-accent p-8 text-background shadow-soft">
              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-background/10 blur-[60px]"
              />
              <span className="relative font-mono text-[11px] uppercase tracking-[0.28em] text-background/60">
                Education
              </span>
              <div className="relative">
                <p className="font-serif text-2xl leading-[1.35] text-background">
                  {education[0].degree.replace("Bachelor of ", "B.Sc. in ")}
                </p>
                <p className="mt-2 text-sm font-medium text-background/75">
                  {education[0].institution}
                </p>
                <div className="mt-6 flex items-center gap-5">
                  <div>
                    <span className="font-serif text-4xl leading-none text-background">
                      {education[0].gpa?.split("/")[0].trim()}
                      <span className="text-accent-deep">/{education[0].gpa?.split("/")[1].trim()}</span>
                    </span>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-background/60">
                      GPA
                    </p>
                  </div>
                  <div aria-hidden="true" className="h-9 w-px bg-background/20" />
                  <p className="font-mono text-[11px] text-background/65">
                    {education[0].period}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-4" delay={0.1}>
            <div className="card-base flex h-full min-h-[240px] flex-col justify-between p-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary">
                {contact.location}
              </span>
              <div>
                <p className="mt-1.5 break-all text-sm font-medium text-primary">
                  {contact.email}
                </p>
                <div className="my-5 h-px w-full bg-line" />
                <p className="text-sm text-secondary">Open to collaboration</p>
                <Link
                  href="/contact"
                  className="group mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                >
                  Let&apos;s Talk
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-3" delay={0.15}>
            <div className="card-base relative flex h-full min-h-[240px] flex-col justify-between overflow-hidden bg-primary p-8 text-background">
              <div
                aria-hidden="true"
                className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-accent/25 blur-[60px]"
              />
              <span className="relative font-mono text-[11px] uppercase tracking-[0.28em] text-background/50">
                Mindset
              </span>
              <div className="relative">
                <span className="font-serif text-6xl leading-none text-background">
                  &#8734;
                </span>
                <h3 className="mt-3 font-serif text-2xl text-background">Ideas</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-background/65">
                  {profile.tagline}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="mt-4 grid grid-cols-2 border border-line bg-card lg:grid-cols-4">
            {focusTiles.map((tile, i) => (
              <div
                key={tile.label}
                className={`p-7 ${i > 0 ? "border-t border-line lg:border-t-0 lg:border-l" : ""} ${i === 2 ? "border-t border-line lg:border-t-0" : ""}`}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                  {tile.label}
                </span>
                <p className="mt-3 font-serif text-3xl text-primary">{tile.value}</p>
                <p className="mt-1 font-mono text-[11px] text-secondary">{tile.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section-container pt-24 sm:pt-32">
        <SectionHeading
          index="01"
          title="Building solutions that make an impact."
          right={
            <div className="flex flex-col items-start gap-2 sm:items-end">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary"
              >
                All projects
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
              <span className="font-mono text-[11px] text-secondary">
                {projects.length} projects and counting
              </span>
            </div>
          }
        />
        <Reveal>
          <p className="-mt-6 mb-14 max-w-2xl text-base font-light leading-[1.8] text-secondary">
            Explore selected projects that showcase my work across IoT,
            embedded systems, and full-stack development.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-8" delay={0.05}>
            <Link
              href={`/projects/${projectCards[0].project.slug}`}
              className="group relative block h-full min-h-[420px] overflow-hidden rounded-[28px] bg-primary shadow-soft ring-1 ring-line transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-lift lg:min-h-[520px]"
            >
              <Image
                src={projectCards[0].project.gallery[0]}
                alt={projectCards[0].project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover opacity-80 transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/25 to-transparent transition-opacity duration-500" />
              <span className="absolute left-6 top-6 rounded-full bg-background/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-background backdrop-blur-sm">
                Featured
              </span>
              <span className="absolute right-6 top-5 font-serif text-6xl italic leading-none text-background/25">
                01
              </span>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-7 sm:p-9">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-background/70">
                    {projectCards[0].project.year} &middot; {projectCards[0].caption}
                  </p>
                  <h3 className="mt-3 max-w-xl font-serif text-3xl leading-[1.12] tracking-tight text-background sm:text-4xl">
                    {projectCards[0].project.title}
                  </h3>
                </div>
                <span className="mb-1 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background text-primary transition-all duration-300 group-hover:bg-accent group-hover:text-background sm:flex">
                  <ArrowUpRight size={19} />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 lg:col-span-4">
            {[projectCards[1], projectCards[2]].map((card, i) => (
              <Reveal key={card.project.slug} delay={0.1 + i * 0.06}>
                <Link
                  href={`/projects/${card.project.slug}`}
                  className="card-base card-hover group flex h-full flex-col justify-between gap-6 overflow-hidden p-6 sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-secondary">
                      {card.project.year}
                    </span>
                    <span className="font-serif text-4xl italic leading-none text-line-strong transition-colors duration-500 group-hover:text-accent">
                      {card.index}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                      {card.caption}
                    </p>
                    <h3 className="mt-2.5 font-serif text-2xl leading-[1.2] tracking-tight text-primary transition-colors duration-300 group-hover:text-accent-deep">
                      {card.project.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm font-light leading-relaxed text-secondary">
                      {card.project.summary}
                    </p>
                  </div>
                  <span className="flex items-center justify-between border-t border-line pt-4 text-xs font-medium text-primary">
                    View case study
                    <ArrowUpRight
                      size={14}
                      className="text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS BENTO */}
      <section className="section-container pt-24 sm:pt-32">
        <SectionHeading
          index="02"
          title="Capabilities & tools"
          right={
            <Link
              href="/skills"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              All skills
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          }
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {skills.slice(0, 2).map((cat, i) => {
            const Icon = iconMap[cat.icon as keyof typeof iconMap] ?? Code2;
            return (
              <Reveal key={cat.name} className="md:col-span-4" delay={i * 0.05}>
                <div className="card-base card-hover flex h-full flex-col p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-surface text-accent">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl text-primary">{cat.name}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}

          <Reveal className="md:col-span-4" delay={0.1}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] bg-primary p-8 text-background shadow-soft">
              <div
                aria-hidden="true"
                className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-accent/25 blur-[70px]"
              />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-background/20 bg-background/10 text-accent-light">
                <Cpu size={22} strokeWidth={1.5} />
              </span>
              <div className="relative">
                <h3 className="font-serif text-2xl text-background">Embedded & IoT</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skills[2].skills.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-full border border-background/20 bg-background/10 px-3.5 py-1.5 font-mono text-[11px] text-background/85"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-7" delay={0.08}>
            <div className="card-base card-hover flex h-full flex-col p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-surface text-accent">
                <Wrench size={22} strokeWidth={1.5} />
              </span>
              <h3 className="mt-6 font-serif text-2xl text-primary">Engineering Expertise</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills[3].skills.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-5" delay={0.14}>
            <div className="card-base card-hover flex h-full flex-col p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-surface text-accent">
                <Sparkles size={22} strokeWidth={1.5} />
              </span>
              <h3 className="mt-6 font-serif text-2xl text-primary">Domains</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills[4].skills.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-12" delay={0.1}>
            <div className="card-base flex flex-col justify-between gap-8 overflow-hidden p-8 lg:flex-row lg:items-center lg:p-10">
              <div className="flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface text-accent">
                  <Globe size={22} strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-primary">Languages</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skills[5].skills.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-l-2 border-accent/40 pl-6 lg:max-w-md">
                <p className="font-serif text-xl italic leading-[1.5] text-secondary">
                  &ldquo;Bridging hardware, firmware, and cloud into connected
                  engineering solutions.&rdquo;
                </p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                  Billy Shultan Al Hadiy
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section className="section-container pt-24 sm:pt-32">
        <SectionHeading
          index="03"
          title="Experience"
          right={
            <Link
              href="/resume"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              Full resume
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          }
        />

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[5px] top-0 w-px bg-line md:left-[6px]"
          />
          <div className="space-y-12">
            {experience.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.05}>
                <div className="relative pl-10 md:pl-16">
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-background md:h-[13px] md:w-[13px] ${
                      item.current
                        ? "bg-accent shadow-glow"
                        : "border-line-strong bg-surface"
                    }`}
                  />
                  <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                    <h3 className="font-serif text-3xl tracking-tight text-primary">
                      {item.role}
                    </h3>
                    {item.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                        <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
                        Current
                      </span>
                    )}
                  </div>
                  <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <p className="text-base font-medium text-accent-deep">
                      {item.company}
                    </p>
                    <p className="font-mono text-xs text-secondary">{item.period}</p>
                  </div>
                  <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {item.responsibilities.map((r, idx) => (
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
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
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
      </section>

      {/* CTA */}
      <section className="section-container pt-24 sm:pt-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-primary px-7 py-16 text-background shadow-ink-lg sm:px-14 sm:py-20 lg:px-20">
            <div
              aria-hidden="true"
              className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-accent/25 blur-[110px]"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-accent/15 blur-[100px]"
            />
            <div className="relative grid grid-cols-1 gap-14 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-background/50">
                  Contact
                </span>
                <h2 className="mt-5 font-serif text-5xl leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
                  Let&apos;s build something{" "}
                  <em className="text-accent-light">amazing</em> together.
                </h2>
                <p className="mt-8 max-w-xl text-base font-light leading-[1.8] text-background/70">
                  I&apos;m always open to discussing new projects,
                  collaborations, or opportunities across engineering, IoT, and
                  software development.
                </p>
                <p className="mt-3 max-w-xl text-base font-light leading-[1.8] text-background/70">
                  Currently focused on environmental monitoring and
                  AI-integrated systems.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-8">
                  {stats.map((s, i) => (
                    <div key={s.label} className="flex items-center gap-8">
                      {i > 0 && (
                        <span aria-hidden="true" className="hidden h-8 w-px bg-background/15 sm:block" />
                      )}
                      <div>
                        <span className="font-serif text-3xl leading-none text-background">
                          {s.value}
                        </span>
                        <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-background/50">
                          {s.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-11 flex flex-wrap items-center gap-7">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-medium text-primary transition-all duration-300 hover:bg-accent hover:text-background hover:shadow-glow active:translate-y-[1px]"
                  >
                    Let&apos;s Talk
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                  <a
                    href={`mailto:${contact.email}`}
                    className="link-underline font-mono text-sm text-background/75 transition-colors duration-300 hover:text-background"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
              <div className="hidden lg:col-span-4 lg:flex lg:items-end lg:justify-end">
                <div className="flex h-[240px] w-[200px] flex-col justify-between rounded-[24px] border border-background/15 bg-background/5 p-7 backdrop-blur-sm">
                  <p className="font-serif text-lg italic leading-[1.55] text-background/85">
                    &ldquo;Passionate about creating intelligent systems that
                    improve lives.&rdquo;
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-background/50">
                    Billy S<span className="text-accent-light">.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
