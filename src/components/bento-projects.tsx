"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/lib/types";

export function BentoProjects({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
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
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-card p-8 sm:p-12 transition-all duration-500 hover:border-line-strong hover:shadow-2xl"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    {project.year} — {project.category}
                  </span>
                  <h3 className="mt-3 font-serif text-3xl sm:text-4xl font-normal leading-tight text-primary transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-line bg-background transition-transform duration-300 group-hover:scale-110 group-hover:border-accent group-hover:text-accent shadow-sm">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <p className="mt-6 line-clamp-2 text-base leading-relaxed text-secondary max-w-xl">
                {project.summary}
              </p>

              <div
                className={`relative mt-8 w-full overflow-hidden rounded-2xl border border-line/60 bg-surface ${imageHeight}`}
              >
                <Image
                  src={project.gallery[0]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="mt-8 flex flex-wrap gap-2.5 pt-6 border-t border-line/60">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-surface px-3 py-1.5 font-mono text-xs text-secondary border border-line/50"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="rounded-lg bg-surface px-3 py-1.5 font-mono text-xs text-muted border border-line/30">
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
