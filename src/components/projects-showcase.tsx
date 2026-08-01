"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";

export function ProjectsShowcase() {
  const [first, ...rest] = projects;
  const [active, setActive] = React.useState<number | null>(null);
  const reduce = useReducedMotion();
  const preview = active !== null ? rest[active] : null;

  return (
    <section className="section-container section-padding">
      <h2 className="font-serif text-4xl tracking-tight text-primary lg:text-5xl">
        Selected Work
      </h2>

      <Link href={`/projects/${first.slug}`} className="group mt-16 block">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="relative aspect-[4/3] overflow-hidden border border-line lg:col-span-7 lg:aspect-auto">
            <div className="absolute inset-0">
              <Image
                src={first.gallery[0]}
                alt={first.title}
                fill
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                {first.category} / {first.year}
              </p>
              <h3 className="mt-6 font-serif text-3xl leading-tight text-primary lg:text-4xl">
                {first.title}
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-secondary lg:max-w-md">
                {first.summary}
              </p>
            </div>
            <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                {first.role}
              </p>
              <ArrowUpRight
                size={22}
                className="text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>
      </Link>

      <div className="relative mt-24">
        <div className="lg:pr-[30%]">
          {rest.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className="group grid grid-cols-1 gap-2 border-t border-line py-8 transition-colors duration-300 hover:bg-surface/60 sm:grid-cols-12 sm:items-baseline sm:gap-6"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted sm:col-span-2">
                {project.year}
              </p>
              <h3 className="font-serif text-2xl leading-tight text-primary transition-all duration-300 group-hover:italic group-hover:text-accent sm:col-span-7 lg:text-3xl">
                {project.title}
              </h3>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted sm:col-span-3 sm:text-right">
                {project.category}
              </p>
            </Link>
          ))}
        </div>

        <div className="pointer-events-none absolute right-0 top-0 hidden w-[24%] lg:block">
          <div className="sticky top-28 overflow-hidden border border-line bg-surface">
            <div className="relative aspect-[4/3]">
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
          </div>
        </div>
      </div>
    </section>
  );
}
