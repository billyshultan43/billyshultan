"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Boxes,
  Braces,
  CircuitBoard,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Smartphone,
  Table,
  Terminal,
} from "lucide-react";
import { profile } from "@/content/profile";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const specialization = [
  "Environmental Monitoring",
  "Embedded Systems",
  "IoT Development",
  "AI Integration",
];

const coreSkills = [
  "ESP32",
  "STM32",
  "Python",
  "Laravel",
  "Flutter",
  "Supabase",
  "REST API",
  "Git",
];

const techStack = [
  { name: "ESP32", icon: Cpu },
  { name: "STM32", icon: CircuitBoard },
  { name: "Python", icon: Terminal },
  { name: "Laravel", icon: Layers },
  { name: "Flutter", icon: Smartphone },
  { name: "Supabase", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "PostgreSQL", icon: Table },
  { name: "REST API", icon: Braces },
  { name: "Filament", icon: Boxes },
];

const expertise = [
  "Environmental Monitoring",
  "Embedded Systems",
  "AI Integration",
  "System Integration",
];

const contacts = [
  { label: "Email", href: "mailto:billyshultan00@email.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/billyshultan" },
  { label: "GitHub", href: "https://github.com/billyshultan43" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-background text-primary">
      <div className="mx-auto flex w-full max-w-[1920px] flex-col px-6 sm:px-10 xl:px-[72px]">
        <div className="grid flex-1 grid-cols-1 gap-12 pb-10 pt-12 lg:min-h-[calc(80dvh-72px)] lg:grid-cols-[35fr_40fr_25fr] lg:gap-x-12 lg:pb-0 lg:pt-16">
          {/* ——— LEFT COLUMN ——— */}
          <div className="relative z-10 flex flex-col justify-between">
            <motion.div
              variants={container}
              initial={reduce ? false : "hidden"}
              animate="show"
            >
              <motion.p variants={item} className="label">
                Available for opportunities
              </motion.p>

              <motion.h1
                variants={item}
                className="mt-7 font-serif text-[clamp(50px,5.4vw,84px)] font-medium leading-[0.95] tracking-[-0.01em] text-primary"
              >
                Billy
                <br />
                Shultan
                <br />
                Al&nbsp;Hadiy
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-6 text-[15px] font-medium text-primary"
              >
                Electrical Engineer
              </motion.p>
              <motion.p
                variants={item}
                className="mt-1 text-[15px] text-secondary"
              >
                IoT&ensp;•&ensp;Embedded Systems&ensp;•&ensp;AI Integration
              </motion.p>

              <motion.p
                variants={item}
                className="mt-6 max-w-[440px] text-[15px] leading-[1.65] text-secondary"
              >
                {profile.heroSummary}
              </motion.p>

              <motion.div variants={item} className="mt-9 flex gap-12">
                <div>
                  <p className="label">Specialization</p>
                  <ul className="mt-5 space-y-[9px]">
                    {specialization.map((s) => (
                      <li
                        key={s}
                        className="flex items-baseline gap-3 text-[13px] text-secondary"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1 h-1.5 w-1.5 shrink-0 bg-accent"
                        />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="label">Experience</p>
                  <p className="mt-5 flex items-baseline gap-3">
                    <span className="font-serif text-[44px] font-medium leading-none text-primary">
                      2+
                    </span>
                    <span className="text-[13px] uppercase tracking-[0.3em] text-secondary">
                      Years
                    </span>
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={item}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12"
            >
              <p className="label">Core Skills</p>
              <div className="mt-5 flex max-w-[430px] flex-wrap gap-2.5">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="flex h-11 w-11 items-center justify-center border border-line text-[8.5px] font-normal uppercase tracking-[0.06em] text-secondary transition-colors duration-300 hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ——— CENTER COLUMN ——— */}
          <div className="relative flex items-center justify-center lg:min-h-0">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-[52%] -translate-y-1/2 rounded-full bg-[#EADCC6] sm:h-[400px] sm:w-[400px] xl:h-[460px] xl:w-[460px]"
            />
            <span
              aria-hidden="true"
              className="text-outline pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-[50%] -translate-y-[62%] select-none whitespace-nowrap font-serif text-[clamp(110px,13vw,200px)] font-medium uppercase leading-none tracking-[0.02em]"
            >
              Engineer
            </span>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 -rotate-2 py-6 xl:translate-x-[3%]"
            >
              <Image
                src={profile.profileImage}
                alt={profile.name}
                width={810}
                height={990}
                priority
                sizes="(max-width: 1024px) 70vw, 36vw"
                className="h-[min(400px,46vh)] w-auto object-contain lg:h-[min(470px,54vh)]"
              />
            </motion.div>
          </div>

          {/* ——— RIGHT COLUMN ——— */}
          <motion.div
            variants={container}
            initial={reduce ? false : "hidden"}
            animate="show"
            className="relative z-10 flex flex-col lg:pt-1"
          >
            <motion.div variants={item} className="border-t border-line pt-5">
              <p className="label">Current Role</p>
              <p className="mt-3 text-[13px] text-primary">Electrical Engineer</p>
              <p className="mt-1 text-[13px] text-secondary">
                Instrumentation &amp; IoT Development
              </p>
            </motion.div>

            <motion.div variants={item} className="mt-7 border-t border-line pt-5">
              <p className="label">Location</p>
              <p className="mt-3 text-[13px] text-primary">Indonesia</p>
            </motion.div>

            <motion.div variants={item} className="mt-7 border-t border-line pt-5">
              <p className="label">Expertise</p>
              <ul className="mt-3 space-y-[7px]">
                {expertise.map((e) => (
                  <li key={e} className="text-[13px] text-secondary">
                    {e}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={item} className="mt-7 border-t border-line pt-5">
              <p className="label">Contact</p>
              <ul className="mt-3 space-y-[7px]">
                {contacts.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        c.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="link-underline text-[13px] text-primary"
                    >
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* ——— BOTTOM ROW ——— */}
        <div className="flex flex-col gap-6 border-t border-line py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2.5">
            {techStack.map((tech) => {
              const Icon = tech.icon;
              return (
                <span
                  key={tech.name}
                  className="group flex h-12 w-12 flex-col items-center justify-center gap-[3px] border border-line text-secondary transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  <Icon size={16} strokeWidth={1.25} />
                  <span className="text-[7.5px] uppercase tracking-[0.06em]">
                    {tech.name}
                  </span>
                </span>
              );
            })}
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              href="/projects"
              className="group inline-flex h-10 items-center gap-2 border border-primary bg-primary px-5 text-[13px] tracking-wide text-background transition-colors duration-300 hover:border-accent hover:bg-accent"
            >
              View Projects
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
            <a
              href={profile.cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-10 items-center gap-2 border border-line px-5 text-[13px] tracking-wide text-primary transition-colors duration-300 hover:border-primary"
            >
              Download CV
              <ArrowDownRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
