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
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-24 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(214,185,140,0.15)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute -bottom-20 right-0 h-[350px] w-[450px] bg-[radial-gradient(ellipse_at_bottom_right,rgba(30,25,20,0.5)_0%,transparent_70%)] blur-[80px]" />
        <div className="absolute left-1/2 top-0 h-[250px] w-[700px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(214,185,140,0.05)_0%,transparent_60%)]" />
        <div className="absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(214,185,140,0.04)_0%,transparent_70%)] blur-[80px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/10 via-transparent to-[#0B0B0B]/70" />
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
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="group relative h-52 w-52 sm:h-64 sm:w-64 lg:h-72 lg:w-72"
      >
        <div className="absolute -inset-8 rounded-[3.5rem] bg-[radial-gradient(circle,rgba(214,185,140,0.12)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute -inset-5 rounded-[2.8rem] bg-accent/5 blur-2xl" />
        <div className="absolute -inset-3 rounded-[2.5rem] bg-white/[0.02] backdrop-blur-xl" />

        <div className="absolute -inset-[2px] rounded-[2.2rem] bg-gradient-to-br from-accent/25 via-accent/10 to-transparent opacity-30 blur-xl" />
        <div className="absolute -inset-[2px] rounded-[2.2rem] bg-gradient-to-br from-accent/25 via-accent/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-50" />
        <div className="absolute -inset-[1px] rounded-[2.2rem] bg-gradient-to-br from-accent/20 via-accent/10 to-transparent p-[1px]">
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
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
          className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-[0_0_60px_-12px_rgba(214,185,140,0.2),0_30px_80px_-20px_rgba(0,0,0,0.6)]"
        >
          <Image
            src={profile.profileImage}
            alt={profile.name}
            fill
            priority
            sizes="(max-width: 1024px) 256px, 288px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(11,11,11,0.7)_75%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(100,75,40,0.3)_80%)] mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/30" />
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(ellipse_at_50%_0%,rgba(214,185,140,0.15)_0%,transparent_40%)]" />
          <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_50px_rgba(0,0,0,0.4)]" />
          <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/[0.08]" />
          <div className="absolute inset-0 rounded-[2rem] ring-1 ring-accent/10" />
        </motion.div>
      </motion.div>
    </section>
  );
}
