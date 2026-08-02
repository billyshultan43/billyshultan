import { Code2, Layers, Cpu, Wrench, Sparkles, Globe, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { skills } from "@/content/skills";
import { profile } from "@/content/profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Skills",
  description:
    "Technical skills and capabilities of Billy Shultan Al Hadiy, from embedded systems and IoT to engineering expertise and full stack development.",
};

const iconMap = {
  code: Code2,
  layers: Layers,
  cpu: Cpu,
  wrench: Wrench,
  sparkles: Sparkles,
  globe: Globe,
} as const;

const stats = [
  { value: "15+", label: "technologies practiced" },
  { value: "6", label: "domains of practice" },
  { value: "2", label: "languages spoken" },
];

export default function SkillsPage() {
  return (
    <>
      <PageIntro
        title="Capabilities & tools."
        description="Six domains of practice spanning programming, embedded systems, and engineering expertise — applied end to end, from firmware to field calibration."
        meta="Skills / Engineering Practice"
      />

      <section className="section-container pb-24 lg:pb-32">
        <Reveal>
          <div className="flex flex-wrap items-baseline gap-x-16 gap-y-4 border-t border-line pt-8">
            {stats.map((stat) => (
              <p key={stat.label} className="font-mono text-xs text-secondary">
                <span className="font-serif text-3xl italic text-primary mr-2">
                  {stat.value}
                </span>{" "}
                {stat.label}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* MINIMAL ICON GRID BENTO */}
      <section className="section-container border-t border-line py-24 lg:py-36">
        <Reveal>
          <span className="label text-accent">Practice Taxonomy</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl tracking-tight text-primary">
            Domains of practice
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((cat, i) => {
            const Icon = iconMap[cat.icon as keyof typeof iconMap] ?? Code2;
            return (
              <Reveal key={cat.name} delay={i * 0.05} className="h-full">
                <div className="rounded-3xl border border-line bg-card p-10 h-full flex flex-col justify-between transition-all duration-300 hover:border-line-strong hover:shadow-xl">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface border border-line text-accent shadow-sm">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl text-primary font-normal">
                      {cat.name}
                    </h3>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {cat.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-lg bg-surface px-3 py-1.5 font-mono text-xs text-secondary border border-line/50"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* HOW THE STACK FITS TOGETHER */}
      <section className="border-t border-line bg-surface/40 py-32 lg:py-40">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="label text-accent">Architecture & Flow</span>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl tracking-tight text-primary">
                  How the stack fits together.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <Reveal>
                <p className="font-serif text-2xl sm:text-3xl leading-relaxed text-primary">
                  {profile.tagline}
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="text-base sm:text-lg leading-relaxed text-secondary">
                  Every project connects hardware, firmware, and cloud. Sensor
                  data from microcontrollers such as the ESP32 and ESP8266 is
                  transmitted over Wi-Fi and MQTT into structured databases,
                  then presented through web and mobile dashboards — with
                  methods like Fuzzy Mamdani turning raw readings into
                  interpretable classification.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="flex flex-wrap gap-4 pt-6">
                  <Link
                    href="/projects"
                    className={cn(buttonVariants({ size: "lg" }), "group px-8 py-6 text-base")}
                  >
                    See it applied
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                  <a
                    href={profile.cvFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-8 py-6 text-base")}
                  >
                    Download CV
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
