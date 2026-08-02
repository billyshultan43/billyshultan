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

function Section({
  index,
  title,
  children,
}: {
  index?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="border-t border-line pt-10">
        <div className="mb-8 flex items-baseline gap-4">
          {index && (
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
              {index}
            </span>
          )}
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-primary sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="text-base font-light leading-[1.85] text-secondary sm:text-lg">
          {children}
        </div>
      </div>
    </Reveal>
  );
}

function MarkerList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 rounded-2xl border border-line bg-card p-5 text-sm leading-relaxed transition-colors duration-300 hover:border-accent/40 sm:text-base"
        >
          <span
            aria-hidden="true"
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
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
    <article className="pb-28">
      <div className="section-container pt-8">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm text-secondary transition-colors duration-300 hover:text-primary"
        >
          <ArrowLeft
            size={15}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          All projects
        </Link>
      </div>

      <header className="section-container mt-12">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              {project.category}
            </span>
            <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-secondary">
              {project.year}
            </span>
          </div>
          <h1 className="mt-6 max-w-5xl font-serif text-4xl font-medium leading-[1.04] tracking-tight text-primary sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg font-light leading-[1.75] text-secondary sm:text-xl">
            {project.summary}
          </p>
          <div className="mt-9 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </header>

      <Reveal delay={0.1}>
        <div className="section-container mt-14">
          <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-[32px] border border-line bg-card shadow-ink-lg">
            <Image
              src={project.gallery[0]}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1400px"
              className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-secondary">
              {project.title}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Fig. 01 &middot; {project.year}
            </p>
          </div>
        </div>
      </Reveal>

      <div className="section-container mt-20 grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-16 lg:col-span-8">
          <Section index="01" title="Overview">
            {project.overview}
          </Section>

          {project.slug === "vehicle-emission-fuzzy-mamdani" && (
            <Reveal>
              <IotTelemetryWidget />
            </Reveal>
          )}

          {project.problem && <Section index="02" title="Problem">{project.problem}</Section>}
          {project.solution && <Section index="03" title="Solution">{project.solution}</Section>}

          {project.architectureImage && (
            <Section index="04" title="Architecture">
              {project.architectureText && (
                <pre className="mb-8 overflow-x-auto rounded-2xl border border-line bg-surface/70 p-6 font-mono text-xs leading-relaxed text-primary shadow-inner">
                  {project.architectureText}
                </pre>
              )}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-card shadow-soft">
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
            <Section index="05" title="Gallery">
              <Gallery images={project.gallery} alt={project.title} />
            </Section>
          )}

          {project.contributions && (
            <Section index="06" title="My Contributions">
              <MarkerList items={project.contributions} />
            </Section>
          )}

          {project.challenges && (
            <Section index="07" title="Challenges">
              <ul className="space-y-3">
                {project.challenges.map((c) => (
                  <li
                    key={c}
                    className="flex gap-3 rounded-2xl border border-line bg-card p-5 text-base leading-relaxed text-secondary"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {project.lessons && (
            <Section index="08" title="Results & Lessons Learned">
              <MarkerList items={project.lessons} />
            </Section>
          )}

          {project.documents && project.documents.length > 0 && (
            <Section index="09" title="Documentation">
              <div className="flex flex-wrap gap-4">
                {project.documents.map((doc) => (
                  <a
                    key={doc.file}
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2 px-7")}
                  >
                    <Download size={15} /> {doc.label}
                  </a>
                ))}
              </div>
            </Section>
          )}
        </div>

        <aside className="space-y-10 lg:col-span-4">
          <Reveal delay={0.05}>
            <div className="card-base sticky top-28 p-8 shadow-soft">
              {project.role && (
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                    Role
                  </span>
                  <p className="mt-3 text-base font-medium leading-relaxed text-primary">
                    {project.role}
                  </p>
                </div>
              )}

              {project.hardware && (
                <div className="mt-7 border-t border-line pt-7">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                    Hardware
                  </span>
                  <ul className="mt-4 space-y-3">
                    {project.hardware.map((h) => (
                      <li
                        key={h.name}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-surface/50 p-4 transition-colors duration-300 hover:border-accent/40"
                      >
                        <div>
                          <p className="text-sm font-medium text-primary">{h.name}</p>
                          <p className="mt-0.5 text-xs text-secondary">{h.description}</p>
                        </div>
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.software && (
                <div className="mt-7 border-t border-line pt-7">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                    Software
                  </span>
                  <p className="mt-3 font-mono text-xs leading-loose text-secondary">
                    {project.software.join(" / ")}
                  </p>
                </div>
              )}

              {project.academic && (
                <div className="mt-7 border-t border-line pt-7">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                    Context
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-secondary">
                    {project.academic}
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </aside>
      </div>

      <nav className="section-container mt-24 grid gap-4 border-t border-line pt-12 sm:grid-cols-2">
        {prev ? (
          <Reveal>
            <Link
              href={`/projects/${prev.slug}`}
              className="card-base card-hover group flex h-full flex-col gap-3 p-8"
            >
              <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                <ArrowLeft size={14} /> Previous Project
              </span>
              <span className="mt-2 font-serif text-2xl leading-snug text-primary transition-colors duration-300 group-hover:text-accent-deep">
                {prev.title}
              </span>
            </Link>
          </Reveal>
        ) : (
          <span />
        )}
        {next && (
          <Reveal delay={0.05}>
            <Link
              href={`/projects/${next.slug}`}
              className="card-base card-hover group flex h-full flex-col items-end gap-3 p-8 text-right"
            >
              <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                Next Project <ArrowRight size={14} />
              </span>
              <span className="mt-2 font-serif text-2xl leading-snug text-primary transition-colors duration-300 group-hover:text-accent-deep">
                {next.title}
              </span>
            </Link>
          </Reveal>
        )}
      </nav>
    </article>
  );
}
