"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import * as React from "react";

type Tag = "div" | "section" | "li" | "article";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const variants: Record<"up" | "scale" | "left", Variants> = {
  up: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  left: {
    hidden: { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0 },
  },
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  variant = "up",
  amount = 0.2,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
  variant?: keyof typeof variants;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as React.ElementType;
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants[variant]}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}
