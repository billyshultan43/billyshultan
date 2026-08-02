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
            <span className="label text-accent">Selected Works</span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-primary">
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
      <section className="border-t border-line bg-surface/40 py-32 lg:py-40">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="label text-accent">Editorial Manifesto</span>
                <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-primary leading-tight">
                  Bridging hardware, firmware, and cloud.
                </h2>
                <p className="mt-6 text-base sm:text-lg leading-relaxed text-secondary">
                  {profile.summary}
                </p>
                <div className="mt-10">
                  <Link
                    href="/about"
                    className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-8 py-6 text-base")}
                  >
                    Read full background
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 space-y-8">
              {skills.slice(0, 4).map((cat, i) => (
                <Reveal key={cat.name} delay={i * 0.05}>
                  <div className="border-t border-line pt-8">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-xl text-primary font-normal">
                        {cat.name}
                      </h3>
                      <span className="font-mono text-xs text-accent">
                        0{i + 1}
                      </span>
                    </div>
                    <p className="mt-4 font-mono text-xs leading-relaxed text-secondary">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="label text-accent">Career & Recognition</span>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-primary">
                Professional journey & awards.
              </h2>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-secondary">
                Over 2 years of rigorous field experience in instrumentation, environmental laboratory testing equipment, and connected embedded systems.
              </p>
              <div className="mt-10">
                <Link
                  href="/resume"
                  className={cn(buttonVariants({ size: "lg" }), "group px-8 py-6 text-base")}
                >
                  View full resume
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
                  <p className="mt-1 text-sm text-secondary font-medium">{exp.company}</p>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-secondary line-clamp-2">
                    {exp.responsibilities[0]}
                  </p>
                </div>
              </Reveal>
            ))}

            {achievements.map((ach) => (
              <Reveal key={ach.id} delay={0.2}>
                <div className="border border-line pt-8 bg-card p-8 rounded-3xl shadow-sm">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    {ach.date} — {ach.event}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl text-primary font-normal">
                    {ach.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-secondary leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LARGE PREMIUM CONTACT CTA */}
      <section className="border-t border-line bg-surface/60 py-32 lg:py-40 text-center">
        <div className="section-container max-w-4xl mx-auto">
          <Reveal>
            <span className="label text-accent">Ready to collaborate</span>
            <h2 className="mt-4 font-serif text-4xl sm:text-6xl lg:text-7xl tracking-tight text-primary leading-[1.05]">
              Let&apos;s build connected engineering solutions.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
              Available for engineering consulting, IoT system development, and collaborative projects.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "group text-base px-10 py-7")}
              >
                Get in touch
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href={profile.cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "text-base px-10 py-7")}
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
