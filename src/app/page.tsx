import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { BentoProjects } from "@/components/bento-projects";
import { Reveal } from "@/components/reveal";
import { Hairline } from "@/components/hairline";
import { projects } from "@/content/projects";
import { experience } from "@/content/experience";
import { achievements } from "@/content/achievements";
import { profile } from "@/content/profile";
import { skills } from "@/content/skills";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* PROJECTS BENTO SECTION */}
      <section className="section-container section-padding border-t border-line">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <Reveal>
            <span className="label">Selected Works</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-primary">
              Engineering & IoT Systems.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary link-underline"
            >
              View all {projects.length} projects
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <BentoProjects projects={projects} />
      </section>

      {/* EDITORIAL ABOUT & EXPERTISE SECTION */}
      <section className="border-t border-line bg-surface/40 py-28 lg:py-36">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="label">Editorial Manifesto</span>
                <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-primary leading-tight">
                  Bridging hardware, firmware, and cloud.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-secondary">
                  {profile.summary}
                </p>
                <div className="mt-10">
                  <Link
                    href="/about"
                    className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                  >
                    Read full background
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 space-y-8">
              {skills.slice(0, 4).map((cat, i) => (
                <Reveal key={cat.name} delay={i * 0.05}>
                  <div className="border-t border-line pt-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-primary">
                        {cat.name}
                      </h3>
                      <span className="font-mono text-xs text-muted">
                        0{i + 1}
                      </span>
                    </div>
                    <p className="mt-3 font-mono text-[13px] leading-relaxed text-secondary">
                      {cat.skills.join(" / ")}
                    </p>
                  </div>
                </Reveal>
              ))}
              <Hairline />
            </div>
          </div>
        </div>
      </section>

      {/* MAGAZINE EXPERIENCE & ACHIEVEMENTS */}
      <section className="section-container section-padding border-t border-line">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="label">Career & Recognition</span>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-primary">
                Professional journey & awards.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-secondary">
                Over 2 years of rigorous field experience in instrumentation, environmental laboratory testing equipment, and connected embedded systems.
              </p>
              <div className="mt-10">
                <Link
                  href="/resume"
                  className={cn(buttonVariants({ size: "lg" }), "group")}
                >
                  View full resume
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-12">
            {experience.slice(0, 2).map((exp, i) => (
              <Reveal key={exp.id} delay={i * 0.06}>
                <div className="border-t border-line pt-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-serif text-2xl text-primary">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-xs text-accent">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-secondary">{exp.company}</p>
                  <p className="mt-4 text-sm leading-relaxed text-secondary line-clamp-2">
                    {exp.responsibilities[0]}
                  </p>
                </div>
              </Reveal>
            ))}

            {achievements.map((ach) => (
              <Reveal key={ach.id} delay={0.2}>
                <div className="border-t border-line pt-8 bg-card p-6 rounded-2xl border">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    {ach.date} — {ach.event}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl text-primary">
                    {ach.title}
                  </h3>
                  <p className="mt-2 text-sm text-secondary">
                    {ach.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LARGE PREMIUM CONTACT CTA */}
      <section className="border-t border-line bg-surface/60 py-28 lg:py-36 text-center">
        <div className="section-container max-w-4xl mx-auto">
          <Reveal>
            <span className="label">Ready to collaborate</span>
            <h2 className="mt-4 font-serif text-4xl sm:text-6xl lg:text-7xl tracking-tight text-primary leading-[1.05]">
              Let&apos;s build connected engineering solutions.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
              Available for engineering consulting, IoT system development, and collaborative projects.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "group text-base px-8 py-6")}
              >
                Get in touch
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href={profile.cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "text-base px-8 py-6")}
              >
                Download CV
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
