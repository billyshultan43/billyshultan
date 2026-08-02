import * as React from "react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  title,
  right,
  className,
}: {
  index?: string;
  title: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal>
      <div
        className={cn(
          "mb-12 flex flex-col gap-6 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8",
          className
        )}
      >
        <div>
          {index && (
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
              {index}
            </span>
          )}
          <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-primary sm:text-5xl">
            {title}
          </h2>
        </div>
        {right && <div className="shrink-0 sm:pb-1.5">{right}</div>}
      </div>
    </Reveal>
  );
}
