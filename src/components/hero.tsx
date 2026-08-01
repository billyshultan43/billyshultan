"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ParallaxWord } from "@/components/parallax-word";
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
    <section className="bg-background text-primary">
      <div className="mx-auto flex w-full max-w-[1920px] flex-col px-6 sm:px-10 xl:px-[72px]">
        <div className="grid flex-1 grid-cols-1 gap-12 pb-10 pt-12 lg:min-h-[calc(80dvh-72px)] lg:grid-cols-[42fr_33fr_25fr] lg:gap-x-12 lg:pb-0 lg:pt-16">
          {/* ——— LEFT COLUMN ——— */}
          <div className="relative z-10 flex flex-col justify-center pl-5 lg:-translate-y-[min(84px,8vh)]">
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
                className="mt-3 font-serif text-[clamp(38px,4.2vw,62px)] font-medium leading-[0.9] tracking-[-0.01em] text-primary"
              >
                Billy
                <br />
                Shultan
                <br />
                Al&nbsp;Hadiy
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-1.5 text-[15px] font-medium text-primary"
              >
                Electrical Engineer
              </motion.p>

              <motion.p
                variants={item}
                className="mt-2.5 max-w-[420px] text-[15px] leading-[1.65] text-secondary"
              >
                Electrical Engineer specializing in Industrial IoT, Embedded
                Systems and AI Integration, building connected monitoring
                solutions from hardware to cloud.
              </motion.p>

              <motion.div variants={item} className="mt-5 grid max-w-[420px] grid-cols-3">
                <div className="pr-6">
                  <p className="font-serif text-[30px] font-medium leading-none text-primary">
                    2+
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase leading-[1.6] tracking-[0.22em] text-secondary">
                    Years
                    <br />
                    Experience
                  </p>
                </div>
                <div className="border-l border-line/50 px-6">
                  <p className="font-serif text-[30px] font-medium leading-none text-primary">
                    3
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase leading-[1.6] tracking-[0.22em] text-secondary">
                    Featured
                    <br />
                    Projects
                  </p>
                </div>
                <div className="border-l border-line/50 pl-6">
                  <p className="font-serif text-[30px] font-medium leading-none text-primary">
                    15+
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase leading-[1.6] tracking-[0.22em] text-secondary">
                    Technologies
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="mt-6 flex items-center gap-9">
                <Link
                  href="/projects"
                  className="group link-underline inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-primary"
                >
                  View Projects
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
                <a
                  href={profile.cvFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center text-[13px] font-medium tracking-wide text-primary"
                >
                  Download CV
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* ——— CENTER COLUMN ——— */}
          <div className="relative flex items-center justify-center lg:-translate-y-6 lg:min-h-0">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[272px] w-[272px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EADCC6] sm:h-[316px] sm:w-[316px] xl:h-[360px] xl:w-[360px]"
            />
            <ParallaxWord
              text="Engineer"
              className="-translate-x-[50%] -translate-y-[30%] text-[clamp(96px,11vw,170px)] opacity-80"
            />

            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={
                reduce
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 1, scale: 1, y: [0, -6, 0] }
              }
              transition={
                reduce
                  ? { duration: 0.9, ease: "easeOut" }
                  : {
                      opacity: { duration: 0.9, ease: "easeOut", delay: 0.55 },
                      scale: { duration: 0.9, ease: "easeOut", delay: 0.55 },
                      y: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.45,
                      },
                    }
              }
              className="relative z-10 -rotate-1 py-6"
            >
              <Image
                src={profile.profileImage}
                alt={profile.name}
                width={810}
                height={990}
                priority
                sizes="(max-width: 1024px) 70vw, 36vw"
                className="h-[min(327px,44vh)] w-auto object-contain lg:h-[min(371px,50vh)]"
              />
            </motion.div>
          </div>

          {/* ——— RIGHT COLUMN ——— */}
          <motion.div
            variants={container}
            initial={reduce ? false : "hidden"}
            animate="show"
            className="relative z-10 flex flex-col justify-center"
          >
            <motion.div variants={item} className="border-t border-line/50 pt-4">
              <p className="label">Current Role</p>
              <p className="mt-2 text-[12px] text-primary">Electrical Engineer</p>
            </motion.div>

            <motion.div variants={item} className="mt-5 border-t border-line/50 pt-4">
              <p className="label">Specialization</p>
              <ul className="mt-2 space-y-1">
                {panelSpecialization.map((s) => (
                  <li key={s} className="text-[12px] text-secondary">
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={item} className="mt-5 border-t border-line/50 pt-4">
              <p className="label">Services</p>
              <ul className="mt-2 space-y-1">
                {services.map((s) => (
                  <li key={s} className="text-[12px] text-secondary">
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={item} className="mt-5 border-t border-line/50 pt-4">
              <p className="label">Contact</p>
              <ul className="mt-2 space-y-1">
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
                      className="link-underline text-[12px] text-primary"
                    >
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={item} className="mt-5 border-t border-line/50 pt-4">
              <p className="label">Location</p>
              <p className="mt-2 text-[12px] text-primary">Jakarta, Indonesia</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
