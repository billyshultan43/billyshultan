"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme, type Theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const OPTIONS: { value: Theme; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "system", label: "System" },
  { value: "dark", label: "Dark" },
];

const SEGMENT_WIDTH = 32;
const THUMB_PADDING = 4;

function ThemeIcon({ value }: { value: Theme }) {
  if (value === "light") {
    return <Sun size={15} strokeWidth={1.75} />;
  }
  if (value === "dark") {
    return <Moon size={15} strokeWidth={1.75} />;
  }
  return (
    <span className="relative block h-[15px] w-[15px]" aria-hidden="true">
      <Sun
        size={15}
        strokeWidth={1.75}
        className="absolute left-0 top-0"
        style={{ clipPath: "inset(0 50% 0 0)" }}
      />
      <Moon
        size={15}
        strokeWidth={1.75}
        className="absolute left-0 top-0"
        style={{ clipPath: "inset(0 0 0 50%)" }}
      />
    </span>
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const reduce = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const active = mounted ? theme : "system";
  const index = Math.max(0, OPTIONS.findIndex((o) => o.value === active));

  return (
    <div
      role="group"
      aria-label="Color theme"
      className="relative flex h-9 items-center rounded-full border border-line bg-surface p-1 transition-colors duration-300 hover:border-line-strong"
    >
      <motion.span
        aria-hidden="true"
        initial={false}
        animate={{ left: THUMB_PADDING + index * SEGMENT_WIDTH }}
        transition={
          reduce
            ? { duration: 0 }
            : { type: "spring", stiffness: 420, damping: 34 }
        }
        className="absolute inset-y-1 w-8 rounded-full bg-card shadow-soft ring-1 ring-line"
      />
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-label={`${option.label} theme`}
          aria-pressed={active === option.value}
          title={option.label}
          onClick={() => setTheme(option.value)}
          className={cn(
            "relative z-10 flex h-7 w-8 items-center justify-center rounded-full transition-colors duration-300",
            active === option.value
              ? "text-primary"
              : "text-muted hover:text-secondary"
          )}
        >
          <ThemeIcon value={option.value} />
        </button>
      ))}
      <span className="sr-only" aria-live="polite">
        {active === "light"
          ? "Light theme active"
          : active === "dark"
            ? "Dark theme active"
            : "System theme active"}
      </span>
    </div>
  );
}
