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
import { projects } from "@/content/projects";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const featured = projects[0];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-line bg-background">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute left-[5%] top-[16%] h-44 w-44 rounded-full bg-[#E4DAC8] opacity-70" />
        <span className="absolute bottom-[8%] right-[3%] h-72 w-72 rounded-[2.5rem] bg-[#E9E0CF] opacity-60" />
      </div>

      <div className="section-container relative grid grid-cols-1 items-center gap-16 pb-28 pt-24 lg:grid-cols-[42%_58%] lg:gap-14 lg:pb-36">
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
        >
          <motion.p
            variants={item}
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-secondary"
          >
            Electrical Engineer / IoT / Embedded
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-8 font-serif text-6xl leading-[0.95] tracking-tight text-primary sm:text-7xl xl:text-8xl"
          >
            Engineering a{" "}
            <span className="italic text-accent">measurable</span> world.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-md text-base leading-relaxed text-secondary lg:text-lg"
          >
            IoT and embedded systems engineer building environmental
            monitoring instruments, from sensor to cloud.
          </motion.p>

          <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="#work"
              className={cn(buttonVariants({ size: "sm" }), "group")}
            >
              View selected work
              <ArrowDownRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </Link>
            <Link
              href={profile.cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "group"
              )}
            >
              Download CV
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative mx-auto w-full max-w-[560px]">
            <span
              aria-hidden="true"
              className="text-outline pointer-events-none absolute -right-4 top-0 z-0 select-none whitespace-nowrap font-serif uppercase leading-none text-[7rem] sm:text-[10rem] xl:text-[12rem]"
            >
              Engineering
            </span>

            <div className="absolute right-0 top-14 z-10 w-[84%] overflow-hidden rounded-2xl border border-line bg-card">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/assets/images/projects/ambient-particulate/3D-Design-Tampak-Luar.png"
                  alt="CAD render of the ambient particulate monitoring system"
                  fill
                  sizes="(max-width: 1024px) 84vw, 44vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="relative z-20 ml-[2%] w-[68%] overflow-hidden rounded-2xl border border-line bg-card shadow-[0_28px_60px_-32px_rgba(32,29,23,0.4)]">
              <div className="relative aspect-[3/4]">
                <Image
                  src={profile.profileImage}
                  alt={profile.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 68vw, 34vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="absolute left-0 top-[4%] z-30 w-[250px] -translate-x-[6%] rounded-2xl border border-line bg-card p-5 shadow-[0_18px_45px_-18px_rgba(32,29,23,0.35)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-secondary">
                Featured Project
              </p>
              <h3 className="mt-3 font-serif text-xl leading-tight text-primary">
                Ambient Particulate Monitor
              </h3>
              <p className="mt-2 font-mono text-[10px] text-accent-deep">
                IoT / ESP8266 / Blynk
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-secondary">
                Real-time PM2.5 and temperature monitoring, from sensor to
                cloud.
              </p>
              <Link
                href={`/projects/${featured.slug}`}
                className="group mt-4 inline-flex h-9 items-center gap-1.5 rounded-md border border-line px-4 text-[13px] font-medium text-primary transition-colors duration-300 hover:border-primary"
              >
                View case study
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
