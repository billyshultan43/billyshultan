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
        <div className="absolute -right-24 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.12)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.06)_0%,transparent_70%)] blur-[80px]" />
        <div className="absolute left-1/2 top-0 h-[200px] w-[600px] -translate-x-1/2 bg-[gradient(to_bottom,rgba(124,92,255,0.04),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/10 via-transparent to-[#0A0A0F]/60" />
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
        className="group relative h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
      >
        <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.1)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute -inset-6 rounded-full bg-accent/5 blur-2xl" />
        <div className="absolute -inset-4 rounded-full bg-white/[0.02] backdrop-blur-xl" />

        <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-accent/20 via-accent/5 to-transparent opacity-30 blur-lg" />
        <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-accent/20 via-accent/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-50" />
        <div className="absolute -inset-[1px] rounded-full bg-gradient-to-br from-accent/15 via-accent/5 to-transparent p-[1px]">
          <div className="h-full w-full rounded-full bg-background" />
        </div>

        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
          className="relative h-full w-full overflow-hidden rounded-full shadow-[0_0_60px_-16px_rgba(124,92,255,0.25),0_30px_80px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/[0.06]"
        >
          <Image
            src={profile.profileImage}
            alt={profile.name}
            fill
            priority
            sizes="(max-width: 1024px) 256px, 320px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(10,10,15,0.6)_80%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(80,60,180,0.2)_85%)] mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/20" />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_50%_0%,rgba(124,92,255,0.1)_0%,transparent_35%)]" />
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_50px_rgba(0,0,0,0.3)]" />
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-accent/10" />
        </motion.div>
      </motion.div>
    </section>
  );
}
