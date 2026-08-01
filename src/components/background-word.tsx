"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BackgroundWord({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <motion.span
        aria-hidden="true"
        initial={reduce ? false : { y: 0, opacity: 0.75 }}
        animate={reduce ? undefined : { y: [0, -12, 0], opacity: [0.75, 1, 0.75] }}
        transition={
          reduce
            ? undefined
            : {
                y: { duration: 21, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 21, repeat: Infinity, ease: "easeInOut" },
              }
        }
        className="absolute inset-0"
      >
        <span
          className={cn(
            "text-outline absolute select-none whitespace-nowrap font-serif font-medium uppercase leading-none tracking-[0.02em]",
            className
          )}
        >
          {text}
        </span>
      </motion.span>
    </div>
  );
}
