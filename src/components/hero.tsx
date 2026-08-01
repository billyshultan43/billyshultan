"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const roles = [
  "Electrical Engineer",
  "IoT",
  "Embedded Systems",
  "AI Integration",
];

const specifications = [
  "Electrical Engineering",
  "Environmental Monitoring",
  "Instrumentation",
  "Embedded Development",
  "Cloud Integration",
  "AI Automation",
];

const coreSkills = [
  "ESP32",
  "STM32",
  "Embedded",
  "IoT",
  "Firmware",
  "Python",
  "Laravel",
  "Flutter",
];

const techStack = [
  { name: "ESP32", color: "#A98568" },
  { name: "Python", color: "#8F8B84" },
  { name: "Laravel", color: "#111111" },
  { name: "Supabase", color: "#E9E2D5" },
  { name: "Git", color: "#A98568" },
  { name: "PostgreSQL", color: "#8F8B84" },
  { name: "REST API", color: "#111111" },
  { name: "Filament", color: "#E9E2D5" },
];

const mainStack = ["ESP32", "STM32", "Laravel", "Flutter", "Supabase", "AI"];

const contacts = [
  { label: "Email", href: "mailto:billyshultan00@email.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/billyshultan" },
  { label: "Github", href: "https://github.com/billyshultan43" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background text-primary">
      <div className="mx-auto flex min-h-[calc(100dvh-72px)] w-full max-w-[1920px] flex-col px-6 pb-12 pt-14 sm:px-10 xl:px-[72px] xl:pb-14 xl:pt-[140px]">
        <div className="grid flex-1 grid-cols-1 gap-20 lg:grid-cols-[30fr_40fr_30fr] xl:gap-0">
          {/* ——— LEFT ZONE ——— */}
          <div className="relative z-10 flex flex-col justify-between">
            <motion.div
              variants={container}
              initial={reduce ? false : "hidden"}
              animate="show"
            >
              <motion.p variants={item} className="label">
                Available for work
              </motion.p>

              <motion.h1
                variants={item}
                className="mt-8 font-serif text-[clamp(56px,7vw,96px)] font-medium leading-[0.9] tracking-[-0.01em] text-primary"
              >
                Billy
                <br />
                Shultan
                <br />
                Al&nbsp;Hadiy
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-7 max-w-[420px] text-[18px] leading-snug text-secondary"
              >
                {roles.join("  /  ")}
              </motion.p>

              <motion.p
                variants={item}
                className="mt-7 max-w-[420px] text-[17px] leading-[1.55] text-secondary"
              >
                {profile.heroSummary}
              </motion.p>

              <motion.div variants={item} className="mt-10">
                <p className="label">Specifications</p>
                <ul className="mt-5 space-y-[10px]">
                  {specifications.map((s) => (
                    <li
                      key={s}
                      className="text-[13px] font-normal uppercase tracking-[0.18em] text-secondary"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={item} className="mt-10">
                <p className="label">Experience</p>
                <p className="mt-4 flex items-baseline gap-3">
                  <span className="font-serif text-[44px] font-medium leading-none text-primary">
                    2+
                  </span>
                  <span className="text-[13px] font-normal uppercase tracking-[0.35em] text-secondary">
                    Years
                  </span>
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={item}
              initial={reduce ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-16"
            >
              <p className="label">Core Skills</p>
              <div className="mt-5 grid max-w-[320px] grid-cols-4 gap-3">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="flex h-12 w-12 items-center justify-center border border-line-strong text-center text-[8.5px] font-normal uppercase tracking-[0.08em] text-secondary transition-colors duration-300 hover:border-primary hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ——— CENTER ZONE ——— */}
          <div className="relative flex flex-col items-center justify-between">
            <div className="relative flex w-full items-center justify-center xl:translate-x-[3%]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute h-[320px] w-[320px] rounded-full bg-[#B89B84] opacity-[0.18] blur-[120px] sm:h-[420px] sm:w-[420px] xl:h-[560px] xl:w-[560px]"
              />
              <span
                aria-hidden="true"
                className="text-outline pointer-events-none absolute left-1/2 top-[4%] z-0 -translate-x-[42%] select-none whitespace-nowrap font-serif text-[clamp(110px,15vw,220px)] font-medium uppercase leading-none tracking-[0.02em]"
              >
                Engineer
              </span>

              <motion.div
                animate={
                  reduce
                    ? undefined
                    : { y: [0, -12, 0] }
                }
                transition={
                  reduce
                    ? undefined
                    : { duration: 7, repeat: Infinity, ease: "easeInOut" }
                }
                className="relative z-10 mt-8 xl:mt-0"
              >
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.25,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="-rotate-3"
                >
                  <Image
                    src={profile.profileImage}
                    alt={profile.name}
                    width={810}
                    height={990}
                    priority
                    sizes="(max-width: 1024px) 70vw, 40vw"
                    className="h-[min(420px,48vh)] w-auto object-contain xl:h-[min(650px,62vh)] [filter:drop-shadow(0_44px_60px_rgba(17,17,17,0.16))]"
                  />
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              variants={item}
              initial={reduce ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-14 flex flex-col items-center xl:mt-0"
            >
              <p className="label">Tech Stack</p>
              <div className="mt-5 flex flex-wrap items-start justify-center gap-x-7 gap-y-5">
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="flex flex-col items-center gap-2"
                  >
                    <span
                      aria-hidden="true"
                      className="h-3.5 w-3.5 border border-line-strong"
                      style={{ backgroundColor: tech.color }}
                    />
                    <span className="text-[9px] font-normal uppercase tracking-[0.14em] text-secondary">
                      {tech.name}
                    </span>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ——— RIGHT ZONE ——— */}
          <div className="relative z-10 flex flex-col justify-between xl:items-end">
            <motion.div
              variants={container}
              initial={reduce ? false : "hidden"}
              animate="show"
              className="xl:text-right"
            >
              <motion.div variants={item}>
                <p className="label">Current Role</p>
                <p className="mt-3 text-[13px] font-normal text-primary">
                  Electrical Engineer
                </p>
              </motion.div>

              <motion.div variants={item} className="mt-8">
                <p className="label">Location</p>
                <p className="mt-3 text-[13px] font-normal text-primary">
                  Indonesia
                </p>
              </motion.div>

              <motion.div variants={item} className="mt-8">
                <p className="label">Main Stack</p>
                <ul className="mt-3 space-y-[7px]">
                  {mainStack.map((s) => (
                    <li key={s} className="text-[13px] font-normal text-primary">
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={item} className="mt-8">
                <p className="label">Contact</p>
                <ul className="mt-3 space-y-[7px]">
                  {contacts.map((c) => (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        target={
                          c.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          c.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="link-underline text-[13px] font-normal text-primary"
                      >
                        {c.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            <motion.div
              variants={item}
              initial={reduce ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-16 xl:mt-0 xl:text-right"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 font-serif text-4xl font-medium leading-none text-primary transition-colors duration-300 hover:text-accent sm:text-5xl"
              >
                View Projects
                <ArrowUpRight
                  size={28}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
              <a
                href={profile.cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 text-[13px] font-normal uppercase tracking-[0.2em] text-secondary transition-colors duration-300 hover:text-primary"
              >
                Download CV
                <ArrowDownRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
