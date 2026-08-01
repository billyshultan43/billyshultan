"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowDownRight, FileDown } from "lucide-react";
import { profile } from "@/content/profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const cadRender =
  "/assets/images/projects/ambient-particulate/3D-Design-Tampak-Luar.png";
const blynkShot =
  "/assets/images/projects/ambient-particulate/Screenshot_20231205_230018_cloud.blynk.jpg";

const bom = [
  "NODEMCU ESP8266 / MAIN CONTROLLER",
  "SHARP GP2Y1014AU0F / PM2.5 SENSOR",
  "DS18B20 / TEMPERATURE SENSOR",
];

export function Hero() {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const slowY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const fastY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-b border-line"
    >
      <div className="section-container grid min-h-[calc(100dvh-72px)] grid-cols-1 items-center gap-14 pb-16 pt-24 lg:grid-cols-12 lg:gap-6">
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="relative z-20 lg:col-span-5"
        >
          <motion.p
            variants={item}
            className="font-mono text-xs leading-relaxed text-secondary"
          >
            Billy Shultan Al Hadiy / Electrical Engineer
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-7 font-serif text-6xl leading-[0.98] tracking-tight text-primary sm:text-7xl xl:text-[5.5rem]"
          >
            Engineering a{" "}
            <span className="italic text-accent">measurable</span> world.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-md text-base leading-relaxed text-secondary lg:text-lg"
          >
            IoT and embedded systems engineer building environmental
            monitoring instruments, from sensor to cloud.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              href="#work"
              className={cn(buttonVariants({ size: "lg" }), "group")}
            >
              View selected work
              <ArrowDownRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </Link>
            <Link
              href={profile.cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "group"
              )}
            >
              Download CV
              <FileDown
                size={15}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </Link>
          </motion.div>
        </motion.div>

        <div className="relative lg:col-span-7">
          <div className="relative h-[440px] sm:h-[540px] lg:h-[640px]">
            <motion.div
              style={reduce ? undefined : { y: slowY }}
              className="absolute right-0 top-0 z-10 w-[64%] lg:w-[60%]"
            >
              <Frame className="aspect-[4/3]">
                <Image
                  src={cadRender}
                  alt="CAD render of the ambient particulate monitoring system enclosure"
                  fill
                  priority
                  sizes="(max-width: 1024px) 64vw, 34vw"
                  className="object-cover"
                />
              </Frame>
            </motion.div>

            <motion.div
              style={reduce ? undefined : { y: fastY }}
              className="absolute bottom-0 left-0 z-20 w-[34%] lg:w-[30%]"
            >
              <Frame className="aspect-[3/4]">
                <Image
                  src={blynkShot}
                  alt="Live Blynk dashboard showing PM2.5 and temperature readings"
                  fill
                  sizes="(max-width: 1024px) 34vw, 15vw"
                  className="object-cover"
                />
              </Frame>
            </motion.div>

            <motion.div
              style={reduce ? undefined : { y: midY }}
              className="absolute left-[26%] top-[4%] z-10 hidden w-[22%] sm:block lg:left-[24%]"
            >
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-3 -top-3 h-full w-full border border-line-strong"
                />
                <Frame className="relative aspect-[3/4]">
                  <Image
                    src={profile.profileImage}
                    alt={profile.name}
                    fill
                    sizes="22vw"
                    className="object-cover object-top"
                  />
                </Frame>
              </div>
            </motion.div>

            <motion.div
              style={reduce ? undefined : { y: midY }}
              className="absolute bottom-[8%] right-[6%] z-30 hidden sm:block lg:right-[10%]"
            >
              <div className="border border-line-strong bg-background p-4 font-mono text-[11px] leading-relaxed text-primary">
                <p className="mb-2 text-secondary">AMBIENT PARTICULATE MONITOR</p>
                {bom.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Frame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border border-line bg-card",
        className
      )}
    >
      {children}
    </div>
  );
}
