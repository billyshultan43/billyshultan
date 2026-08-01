"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";

export function ProjectsIndex() {
  const [active, setActive] = React.useState<number | null>(null);
  const reduce = useReducedMotion();
  const preview = active !== null ? projects[active] : null;

  return (
    <section className="section-container section-padding pt-4">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className="group grid grid-cols-1 gap-3 border-t border-line py-10 transition-colors duration-300 hover:bg-surface/40 sm:grid-cols-12 sm:gap-6"
            >
              <p className="font-mono text-xs text-muted sm:col-span-3">
                {project.year}
              </p>
              <h2 className="font-serif text-2xl leading-tight text-primary transition-all duration-500 group-hover:italic group-hover:text-accent sm:col-span-6 lg:text-3xl">
                {project.title}
              </h2>
              <p className="flex items-start justify-between gap-4 font-mono text-xs text-muted sm:col-span-3 sm:flex-col sm:items-end sm:gap-3">
                {project.category}
                <ArrowUpRight
                  size={18}
                  className="text-primary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </p>
            </Link>
          ))}
          <div className="border-t border-line" />
        </div>

        <div className="pointer-events-none relative hidden lg:col-span-3 lg:block">
          <div className="sticky top-28">
            <div className="relative aspect-[4/3] overflow-hidden border border-line bg-card">
              <AnimatePresence mode="wait">
                {preview && (
                  <motion.div
                    key={preview.slug}
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={preview.gallery[0]}
                      alt={preview.title}
                      fill
                      sizes="24vw"
                      className="object-cover"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {preview && (
              <p className="mt-4 font-mono text-xs leading-relaxed text-muted">
                {preview.role}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
