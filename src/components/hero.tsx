"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="section-container pt-12 pb-24 lg:pt-20 lg:pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* LEFT COLUMN: Editorial Hero */}
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="lg:col-span-7 space-y-8"
        >
          <motion.div variants={item}>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">
              Electrical Engineer
            </span>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-primary leading-[1.02]">
              Billy Shultan
              <br />
              Al Hadiy<span className="text-accent">.</span>
            </h1>
          </motion.div>

          <motion.p variants={item} className="max-w-xl text-lg sm:text-xl leading-relaxed text-secondary font-normal">
            I design and build intelligent systems that connect hardware, software, and data to solve real-world problems and create meaningful impact.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-8 pt-2">
            <Link
              href="/projects"
              className={cn(buttonVariants({ size: "lg" }), "group rounded-full px-8 py-6 text-base gap-2")}
            >
              View My Work
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary link-underline"
            >
              About Me
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          {/* Metadata List */}
          <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-line">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">Based In</span>
              <p className="mt-1.5 font-medium text-primary text-sm">Indonesia</p>
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">Focus</span>
              <p className="mt-1.5 font-medium text-primary text-sm">IoT, Embedded, AI, Cloud</p>
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">Available</span>
              <p className="mt-1.5 flex items-center gap-2 font-medium text-primary text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                For new opportunities
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Large Portrait Image */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] border border-line bg-card shadow-2xl">
            <Image
              src={profile.profileImage}
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
