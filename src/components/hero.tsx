"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile } from "@/content/profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="section-container pb-0 pt-10 lg:pt-12">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="relative z-10 lg:col-span-8"
        >
          <motion.p
            variants={item}
            className="text-xs font-medium uppercase tracking-[0.24em] text-secondary"
          >
            {profile.roles.slice(0, 4).join(" / ")}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-8 font-serif text-[3.4rem] leading-[1.06] tracking-tight text-primary sm:text-7xl lg:text-6xl xl:text-[6.25rem]"
          >
            Billy Shultan
            <span className="block pb-2 italic text-accent">Al Hadiy</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-base leading-relaxed text-secondary lg:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-12">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "group")}>
              Contact
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-4 lg:mt-24"
        >
          <span
            aria-hidden="true"
            className="text-outline pointer-events-none absolute -bottom-8 right-0 hidden select-none font-serif italic leading-none lg:block lg:text-8xl xl:text-9xl"
          >
            engineer
          </span>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[420px] overflow-hidden border border-line lg:max-w-none">
            <Image
              src={profile.profileImage}
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
