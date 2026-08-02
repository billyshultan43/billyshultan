"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Marquee } from "@/components/marquee";
import { profile } from "@/content/profile";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

const infoBlocks = [
  { label: "Based in", value: "Jakarta, ID", detail: "Jakarta Barat, DKI Jakarta" },
  { label: "Experience", value: "2+ Years", detail: "Instrumentation & IoT" },
  { label: "Focus", value: "IoT · AI", detail: "Embedded · Full Stack" },
];

const chips = [
  { label: "IoT", className: "left-[-14px] top-8" },
  { label: "Embedded Systems", className: "right-[-8px] top-16" },
  { label: "AI Integration", className: "bottom-20 left-[-18px]" },
  { label: "Env. Monitoring", className: "right-[-10px] bottom-6" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <>
      <section className="section-container relative pb-12 pt-12 lg:pt-16">
        <div
          aria-hidden="true"
          className="paper-grid pointer-events-none absolute inset-0 -z-10"
        />
        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? false : "hidden"}
          animate="visible"
          className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8"
        >
          {/* LEFT — role label, huge name, description, CTAs */}
          <div className="lg:col-span-6">
            <motion.div variants={item}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-secondary">
                  <span className="eyebrow-dot animate-pulse-dot" aria-hidden="true" />
                  Electrical Engineer
                </span>
                <span aria-hidden="true" className="hidden h-3 w-px bg-line-strong sm:block" />
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary">
                  {profile.location}
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-7 font-serif text-[clamp(48px,6.4vw,82px)] font-medium leading-[1.02] tracking-tight text-primary"
            >
              Billy Shultan
              <br />
              <em className="font-semibold text-accent">Al&nbsp;Hadiy</em>
              <span className="text-accent">.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-[540px] text-[15px] font-light leading-[1.75] text-secondary sm:text-base"
            >
              {profile.heroSummary}
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-7">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-background transition-all duration-300 hover:bg-accent hover:shadow-glow active:translate-y-[1px]"
              >
                View Work
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/about"
                className="group link-underline inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                About Me
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </div>

          {/* MIDDLE — small information blocks */}
          <div className="flex flex-row gap-3 lg:col-span-2 lg:flex-col lg:gap-4">
            {infoBlocks.map((block, i) => (
              <motion.div
                key={block.label}
                variants={item}
                className="card-base flex flex-1 flex-col justify-between p-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-soft lg:min-h-[118px]"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-secondary">
                  {block.label}
                </span>
                <div className="mt-4">
                  <p className="font-serif text-lg leading-tight text-primary">{block.value}</p>
                  <p className="mt-1 font-mono text-[10px] leading-relaxed text-muted">
                    {block.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — large portrait card */}
          <motion.div variants={item} className="lg:col-span-4">
            <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -right-5 -top-5 h-40 w-40 rounded-full bg-accent/15 blur-[70px]"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[36px] border border-accent/35"
              />
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[36px] bg-surface shadow-ink-lg ring-1 ring-line">
                <Image
                  src={profile.profileImage}
                  alt={profile.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 36vw"
                  className="object-cover object-top transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-primary/40 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <p className="font-serif text-xl text-background">{profile.name}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-background/60">
                      {profile.role}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-background/25 text-background/70"
                  >
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
              {chips.map((chip) => (
                <span
                  key={chip.label}
                  className={`glass absolute hidden rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-primary shadow-soft animate-float sm:block ${chip.className}`}
                  style={{ animationDelay: `${chips.indexOf(chip) * 0.8}s` }}
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Marquee items={profile.roles} />
    </>
  );
}
