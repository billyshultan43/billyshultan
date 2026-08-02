import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Code2, Layers, Cpu, Wrench, Sparkles, Globe, Cloud, Quote } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { contact } from "@/content/social";
import { skills } from "@/content/skills";
import { experience } from "@/content/experience";

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

const iconMap = {
  code: Code2,
  layers: Layers,
  cpu: Cpu,
  wrench: Wrench,
  sparkles: Sparkles,
  globe: Globe,
} as const;

export default function HomePage() {
  const currentRole = experience[0];

  return (
    <>
      {/* ============================ BENTO GRID ============================ */}
      <section className="section-container pt-14 sm:pt-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* EXPERIENCE — dark, tall */}
          <Reveal variant="scale" className="md:col-span-7 md:row-span-2">
            <div className="relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-[24px] bg-primary p-8 text-background shadow-ink-lg sm:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/25 blur-[80px]"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-accent/10 blur-[70px]"
              />
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-background/50">
                  Experience &middot; Since 2021
                </span>
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-accent-light/90"
                />
              </div>
              <div className="relative mt-auto">
                <span className="font-serif text-[92px] font-medium leading-[0.9] tracking-tight text-background">
                  2<span className="text-accent-light">+</span>
                </span>
                <h3 className="mt-3 font-serif text-3xl leading-tight text-background">
                  Years of Experience
                </h3>
                <p className="mt-4 max-w-md text-sm font-light leading-[1.75] text-background/65">
                  Development, assembly, and maintenance of environmental
                  laboratory testing equipment — from the bench to the cloud.
                </p>
                <div className="mt-8 rounded-[20px] border border-background/10 bg-background/5 p-6 backdrop-blur-sm">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-background/50">
                    Currently
                  </p>
                  <p className="mt-2 font-serif text-xl text-background">
                    {currentRole.role}
                  </p>
                  <p className="mt-1 text-sm font-medium text-accent-light">
                    {currentRole.company}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-background/55">
                    {currentRole.period}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {currentRole.technologies?.slice(0, 5).map((tech) => (
                    <span key={tech} className="chip-dark">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href="/resume"
                  className="group mt-9 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-background/75 transition-colors duration-300 hover:text-accent-light"
                >
                  Full resume
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* FEATURED PROJECTS — light */}
          <Reveal variant="scale" className="md:col-span-5" delay={0.05}>
            <Link
              href="/projects"
              className="card-base card-hover group flex h-full min-h-[280px] flex-col justify-between p-8"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
                  Featured Work
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-primary transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-background">
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
              <div className="flex-1 space-y-1">
                {projectCards.map((card) => (
                  <div
                    key={card.project.slug}
                    className="group/item flex items-baseline gap-4 rounded-2xl px-2 py-2.5 transition-colors duration-300 hover:bg-surface/70"
                  >
                    <span className="font-mono text-[10px] tracking-[0.2em] text-muted">
                      {card.project.year}
                    </span>
                    <span className="flex-1 font-serif text-xl leading-snug text-primary transition-colors duration-300 group-hover/item:text-accent-deep">
                      {card.project.title}
                    </span>
                    <ArrowUpRight
                      size={15}
                      className="text-line-strong transition-all duration-300 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-accent"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-line pt-4">
                <span className="font-mono text-[11px] text-secondary">
                  {projects.length} projects and counting
                </span>
                <span className="font-serif text-4xl italic leading-none text-line-strong transition-colors duration-500 group-hover:text-accent">
                  03
                </span>
              </div>
            </Link>
          </Reveal>

          {/* TESTIMONIAL — quote card */}
          <Reveal variant="scale" className="md:col-span-5" delay={0.1}>
            <div className="card-base relative flex h-full min-h-[240px] flex-col justify-between overflow-hidden p-8">
              <div
                aria-hidden="true"
                className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-accent/10 blur-[60px]"
              />
              <Quote
                aria-hidden="true"
                size={30}
                className="text-accent/70"
                strokeWidth={1.25}
              />
              <div className="relative">
                <p className="font-serif text-2xl italic leading-[1.45] text-primary">
                  &ldquo;{profile.tagline}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 font-serif text-sm font-semibold text-accent"
                  >
                    B
                  </span>
                  <div>
                    <p className="text-sm font-medium text-primary">{profile.name}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">
                      Electrical Engineer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* AI — violet accent card */}
          <Reveal variant="scale" className="md:col-span-5" delay={0.08}>
            <div className="relative flex h-full min-h-[240px] flex-col justify-between overflow-hidden rounded-[24px] bg-accent p-8 text-background shadow-glow">
              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-background/10 blur-[60px]"
              />
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-background/60">
                  Intelligence
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 bg-background/10">
                  <Sparkles size={18} strokeWidth={1.5} />
                </span>
              </div>
              <div className="relative">
                <span className="font-serif text-5xl font-medium leading-none">AI</span>
                <h3 className="mt-2 font-serif text-2xl text-background">
                  Integration &amp; Fuzzy Logic
                </h3>
                <p className="mt-3 max-w-xs text-sm font-light leading-relaxed text-background/70">
                  Turning raw sensor readings into intelligent classification
                  with Fuzzy Mamdani.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["AI Integration", "Fuzzy Logic", "ML-ready"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-background/20 bg-background/10 px-3.5 py-1.5 font-mono text-[11px] text-background/85"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* CLOUD — dark */}
          <Reveal variant="scale" className="md:col-span-4" delay={0.13}>
            <div className="relative flex h-full min-h-[240px] flex-col justify-between overflow-hidden rounded-[24px] bg-primary p-8 text-background shadow-soft">
              <div
                aria-hidden="true"
                className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-accent/20 blur-[60px]"
              />
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-background/50">
                  Infrastructure
                </span>
                <Cloud size={20} strokeWidth={1.5} className="text-accent-light" />
              </div>
              <div className="relative">
                <span className="font-serif text-4xl font-medium leading-none text-background">
                  Cloud
                </span>
                <h3 className="mt-2 font-serif text-xl text-background">
                  Real-time Solutions
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Blynk", "Supabase", "PostgreSQL"].map((tag) => (
                    <span key={tag} className="chip-dark">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* TECH — small */}
          <Reveal variant="scale" className="md:col-span-3" delay={0.16}>
            <Link
              href="/skills"
              className="card-base card-hover group flex h-full min-h-[240px] flex-col justify-between p-8"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-accent">
                Tech
              </span>
              <div>
                <span className="font-serif text-6xl font-medium leading-none text-primary transition-colors duration-300 group-hover:text-accent-deep">
                  15<span className="text-accent">+</span>
                </span>
                <h3 className="mt-2 font-serif text-xl text-primary">Technologies</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["PHP", "Laravel", "Flutter"].map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </Reveal>

          {/* EMBEDDED & IoT — wide */}
          <Reveal variant="scale" className="md:col-span-7" delay={0.1}>
            <div className="card-base card-hover flex h-full flex-col justify-between p-8 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex items-start gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface text-accent">
                  <Cpu size={22} strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-primary">Embedded &amp; IoT</h3>
                  <p className="mt-2 max-w-md text-sm font-light leading-relaxed text-secondary">
                    Microcontrollers, sensors, and wireless communication —
                    engineered end to end.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 sm:mt-0">
                {skills[2].skills.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* LANGUAGES */}
          <Reveal variant="scale" className="md:col-span-5" delay={0.14}>
            <div className="card-base card-hover flex h-full flex-col justify-between p-8">
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-surface text-accent">
                  <Globe size={22} strokeWidth={1.5} />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-secondary">
                  Languages
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {skills[5].skills.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ FEATURED PROJECTS ============================ */}
      <section className="section-container pt-24 sm:pt-32">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Editorial title on the left */}
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-serif text-5xl font-medium leading-[1.02] tracking-tight text-primary sm:text-6xl">
                Selected
                <br />
                <em className="text-accent">Work.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-7 max-w-xs text-[15px] font-light leading-[1.75] text-secondary">
                Explore selected projects that showcase my work across IoT,
                embedded systems, and full-stack development.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-9 flex flex-col items-start gap-4">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:bg-accent hover:shadow-glow active:translate-y-[1px]"
                >
                  All projects
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
                  {projects.length} projects and counting
                </span>
              </div>
            </Reveal>
          </div>

          {/* Project cards on the right */}
          <div className="space-y-4 lg:col-span-8">
            {projectCards.map((card, i) => (
              <Reveal key={card.project.slug} variant="up" delay={i * 0.06}>
                <Link
                  href={`/projects/${card.project.slug}`}
                  className="card-base card-hover group flex flex-col overflow-hidden sm:flex-row"
                >
                  <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-surface sm:aspect-auto sm:w-[38%]">
                    <Image
                      src={card.project.gallery[0]}
                      alt={card.project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 34vw"
                      className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute right-4 top-3 font-serif text-5xl italic leading-none text-background/70 transition-colors duration-500 group-hover:text-accent-light"
                    >
                      {card.index}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-secondary">
                        {card.project.year} &middot; {card.caption}
                      </p>
                      <h3 className="mt-3 font-serif text-2xl leading-[1.18] tracking-tight text-primary transition-colors duration-300 group-hover:text-accent-deep sm:text-3xl">
                        {card.project.title}
                      </h3>
                      <p className="mt-3 line-clamp-2 max-w-xl text-sm font-light leading-[1.75] text-secondary">
                        {card.project.summary}
                      </p>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {card.project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                        View case study
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-background">
                          <ArrowUpRight
                            size={14}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ TECH STACK BENTO ============================ */}
      <section className="section-container pt-24 sm:pt-32">
        <SectionHeading
          index="02"
          title="Capabilities &amp; tools."
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
              <Reveal
                key={cat.name}
                variant="scale"
                className={i === 0 ? "md:col-span-5" : "md:col-span-7"}
                delay={i * 0.05}
              >
                <div className="card-base card-hover flex h-full flex-col p-8">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-surface text-accent">
                      <Icon size={22} strokeWidth={1.5} />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-secondary">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-7 font-serif text-2xl text-primary">{cat.name}</h3>
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

          <Reveal variant="scale" className="md:col-span-4" delay={0.1}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] bg-primary p-8 text-background shadow-soft">
              <div
                aria-hidden="true"
                className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-accent/25 blur-[70px]"
              />
              <div className="relative flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-background/20 bg-background/10 text-accent-light">
                  <Cpu size={22} strokeWidth={1.5} />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-background/50">
                  03
                </span>
              </div>
              <div className="relative">
                <h3 className="mt-7 font-serif text-2xl text-background">Embedded &amp; IoT</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skills[2].skills.map((s) => (
                    <span key={s} className="chip-dark">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="scale" className="md:col-span-8" delay={0.08}>
            <div className="card-base card-hover flex h-full flex-col p-8">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-surface text-accent">
                  <Wrench size={22} strokeWidth={1.5} />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-secondary">
                  04
                </span>
              </div>
              <h3 className="mt-7 font-serif text-2xl text-primary">Engineering Expertise</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills[3].skills.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal variant="scale" className="md:col-span-4" delay={0.14}>
            <div className="card-base card-hover flex h-full flex-col p-8">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-surface text-accent">
                  <Sparkles size={22} strokeWidth={1.5} />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-secondary">
                  05
                </span>
              </div>
              <h3 className="mt-7 font-serif text-2xl text-primary">Domains</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills[4].skills.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal variant="scale" className="md:col-span-12" delay={0.1}>
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

      {/* ============================ EXPERIENCE ============================ */}
      <section className="section-container pt-24 sm:pt-32">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Timeline on the left */}
          <div className="lg:col-span-7">
            <SectionHeading
              index="03"
              title="Professional journey."
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
                        <h3 className="font-serif text-3xl font-medium tracking-tight text-primary">
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
          </div>

          {/* Image card on the right */}
          <div className="lg:col-span-5">
            <Reveal variant="left" delay={0.1} className="lg:sticky lg:top-28">
              <div className="card-base relative overflow-hidden p-6 shadow-soft sm:p-8">
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-[70px]"
                />
                <div className="group relative aspect-[4/3] overflow-hidden rounded-[20px] border border-line bg-surface">
                  <Image
                    src={profile.profileImage}
                    alt={profile.name}
                    fill
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover object-top transition-transform duration-[1.3s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-primary/45 to-transparent"
                  />
                  <span className="absolute bottom-5 left-6 font-serif text-2xl text-background">
                    {profile.name}
                  </span>
                </div>
                <div className="mt-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                        Currently
                      </p>
                      <p className="mt-2 font-serif text-2xl leading-tight text-primary">
                        {currentRole.role}
                      </p>
                      <p className="mt-1 text-sm font-medium text-accent-deep">
                        {currentRole.company}
                      </p>
                    </div>
                    <span className="font-mono text-[11px] text-secondary">
                      {currentRole.period}
                    </span>
                  </div>
                  <div className="my-6 h-px w-full bg-line" />
                  <div className="flex flex-wrap gap-2">
                    {currentRole.technologies?.slice(0, 6).map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/resume"
                    className="group mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:bg-accent hover:shadow-glow active:translate-y-[1px]"
                  >
                    Download CV
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================ CONTACT CTA ============================ */}
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
                <h2 className="mt-5 font-serif text-5xl font-medium leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
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
