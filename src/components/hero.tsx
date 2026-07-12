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

export function Hero() {
  return (
    <section className="section-container flex flex-col-reverse items-center gap-12 pb-12 pt-20 sm:pt-28 lg:flex-row lg:gap-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 text-center lg:text-left"
      >
        <motion.h1
          variants={item}
          className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-3 text-lg font-medium text-gradient sm:text-xl"
        >
          {profile.role}
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-secondary lg:mx-0"
        >
          {profile.heroSummary}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
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
        {/* Strong glow + soft animated blue light */}
        <div className="absolute -inset-4 rounded-[2.2rem] bg-accent-gradient opacity-30 blur-2xl animate-pulse-slow" />
        <div className="absolute -inset-1 rounded-[2rem] border border-accent/30 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
          className="relative h-full w-full overflow-hidden rounded-[2rem] border border-line shadow-glow ring-1 ring-white/10"
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
