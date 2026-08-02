"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/lib/types";

export function BentoProjects({ projects }: { projects: Project[] }) {
  // Take top 3 featured projects
  const featured = projects.slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {featured.map((project, index) => (
        <Reveal key={project.slug} delay={index * 0.08} className="flex">
          <Link
            href={`/projects/${project.slug}`}
            className="group relative flex flex-col justify-between w-full overflow-hidden rounded-3xl border border-line bg-card p-8 transition-all duration-500 hover:border-line-strong hover:shadow-2xl"
          >
            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-secondary border border-line/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Thumbnail Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line/60 bg-surface mb-6">
                <Image
                  src={project.gallery[0]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Title & Description */}
              <h3 className="font-serif text-2xl font-normal leading-snug text-primary transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary line-clamp-3">
                {project.summary}
              </p>
            </div>

            {/* Bottom link */}
            <div className="mt-8 flex items-center justify-between pt-6 border-t border-line/60">
              <span className="text-xs font-mono text-secondary uppercase tracking-wider">{project.year}</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary transition-transform group-hover:translate-x-1">
                View Case Study <ArrowUpRight size={14} className="text-accent" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
