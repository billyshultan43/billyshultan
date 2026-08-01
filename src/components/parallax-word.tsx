"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import * as React from "react";
import { cn } from "@/lib/utils";

export function ParallaxWord({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [5, -5]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 z-0">
      <motion.span style={reduce ? undefined : { y }} className="absolute inset-0">
        <span
          aria-hidden="true"
          className={cn(
            "text-outline absolute left-1/2 top-1/2 select-none whitespace-nowrap font-serif font-medium uppercase leading-none tracking-[0.02em]",
            className
          )}
        >
          {text}
        </span>
      </motion.span>
    </div>
  );
}
