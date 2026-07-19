import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Download, Github, ExternalLink, User, Cpu, Wrench, Code2, Check } from "lucide-react";
import { getProject, projects } from "@/content/projects";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gallery } from "@/components/gallery";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.summary };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <div>
        <h2 className="text-xl font-semibold text-primary">{title}</h2>
        <div className="mt-3 text-sm leading-relaxed text-secondary">{children}</div>
      </div>
    </Reveal>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  if (!project) notFound();

  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <article className="pt-16">
      <div className="section-container">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 pt-8 text-sm text-secondary transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} /> All projects
        </Link>
      </div>

      <header className="section-container mt-6">
        <Reveal>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line shadow-glass">
            <img
              src={project.gallery[0]}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>
          <div className="mt-8">
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-accent/60">
              {project.category} &middot; {project.year}
            </span>
            <h1 className="mt-3 max-w-4xl font-serif text-3xl font-normal leading-tight text-primary sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-secondary">
              {project.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
        </Reveal>
      </header>

      <div className="section-container grid gap-12 py-16 lg:grid-cols-3">
        <div className="space-y-12 lg:col-span-2">
          <Section title="Overview">{project.overview}</Section>

          {project.problem && <Section title="Problem">{project.problem}</Section>}
          {project.solution && <Section title="Solution">{project.solution}</Section>}

          {project.architectureImage && (
            <Section title="Architecture">
              {project.architectureText && (
                <pre className="mb-5 overflow-x-auto rounded-xl border border-line bg-white/[0.02] p-4 text-xs leading-relaxed text-accent/80">
                  {project.architectureText}
                </pre>
              )}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-line shadow-glass">
                <img
                  src={project.architectureImage}
                  alt={`${project.title} architecture`}
                  className="h-full w-full object-contain"
                />
              </div>
            </Section>
          )}

          {project.gallery.length > 0 && (
            <Section title="Gallery">
              <Gallery images={project.gallery} alt={project.title} />
            </Section>
          )}

          {project.contributions && (
            <Section title="My Contributions">
              <ul className="grid gap-2 sm:grid-cols-2">
                {project.contributions.map((c) => (
                  <li key={c} className="flex gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent/70" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {project.challenges && (
            <Section title="Challenges">
              <ul className="space-y-2">
                {project.challenges.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {project.lessons && (
            <Section title="Results & Lessons Learned">
              <ul className="space-y-2">
                {project.lessons.map((l) => (
                  <li key={l} className="flex gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent/70" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {project.documents && project.documents.length > 0 && (
            <Section title="Documentation">
              <div className="flex flex-wrap gap-3">
                {project.documents.map((doc) => (
                  <a
                    key={doc.file}
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "rounded-full"
                    )}
                  >
                    <Download size={15} /> {doc.label}
                  </a>
                ))}
              </div>
            </Section>
          )}
        </div>

        <aside className="space-y-5">
          {project.role && (
            <Card className="p-5">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-primary">
                <User size={16} className="text-accent/70" /> Role
              </h3>
              <p className="mt-2 text-sm text-secondary">{project.role}</p>
            </Card>
          )}

          <Card className="p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Code2 size={16} className="text-accent/70" /> Technologies
            </h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </Card>

          {project.hardware && (
            <Card className="p-5">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Cpu size={16} className="text-accent/70" /> Hardware
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {project.hardware.map((h) => (
                  <li key={h.name}>
                    <span className="font-medium text-primary">{h.name}</span>
                    <span className="text-secondary"> — {h.description}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {project.software && (
            <Card className="p-5">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Wrench size={16} className="text-accent/70" /> Software
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.software.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </Card>
          )}

          <div className="flex flex-col gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline" }), "w-full rounded-full")}
              >
                <Github size={16} /> GitHub Repository
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline" }), "w-full rounded-full")}
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
            <Link href="/projects" className={cn(buttonVariants({ variant: "ghost" }), "w-full rounded-full")}>
              <ArrowLeft size={16} /> Back to Projects
            </Link>
          </div>
        </aside>
      </div>

      <nav className="section-container grid gap-4 border-t border-line py-10 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex flex-col rounded-2xl border border-line bg-card/80 backdrop-blur-sm p-5 transition-colors hover:border-accent/25 hover:shadow-glow"
          >
            <span className="flex items-center gap-1.5 text-xs text-secondary">
              <ArrowLeft size={14} /> Previous
            </span>
            <span className="mt-1 font-medium text-primary group-hover:text-accent">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-col rounded-2xl border border-line bg-card/80 backdrop-blur-sm p-5 text-right transition-colors hover:border-accent/25 hover:shadow-glow sm:items-end"
          >
            <span className="flex items-center gap-1.5 text-xs text-secondary">
              Next <ArrowRight size={14} />
            </span>
            <span className="mt-1 font-medium text-primary group-hover:text-accent">{next.title}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
