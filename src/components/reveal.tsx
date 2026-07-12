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
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
