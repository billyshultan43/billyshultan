import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { BentoMetrics } from "@/components/bento-metrics";
import { BentoProjects } from "@/components/bento-projects";
import { Reveal } from "@/components/reveal";
import { Hairline } from "@/components/hairline";
import { projects } from "@/content/projects";
import { experience } from "@/content/experience";
import { skills } from "@/content/skills";
import { profile } from "@/content/profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const techIconsGrid = [
  { name: "Arduino", category: "Hardware" },
  { name: "ESP32", category: "Embedded" },
  { name: "Flutter", category: "Mobile" },
  { name: "Dart", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "C++", category: "Firmware" },
  { name: "Supabase", category: "Database" },
  { name: "Firebase", category: "Cloud" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "Version" },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <BentoMetrics />

      {/* FEATURED PROJECTS SECTION */}
      <section className="section-container pb-28 lg:pb-36 border-t border-line pt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              Featured Projects
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-primary">
              Building solutions that make an impact.
            </h2>
            <p className="mt-3 text-base text-secondary">
              Explore selected projects that showcase my work.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary link-underline"
            >
              View all projects
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <BentoProjects projects={projects} />
      </section>

      {/* TECH STACK & PROFESSIONAL EXPERIENCE SECTION */}
      <section className="border-t border-line bg-surface/35 py-28 lg:py-36">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left: Tech Stack */}
            <div className="lg:col-span-4 space-y-8">
              <Reveal>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                  Tech Stack
                </span>
                <h2 className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-primary">
                  Tools & technologies I work with.
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="grid grid-cols-2 gap-4">
                  {techIconsGrid.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col justify-between rounded-2xl border border-line bg-card p-5 shadow-sm transition-all hover:border-accent"
                    >
                      <span className="font-mono text-[10px] text-secondary uppercase tracking-wider">{tech.category}</span>
                      <span className="mt-4 font-serif text-xl font-normal text-primary">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="pt-4">
                  <Link
                    href="/skills"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-primary link-underline"
                  >
                    View all technologies
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Center: Experience Timeline */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                      Experience
                    </span>
                    <h2 className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-primary">
                      My professional journey.
                    </h2>
                  </div>
                  <Link
                    href="/resume"
                    className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-primary link-underline"
                  >
                    View full experience <ArrowUpRight size={14} />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="space-y-6 pt-4">
                {experience.map((exp, i) => (
                  <div key={exp.id} className="relative pl-8 border-l border-line pb-8 last:pb-0">
                    <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
                    <span className="font-mono text-xs text-accent">{exp.period}</span>
                    <h3 className="mt-1 font-serif text-2xl text-primary font-normal">{exp.role}</h3>
                    <p className="mt-1 text-sm font-medium text-secondary">{exp.company}</p>
                    <p className="mt-3 text-sm text-secondary leading-relaxed line-clamp-2">
                      {exp.responsibilities[0]}
                    </p>
                  </div>
                ))}
              </Reveal>
            </div>

            {/* Right: Atmospheric Card */}
            <div className="lg:col-span-3">
              <Reveal delay={0.15}>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-line bg-primary text-background p-8 flex flex-col justify-end shadow-xl">
                  <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                      src="/assets/images/projects/vehicle-emission/System-Architecture.png"
                      alt="Atmospheric"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent z-0" />
                  <div className="relative z-10">
                    <p className="font-serif text-2xl sm:text-3xl italic leading-snug text-background">
                      Passionate about creating intelligent systems that improve lives.
                    </p>
                    <div className="mt-6 flex justify-end">
                      <Link
                        href="/contact"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-background text-primary transition-transform hover:scale-105"
                      >
                        <ArrowUpRight size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* LARGE PREMIUM CONTACT CTA */}
      <section className="border-t border-line bg-background py-28 lg:py-36">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center rounded-[36px] border border-line bg-card p-10 sm:p-16 shadow-2xl relative overflow-hidden">
            <div className="lg:col-span-6 space-y-6 z-10">
              <Reveal>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Ready to collaborate</span>
                <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-primary leading-[1.05]">
                  Let&apos;s build something <span className="italic font-normal text-accent">amazing</span> together.
                </h2>
                <p className="mt-6 text-base sm:text-lg text-secondary max-w-md leading-relaxed">
                  I&apos;m always open to discussing new projects, collaborations, or opportunities across engineering, IoT, and software development.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className={cn(buttonVariants({ size: "lg" }), "group rounded-full px-8 py-7 text-base gap-2")}
                  >
                    Get In Touch
                    <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line/60 shadow-lg z-10">
              <Image
                src="/assets/images/projects/vehicle-emission/WhatsApp-Image-2026-07-12-at-12.48.49.jpeg"
                alt="Engineering and Design"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
