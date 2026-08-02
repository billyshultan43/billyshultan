"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BackgroundWord } from "@/components/background-word";
import { profile } from "@/content/profile";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const panelSpecialization = [
  "Environmental Monitoring",
  "Industrial IoT",
  "Embedded Systems",
  "AI Integration",
];

const services = [
  "Website Development",
  "IoT Dashboard Development",
  "Embedded Systems Development",
  "Technical Consulting",
];

const contacts = [
  { label: "Email", href: "mailto:billyshultan00@email.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/billyshultan" },
  { label: "GitHub", href: "https://github.com/billyshultan43" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-background text-primary overflow-hidden">
      <div className="mx-auto flex w-full max-w-[1920px] flex-col px-6 sm:px-10 xl:px-[72px]">
        <div className="grid flex-1 grid-cols-1 gap-16 pb-16 pt-16 lg:min-h-[calc(85dvh-80px)] lg:grid-cols-[42fr_33fr_25fr] lg:gap-x-12 lg:pb-0 lg:pt-24">
          {/* ——— LEFT COLUMN ——— */}
          <div className="relative z-10 flex flex-col justify-center pl-0 lg:pl-6">
            <motion.div
              variants={container}
              initial={reduce ? false : "hidden"}
              animate="show"
            >
              <motion.div variants={item} className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                <span className="label text-accent">Available for opportunities</span>
              </motion.div>

              <motion.h1
                variants={item}
                className="mt-6 font-serif text-[clamp(42px,4.5vw,68px)] font-normal leading-[0.92] tracking-[-0.02em] text-primary"
              >
                Billy
                <br />
                Shultan
                <br />
                Al&nbsp;Hadiy
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-4 text-base font-medium text-primary tracking-wide"
              >
                Electrical Engineer
              </motion.p>

              <motion.p
                variants={item}
                className="mt-4 max-w-[440px] text-base leading-[1.75] text-secondary"
              >
                Electrical Engineer specializing in Industrial IoT, Embedded
                Systems and AI Integration, building connected monitoring
                solutions from hardware to cloud.
              </motion.p>

              <motion.div variants={item} className="mt-8 grid max-w-[440px] grid-cols-3 border-t border-line pt-6">
                <div className="pr-6">
                  <p className="font-serif text-[34px] font-normal leading-none text-primary">
                    2+
                  </p>
                  <p className="mt-2 text-[10px] uppercase leading-[1.6] tracking-[0.22em] text-secondary">
                    Years
                    <br />
                    Experience
                  </p>
                </div>
                <div className="border-l border-line/60 px-6">
                  <p className="font-serif text-[34px] font-normal leading-none text-primary">
                    3
                  </p>
                  <p className="mt-2 text-[10px] uppercase leading-[1.6] tracking-[0.22em] text-secondary">
                    Featured
                    <br />
                    Projects
                  </p>
                </div>
                <div className="border-l border-line/60 pl-6">
                  <p className="font-serif text-[34px] font-normal leading-none text-primary">
                    15+
                  </p>
                  <p className="mt-2 text-[10px] uppercase leading-[1.6] tracking-[0.22em] text-secondary">
                    Technologies
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="mt-8 flex items-center gap-10">
                <Link
                  href="/projects"
                  className="group link-underline inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary"
                >
                  View Projects
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
                <a
                  href={profile.cvFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center text-sm font-medium tracking-wide text-primary"
                >
                  Download CV
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* ——— CENTER COLUMN ——— */}
          <div className="relative flex items-center justify-center lg:min-h-0">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EADCC6]/40 dark:bg-[#322C24]/40 blur-2xl sm:h-[360px] sm:w-[360px]"
            />
            <BackgroundWord
              text="Engineer"
              className="-translate-x-[50%] -translate-y-[30%] text-[clamp(100px,12vw,180px)] opacity-60"
            />

            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.95 }}
              animate={
                reduce
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 1, scale: 1, y: [0, -8, 0] }
              }
              transition={
                reduce
                  ? { duration: 1, ease: "easeOut" }
                  : {
                      opacity: { duration: 1, ease: "easeOut", delay: 0.6 },
                      scale: { duration: 1, ease: "easeOut", delay: 0.6 },
                      y: {
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5,
                      },
                    }
              }
              className="relative z-10 py-6"
            >
              <div className="overflow-hidden rounded-3xl border border-line bg-card shadow-2xl p-3">
                <Image
                  src={profile.profileImage}
                  alt={profile.name}
                  width={810}
                  height={990}
                  priority
                  sizes="(max-width: 1024px) 70vw, 36vw"
                  className="h-[min(350px,46vh)] w-auto object-contain rounded-2xl lg:h-[min(410px,52vh)]"
                />
              </div>
            </motion.div>
          </div>

          {/* ——— RIGHT COLUMN ——— */}
          <motion.div
            variants={container}
            initial={reduce ? false : "hidden"}
            animate="show"
            className="relative z-10 flex flex-col justify-center space-y-6 lg:pl-6"
          >
            <motion.div variants={item} className="border-t border-line/60 pt-5">
              <p className="label text-accent">Current Role</p>
              <p className="mt-2 text-sm font-medium text-primary">Electrical Engineer</p>
            </motion.div>

            <motion.div variants={item} className="border-t border-line/60 pt-5">
              <p className="label text-accent">Specialization</p>
              <ul className="mt-2 space-y-1.5">
                {panelSpecialization.map((s) => (
                  <li key={s} className="text-sm text-secondary">
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={item} className="border-t border-line/60 pt-5">
              <p className="label text-accent">Services</p>
              <ul className="mt-2 space-y-1.5">
                {services.map((s) => (
                  <li key={s} className="text-sm text-secondary">
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={item} className="border-t border-line/60 pt-5">
              <p className="label text-accent">Contact</p>
              <ul className="mt-2 space-y-1.5">
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
                      className="link-underline text-sm text-primary font-medium"
                    >
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={item} className="border-t border-line/60 pt-5">
              <p className="label text-accent">Location</p>
              <p className="mt-2 text-sm text-primary">Jakarta, Indonesia</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
