"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

export function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = React.useState<string | null>(null);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(src)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-accent/50"
            aria-label={`Open image ${i + 1}`}
          >
            <Image
              src={src}
              alt={`${alt}, image ${i + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-between bg-gradient-to-t from-primary/70 to-transparent px-3 pb-2.5 pt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-background transition-transform duration-500 group-hover:translate-y-0"
            >
              View
              <span>0{i + 1}</span>
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/90 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-background/25 text-background transition-colors duration-300 hover:bg-background/10"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={reduce ? false : { scale: 0.96, y: 8 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[80vh] w-full max-w-4xl overflow-hidden rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={active}
                alt={alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
