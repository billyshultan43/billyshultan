import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/marquee";
import { profile } from "@/content/profile";

const chips = [
  { label: "IoT", className: "left-[-14px] top-8" },
  { label: "Embedded Systems", className: "right-[-8px] top-16" },
  { label: "AI Integration", className: "bottom-20 left-[-18px]" },
  { label: "Env. Monitoring", className: "right-[-10px] bottom-6" },
];

export function Hero() {
  return (
    <>
      <section className="section-container relative pb-10 pt-10 lg:pt-16">
        <div
          aria-hidden="true"
          className="paper-grid pointer-events-none absolute inset-0 -z-10"
        />
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-secondary">
                  <span className="eyebrow-dot animate-pulse-dot" aria-hidden="true" />
                  Electrical Engineer
                </span>
                <span aria-hidden="true" className="hidden h-3 w-px bg-line-strong sm:block" />
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary">
                  {profile.location}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-7 font-serif text-[56px] font-normal leading-[0.98] tracking-tight text-primary sm:text-[76px] lg:text-[86px]">
                Billy Shultan
                <br />
                <em className="text-accent">Al&nbsp;Hadiy</em>
                <span className="text-accent">.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-[520px] text-[15px] font-light leading-[1.75] text-secondary sm:text-base">
                {profile.heroSummary}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-background transition-all duration-300 hover:bg-accent hover:shadow-glow active:translate-y-[1px]"
                >
                  View Work
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href="/about"
                  className="group link-underline inline-flex items-center gap-2 text-sm font-medium text-primary"
                >
                  About Me
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="relative mx-auto w-full max-w-[420px]">
                <div
                  aria-hidden="true"
                  className="absolute -right-5 -top-5 h-40 w-40 rounded-full bg-accent/20 blur-[70px]"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[36px] border border-accent/35"
                />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] bg-surface shadow-ink-lg ring-1 ring-line">
                  <Image
                    src={profile.profileImage}
                    alt={profile.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover object-top"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/35 to-transparent"
                  />
                </div>
                {chips.map((chip) => (
                  <span
                    key={chip.label}
                    className={`glass absolute hidden rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-primary shadow-soft animate-float sm:block ${chip.className}`}
                    style={{ animationDelay: `${chips.indexOf(chip) * 0.8}s` }}
                  >
                    {chip.label}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Marquee items={profile.roles} />
    </>
  );
}
