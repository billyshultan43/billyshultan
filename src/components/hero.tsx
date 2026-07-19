"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function highlightAIIntegration(text: string) {
  const parts = text.split("AI Integration");
  if (parts.length < 2) return text;
  return (
    <>
      {parts[0]}
      <span className="relative inline-flex items-center">
        <span className="relative z-10 text-accent">
          AI Integration
        </span>
      </span>
      {parts.slice(1).join("AI Integration")}
    </>
  );
}

export function Hero() {
  return (
    <section className="section-container relative flex flex-col-reverse items-center gap-12 pb-16 pt-20 sm:pt-28 lg:flex-row lg:gap-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 text-center lg:text-left"
      >
        <motion.div variants={item} className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-accent/15 bg-accent/[0.04] px-4 py-1.5 text-xs font-medium text-accent/90">
          <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
          {profile.roles[0]} &middot; {profile.roles[1]}
        </motion.div>

        <motion.h1
          variants={item}
          className="font-serif text-4xl font-normal leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-lg font-medium text-accent sm:text-xl"
        >
          {highlightAIIntegration(profile.role)}
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-secondary lg:mx-0"
        >
          {profile.heroSummary}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
        >
          <Link
            href={profile.cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "rounded-full")}
          >
            Download CV
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full")}
          >
            Contact <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="group relative h-52 w-52 sm:h-64 sm:w-64 lg:h-72 lg:w-72"
      >
        <div className="absolute -inset-6 rounded-[3rem] bg-accent/5 blur-3xl" />
        <div className="absolute -inset-4 rounded-[2.5rem] bg-white/[0.02] backdrop-blur-xl" />
        <div className="absolute -inset-3 rounded-[2.3rem] bg-gradient-to-br from-accent/8 via-transparent to-accent/5 blur-2xl" />

        <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-br from-accent/30 via-accent/15 to-accent/5 opacity-30 blur-xl" />
        <div className="absolute -inset-[2px] rounded-[2.2rem] bg-gradient-to-br from-accent/30 via-accent/15 to-accent/10 opacity-0 transition-opacity duration-700 group-hover:opacity-60" />
        <div className="absolute -inset-[1px] rounded-[2.2rem] bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5 p-[1px]">
          <div className="h-full w-full rounded-[2.15rem] bg-background" />
        </div>

        <svg
          className="pointer-events-none absolute -left-2 -top-2 z-10 h-8 w-8 text-accent/50"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path d="M2 2 L30 2 L30 6 L6 6 L6 30 L2 30 Z" fill="currentColor" fillOpacity="0.12" />
          <path d="M2 2 L30 2 M2 2 L2 30" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
        </svg>
        <svg
          className="pointer-events-none absolute -right-2 -top-2 z-10 h-8 w-8 text-accent/50"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path d="M30 2 L2 2 L2 6 L26 6 L26 30 L30 30 Z" fill="currentColor" fillOpacity="0.12" />
          <path d="M30 2 L2 2 M30 2 L30 30" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
        </svg>
        <svg
          className="pointer-events-none absolute -bottom-2 -left-2 z-10 h-8 w-8 text-accent/50"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path d="M2 30 L30 30 L30 26 L6 26 L6 2 L2 2 Z" fill="currentColor" fillOpacity="0.12" />
          <path d="M2 30 L30 30 M2 30 L2 2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
        </svg>
        <svg
          className="pointer-events-none absolute -bottom-2 -right-2 z-10 h-8 w-8 text-accent/50"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path d="M30 30 L2 30 L2 26 L26 26 L26 2 L30 2 Z" fill="currentColor" fillOpacity="0.12" />
          <path d="M30 30 L2 30 M30 30 L30 2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
        </svg>

        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-[0_0_40px_-8px_rgba(214,185,140,0.15),0_20px_60px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.06]"
        >
          <Image
            src={profile.profileImage}
            alt={profile.name}
            fill
            priority
            sizes="(max-width: 1024px) 256px, 288px"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
