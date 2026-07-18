import Link from "next/link";
import { ArrowRight, Mail, Linkedin, Briefcase, Code2 } from "lucide-react";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { FeaturedProjectCard } from "@/components/featured-project-card";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/content/projects";
import { experience } from "@/content/experience";
import { skills } from "@/content/skills";
import { socials } from "@/content/social";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const [first, ...rest] = projects;
  const contactLinks = socials.filter((s) => s.icon === "mail" || s.icon === "linkedin");

  return (
    <>
      <Hero />

      {/* 2. Featured Projects */}
      <section className="section-container section-padding">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured Projects"
            className="mb-0"
          />
          <Link href="/projects" className="hidden shrink-0 sm:block">
            <span className={cn(buttonVariants({ variant: "ghost" }), "rounded-full")}>
              All projects <ArrowRight size={16} />
            </span>
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="md:col-span-2">
            <FeaturedProjectCard project={first} />
          </div>
          {rest.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* 3. Experience (minimal) */}
      <section className="section-container section-padding">
        <SectionHeading eyebrow="Experience" title="Where I've worked" className="mb-10" />
        <Reveal>
          <Card className="divide-y divide-line p-2">
            {experience.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-1 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-accent">
                    <Briefcase size={16} />
                  </span>
                  <div>
                    <p className="font-medium text-white">{item.role}</p>
                    <p className="text-sm text-secondary">{item.company}</p>
                  </div>
                </div>
                <div className="mt-1 sm:mt-0">
                  <p className="text-sm text-secondary sm:text-right sm:max-w-md">
                    {item.responsibilities[0]}
                  </p>
                  <p className="mt-1 text-xs font-medium text-accent">{item.period}</p>
                </div>
              </div>
            ))}
          </Card>
        </Reveal>
      </section>

      {/* 4. Skills (grouped badges) */}
      <section className="section-container section-padding">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Expertise"
          description="Technologies, engineering expertise, and software tools I use to build IoT, embedded, and full-stack solutions."
          className="mb-10"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 0.05}>
              <Card className="h-full p-4">
                <div className="flex items-center gap-2.5">
                  <Code2 size={16} className="text-accent" />
                  <h3 className="text-sm font-semibold text-white">{cat.name}</h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. Contact */}
      <section className="section-container section-padding">
        <Reveal>
          <Card className="overflow-hidden">
            <div className="relative px-8 py-12 text-center sm:px-16 sm:py-16">
              <div className="absolute inset-0 -z-10 bg-radial-glow" />
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Let&apos;s build something solid
              </h2>
              <p className="mx-auto mt-4 max-w-md text-secondary">
                Reach out for engineering, IoT, or full stack opportunities.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {contactLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "min-w-[180px] rounded-full"
                    )}
                  >
                    {s.icon === "mail" ? <Mail size={18} /> : <Linkedin size={18} />}
                    {s.icon === "mail" ? "Email" : "LinkedIn"}
                  </a>
                ))}
              </div>
            </div>
          </Card>
        </Reveal>
      </section>
    </>
  );
}
