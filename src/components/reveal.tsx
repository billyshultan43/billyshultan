"use client";

import { motion, useReducedMotion } from "framer-motion";
import * as React from "react";

type Tag = "div" | "section" | "li" | "article";

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as React.ElementType;
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
