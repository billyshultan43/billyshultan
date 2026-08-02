"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

const categoryLabels: Record<string, string> = {
  "IoT / Environmental Monitoring": "Environmental",
  "Web Application / Full Stack": "Web / Full Stack",
  "IoT / AI / Embedded Systems": "IoT & AI",
  "IoT / AI / Smart Home": "Smart Home",
};

function filterLabel(project: Project) {
  return categoryLabels[project.category] ?? project.category;
}

function CardSizes({ count, index }: { count: number; index: number }) {
  if (count === 1) return "lg:col-span-12";
  if (count === 2) return "lg:col-span-6";
  if (count === 3)
    return index === 0
      ? "lg:col-span-8"
      : index === 1
        ? "lg:col-span-4"
        : "lg:col-span-12";
  return index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5";
}

function ProjectCard({
  project,
  index,
  featured,
  wide,
}: {
  project: Project;
  index: number;
  featured?: boolean;
  wide?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[28px] border border-line bg-card shadow-soft transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-line-strong hover:shadow-lift",
        featured && "lg:min-h-[560px]"
      )}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden bg-surface",
          wide ? "aspect-[21/9]" : "aspect-[16/10]"
        )}
      >
        <Image
          src={project.gallery[0]}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="absolute left-5 top-5 flex items-center gap-3">
          <span className="rounded-full bg-background/80 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-primary backdrop-blur-sm">
            {project.year}
          </span>
          {featured && (
            <span className="rounded-full bg-accent px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-background">
              Featured
            </span>
          )}
        </div>
        <span className="absolute right-6 top-4 font-serif text-5xl italic leading-none text-primary/10 transition-colors duration-500 group-hover:text-accent/25">
          0{index + 1}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            {project.category}
          </p>
          <h3
            className={cn(
              "mt-3 font-serif tracking-tight text-primary transition-colors duration-300 group-hover:text-accent-deep",
              featured ? "text-3xl leading-[1.15] sm:text-4xl" : "text-2xl leading-[1.2]"
            )}
          >
            {project.title}
          </h3>
          <p className="mt-4 line-clamp-3 text-sm font-light leading-[1.75] text-secondary">
            {project.summary}
          </p>
        </div>
        <div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
              View case study
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-primary transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-background">
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function BentoProjects({ projects }: { projects: Project[] }) {
  const reduce = useReducedMotion();
  const [filter, setFilter] = React.useState<string>("All");

  const filters = [
    "All",
    ...Array.from(new Set(projects.map((p) => filterLabel(p)))),
  ];

  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => filterLabel(p) === filter);

  return (
    <div>
      <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {filters.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={active}
                className={cn(
                  "relative rounded-full px-5 py-2.5 text-[13px] font-medium transition-colors duration-300",
                  active ? "text-primary" : "text-secondary hover:text-primary"
                )}
              >
                {active && !reduce && (
                  <motion.span
                    layoutId="project-filter"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-primary shadow-soft"
                    aria-hidden="true"
                  />
                )}
                {active && reduce && (
                  <span className="absolute inset-0 rounded-full bg-primary" aria-hidden="true" />
                )}
                <span
                  className={cn("relative z-10", active && "text-background")}
                >
                  {f}
                </span>
              </button>
            );
          })}
        </div>
        <p className="font-mono text-xs text-secondary">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
        </p>
      </div>

      <motion.div layout className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={CardSizes({ count: visible.length, index: i })}
            >
              <ProjectCard
                project={project}
                index={i}
                featured={visible.length >= 3 && i === 0}
                wide={visible.length === 3 && i === 2}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
