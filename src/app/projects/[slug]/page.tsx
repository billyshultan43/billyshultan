import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { getProject, projects } from "@/content/projects";
import { Reveal } from "@/components/reveal";
import { Gallery } from "@/components/gallery";
import { IotTelemetryWidget } from "@/components/iot-telemetry-widget";
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
      <div className="rounded-3xl border border-line bg-card p-8 sm:p-12 shadow-sm">
        <h2 className="font-serif text-2xl sm:text-3xl leading-tight text-primary">
          {title}
        </h2>
        <div className="mt-6 text-base sm:text-lg leading-relaxed text-secondary">
          {children}
        </div>
      </div>
    </Reveal>
  );
}

function MarkerList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm sm:text-base leading-relaxed rounded-2xl bg-surface/60 p-5 border border-line/60">
          <span
            aria-hidden="true"
            className="mt-2 h-2 w-2 shrink-0 bg-accent rounded-full"
          />
          <span className="text-secondary">{item}</span>
        </li>
      ))}
    </ul>
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
    <article className="pb-32">
      <div className="section-container pt-12">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-primary"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          All projects
        </Link>
      </div>

      <header className="section-container mt-10">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {project.category}
            </span>
            <span className="text-muted">/</span>
            <span className="font-mono text-xs text-muted">{project.year}</span>
          </div>
          <h1 className="mt-6 max-w-5xl font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.04] tracking-tight text-primary">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg sm:text-xl leading-relaxed text-secondary">
            {project.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-line">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-surface px-3.5 py-1.5 font-mono text-xs text-secondary border border-line/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </header>

      <Reveal delay={0.1}>
        <div className="section-container mt-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-line bg-card shadow-2xl">
            <Image
              src={project.gallery[0]}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1400px"
              className="object-cover"
            />
          </div>
        </div>
      </Reveal>

      <div className="section-container grid gap-16 py-24 lg:grid-cols-12 lg:gap-12 items-start">
        <div className="space-y-12 lg:col-span-8">
          <Section title="Overview">{project.overview}</Section>

          {project.slug === "vehicle-emission-fuzzy-mamdani" && (
            <IotTelemetryWidget />
          )}

          {project.problem && <Section title="Problem">{project.problem}</Section>}
          {project.solution && <Section title="Solution">{project.solution}</Section>}

          {project.architectureImage && (
            <Section title="Architecture">
              {project.architectureText && (
                <pre className="mb-8 overflow-x-auto rounded-2xl border border-line bg-surface/80 p-6 font-mono text-xs leading-relaxed text-primary shadow-inner">
                  {project.architectureText}
                </pre>
              )}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-card shadow-lg">
                <Image
                  src={project.architectureImage}
                  alt={`${project.title} architecture`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-contain p-4"
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
              <MarkerList items={project.contributions} />
            </Section>
          )}

          {project.challenges && (
            <Section title="Challenges">
              <ul className="space-y-4">
                {project.challenges.map((c) => (
                  <li key={c} className="flex gap-3 text-base leading-relaxed rounded-2xl bg-surface/60 p-5 border border-line/60 text-secondary">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-2 w-2 shrink-0 bg-accent rounded-full"
                    />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {project.lessons && (
            <Section title="Results & Lessons Learned">
              <MarkerList items={project.lessons} />
            </Section>
          )}

          {project.documents && project.documents.length > 0 && (
            <Section title="Documentation">
              <div className="flex flex-wrap gap-4">
                {project.documents.map((doc) => (
                  <a
                    key={doc.file}
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2 px-6 py-5")}
                  >
                    <Download size={16} /> {doc.label}
                  </a>
                ))}
              </div>
            </Section>
          )}
        </div>

        <aside className="space-y-10 lg:col-span-4 rounded-3xl border border-line bg-card p-8 lg:sticky lg:top-28 shadow-sm">
          {project.role && (
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Role</span>
              <p className="mt-3 text-base font-medium text-primary leading-relaxed">
                {project.role}
              </p>
            </div>
          )}

          {project.hardware && (
            <div className="border-t border-line pt-6">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Hardware</span>
              <ul className="mt-4 space-y-4">
                {project.hardware.map((h) => (
                  <li key={h.name} className="flex flex-col rounded-2xl bg-surface/50 p-4 border border-line/50">
                    <span className="font-mono text-xs font-medium text-primary">
                      {h.name}
                    </span>
                    <span className="mt-1 text-xs text-secondary">{h.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.software && (
            <div className="border-t border-line pt-6">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Software</span>
              <p className="mt-3 font-mono text-xs leading-loose text-secondary">
                {project.software.join(" / ")}
              </p>
            </div>
          )}

          {project.academic && (
            <div className="border-t border-line pt-6">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Context</span>
              <p className="mt-3 text-sm leading-relaxed text-secondary">
                {project.academic}
              </p>
            </div>
          )}
        </aside>
      </div>

      <nav className="section-container grid gap-6 border-t border-line pt-16 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex flex-col gap-2 rounded-3xl border border-line bg-card p-8 transition-all duration-300 hover:border-accent hover:shadow-lg"
          >
            <span className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider">
              <ArrowLeft size={14} /> Previous Project
            </span>
            <span className="mt-2 font-serif text-2xl leading-snug text-primary transition-colors duration-300 group-hover:text-accent">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-col items-end gap-2 rounded-3xl border border-line bg-card p-8 text-right transition-all duration-300 hover:border-accent hover:shadow-lg"
          >
            <span className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider">
              Next Project <ArrowRight size={14} />
            </span>
            <span className="mt-2 font-serif text-2xl leading-snug text-primary transition-colors duration-300 group-hover:text-accent">
              {next.title}
            </span>
          </Link>
        )}
      </nav>
    </article>
  );
}
