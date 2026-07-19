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
    <section className="section-container relative flex flex-col-reverse items-center gap-14 pb-16 pt-24 sm:pt-32 lg:flex-row lg:gap-20">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-24 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.08)_0%,transparent_70%)] blur-[80px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/60" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 text-center lg:text-left"
      >
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
            href="/contact"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full")}
          >
            Contact <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-72 w-72 sm:h-[24rem] sm:w-[24rem] lg:h-[26rem] lg:w-[26rem]"
      >
        <div className="animate-pulse-slow absolute -inset-28 rounded-full border border-accent/5" style={{ animationDelay: "-4s" }} />
        <div className="animate-pulse-slow absolute -inset-20 rounded-full border border-accent/[0.07]" style={{ animationDelay: "-2s" }} />
        <div className="absolute -inset-12 rounded-full border border-accent/10" />
        <div className="absolute -inset-6 rounded-full border border-accent/[0.12]" />

        <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.18),transparent_60%)] blur-3xl" />
        <div className="absolute -inset-5 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.1),transparent_50%)] blur-xl" />

        <div className="absolute -top-4 right-0 h-3 w-3 rounded-full bg-accent/40" />
        <div className="absolute -bottom-3 left-14 h-2 w-2 rounded-full bg-accent/25" />
        <div className="absolute left-0 top-1/4 h-1.5 w-1.5 rounded-full bg-accent/40" />
        <div className="absolute right-0 top-2/3 h-2 w-2 rounded-full bg-accent/20" />
        <div className="absolute bottom-12 -right-4 h-1 w-1 rounded-full bg-accent/50" />

        <div className="absolute -inset-[3px] z-10 rounded-full bg-gradient-to-br from-accent/25 via-accent/5 to-transparent opacity-40 blur-lg" />
        <div className="absolute inset-0 z-10 rounded-full ring-[1.5px] ring-accent/20 ring-inset" />

        <div className="absolute -inset-6 z-20 overflow-visible">
          <div className="relative h-full w-full rounded-full overflow-hidden shadow-[0_20px_60px_-16px_rgba(0,0,0,0.6)]">
            <Image
              src={profile.profileImage}
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 1024px) 320px, 480px"
              className="object-cover object-top scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-transparent to-background/50" />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_50%_0%,rgba(139,92,246,0.06),transparent_40%)]" />
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_50px_rgba(0,0,0,0.3)]" />
          </div>
          <div className="absolute -bottom-2 left-1/2 h-4 w-3/4 -translate-x-1/2 rounded-full bg-black/30 blur-xl" />
        </div>
      </motion.div>
    </section>
  );
}
