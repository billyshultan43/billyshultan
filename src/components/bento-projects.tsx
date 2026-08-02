"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/lib/types";

export function BentoProjects({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {projects.map((project, index) => {
        const isFeatured = index === 0;
        const colSpan = isFeatured
          ? "md:col-span-12 lg:col-span-8"
          : index === 1
          ? "md:col-span-6 lg:col-span-4"
          : index === 2
          ? "md:col-span-6 lg:col-span-5"
          : "md:col-span-12 lg:col-span-7";
        const imageHeight = isFeatured
          ? "aspect-[16/10] lg:aspect-[16/9]"
          : "aspect-[16/11]";

        return (
          <Reveal key={project.slug} className={colSpan} delay={index * 0.08}>
            <Link
              href={`/projects/${project.slug}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-card p-8 sm:p-10 transition-all duration-500 hover:border-line-strong hover:shadow-xl hover:shadow-primary/[0.03]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-secondary">
                    {project.year} — {project.category}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-normal leading-tight text-primary transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-background transition-transform duration-300 group-hover:scale-105 group-hover:border-accent group-hover:text-accent">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-secondary max-w-xl">
                {project.summary}
              </p>

              <div
                className={`relative mt-8 w-full overflow-hidden rounded-xl border border-line/60 bg-surface ${imageHeight}`}
              >
                <Image
                  src={project.gallery[0]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-line/60">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-surface px-2.5 py-1 font-mono text-[11px] text-secondary"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="rounded-md bg-surface px-2.5 py-1 font-mono text-[11px] text-muted">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
