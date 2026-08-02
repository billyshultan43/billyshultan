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
      <div>
        <h2 className="font-serif text-2xl leading-tight text-primary lg:text-3xl">
          {title}
        </h2>
        <div className="mt-6 max-w-[68ch] text-base leading-relaxed text-secondary">
          {children}
        </div>
      </div>
    </Reveal>
  );
}

function MarkerList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed">
          <span
            aria-hidden="true"
            className="mt-1.5 h-2.5 w-2.5 shrink-0 border border-accent/70"
          />
          <span>{item}</span>
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
    <article>
      <div className="section-container">
        <Link
          href="/projects"
          className="group mt-10 inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-primary"
        >
          <ArrowLeft
            size={15}
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
          />
          All projects
        </Link>
      </div>

      <header className="section-container mt-8">
        <Reveal>
          <p className="font-mono text-xs text-secondary">
            {project.category} / {project.year}
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-3xl leading-[1.08] tracking-tight text-primary sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-secondary">
            {project.summary}
          </p>
          <p className="mt-6 font-mono text-[11px] leading-loose text-muted">
            {project.technologies.join(" / ")}
          </p>
        </Reveal>
      </header>

      <Reveal delay={0.1}>
        <div className="section-container mt-12">
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-line bg-card">
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

      <div className="section-container grid gap-14 py-20 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-14 lg:col-span-8">
          <Section title="Overview">{project.overview}</Section>

          {project.slug === "vehicle-emission-fuzzy-mamdani" && (
            <IotTelemetryWidget />
          )}

          {project.problem && <Section title="Problem">{project.problem}</Section>}
          {project.solution && <Section title="Solution">{project.solution}</Section>}

          {project.architectureImage && (
            <Section title="Architecture">
              {project.architectureText && (
                <pre className="mb-6 overflow-x-auto border border-line bg-surface/60 p-5 font-mono text-[11px] leading-relaxed text-primary">
                  {project.architectureText}
                </pre>
              )}
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-line bg-card">
                <Image
                  src={project.architectureImage}
                  alt={`${project.title} architecture`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-contain"
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
              <ul className="space-y-3">
                {project.challenges.map((c) => (
                  <li key={c} className="flex gap-3 text-sm leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-2.5 w-2.5 shrink-0 border border-accent/70"
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
              <div className="flex flex-wrap gap-3">
                {project.documents.map((doc) => (
                  <a
                    key={doc.file}
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                  >
                    <Download size={14} /> {doc.label}
                  </a>
                ))}
              </div>
            </Section>
          )}
        </div>

        <aside className="space-y-10 lg:col-span-3 lg:col-start-10">
          {project.role && (
            <div className="border-t border-line pt-6">
              <h3 className="text-sm font-medium text-primary">Role</h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary">
                {project.role}
              </p>
            </div>
          )}

          {project.hardware && (
            <div className="border-t border-line pt-6">
              <h3 className="text-sm font-medium text-primary">Hardware</h3>
              <ul className="mt-4 space-y-2.5">
                {project.hardware.map((h) => (
                  <li key={h.name} className="flex flex-col">
                    <span className="font-mono text-[11px] text-primary">
                      {h.name}
                    </span>
                    <span className="text-xs text-secondary">{h.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.software && (
            <div className="border-t border-line pt-6">
              <h3 className="text-sm font-medium text-primary">Software</h3>
              <p className="mt-3 font-mono text-[11px] leading-loose text-secondary">
                {project.software.join(" / ")}
              </p>
            </div>
          )}

          {project.academic && (
            <div className="border-t border-line pt-6">
              <h3 className="text-sm font-medium text-primary">Context</h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary">
                {project.academic}
              </p>
            </div>
          )}
        </aside>
      </div>

      <nav className="section-container grid gap-4 border-t border-line py-12 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex flex-col gap-1 border-t border-line pt-6 transition-colors duration-300 hover:border-accent"
          >
            <span className="flex items-center gap-1.5 font-mono text-xs text-muted">
              <ArrowLeft size={13} /> Previous
            </span>
            <span className="mt-2 font-serif text-xl leading-snug text-primary transition-colors duration-300 group-hover:text-accent">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-col items-end gap-1 border-t border-line pt-6 text-right transition-colors duration-300 hover:border-accent"
          >
            <span className="flex items-center gap-1.5 font-mono text-xs text-muted">
              Next <ArrowRight size={13} />
            </span>
            <span className="mt-2 font-serif text-xl leading-snug text-primary transition-colors duration-300 group-hover:text-accent">
              {next.title}
            </span>
          </Link>
        )}
      </nav>
    </article>
  );
}
