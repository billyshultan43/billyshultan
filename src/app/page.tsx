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

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <FeaturedProjectCard project={first} />
          </div>
          {rest.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      <section className="section-container section-padding">
        <SectionHeading eyebrow="Experience" title="Where I&apos;ve worked" className="mb-10" />
        <Reveal>
          <Card className="divide-y divide-line/50">
            {experience.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-1 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent shadow-sm">
                    <Briefcase size={16} />
                  </span>
                  <div>
                    <p className="font-medium text-primary">{item.role}</p>
                    <p className="text-sm text-secondary">{item.company}</p>
                  </div>
                </div>
                <div className="mt-1 sm:mt-0">
                  <p className="text-sm text-secondary sm:text-right sm:max-w-md">
                    {item.responsibilities[0]}
                  </p>
                  <p className="mt-1.5 text-xs font-medium text-accent/80">{item.period}</p>
                </div>
              </div>
            ))}
          </Card>
        </Reveal>
      </section>

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
              <Card className="h-full p-5">
                <div className="flex items-center gap-2.5">
                  <Code2 size={16} className="text-accent" />
                  <h3 className="text-sm font-semibold text-primary">{cat.name}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-container section-padding">
        <Reveal>
          <Card className="overflow-hidden border-accent/10">
            <div className="relative px-8 py-16 text-center sm:px-16 sm:py-20">
              <div className="absolute inset-0 -z-10 bg-radial-glow" />
              <h2 className="font-serif text-3xl font-normal text-primary sm:text-4xl">
                Let&apos;s build something solid
              </h2>
              <p className="mx-auto mt-4 max-w-md text-secondary">
                Reach out for engineering, IoT, or full stack opportunities.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
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
