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
        <div className="animate-pulse-slow absolute -inset-36 rounded-full border border-accent/[0.04]" style={{ animationDelay: "-6s" }} />
        <div className="animate-pulse-slow absolute -inset-28 rounded-full border border-accent/[0.05]" style={{ animationDelay: "-4s" }} />
        <div className="animate-pulse-slow absolute -inset-20 rounded-full border border-accent/[0.06]" style={{ animationDelay: "-2s" }} />
        <div className="absolute -inset-12 rounded-full border border-accent/8" />
        <div className="absolute -inset-5 rounded-full border border-accent/10" />

        <div className="absolute -inset-16 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.12),transparent_60%)] blur-[100px]" />
        <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.08),transparent_50%)] blur-[60px]" />

        <div className="absolute -top-5 right-2 h-3 w-3 rounded-full bg-accent/40" />
        <div className="absolute -bottom-4 left-16 h-2 w-2 rounded-full bg-accent/25" />
        <div className="absolute left-0 top-1/3 h-1.5 w-1.5 rounded-full bg-accent/40" />
        <div className="absolute right-0 top-1/2 h-2 w-2 rounded-full bg-accent/20" />
        <div className="absolute bottom-16 -right-5 h-1 w-1 rounded-full bg-accent/50" />

        <div className="absolute inset-0 z-10 rounded-full border border-accent/20 shadow-[0_0_30px_-8px_rgba(139,92,246,0.15)]" />

        <div className="absolute -inset-x-20 -top-28 -bottom-16 z-20 overflow-visible">
          <div className="relative h-full w-full">
            <Image
              src={profile.profileImage}
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 1024px) 440px, 580px"
              className="object-contain object-top"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
