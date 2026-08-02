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

      <section className="section-container pb-20 lg:pb-24">
        <Reveal>
          <div className="flex flex-wrap items-baseline gap-x-12 gap-y-3 border-t border-line pt-7">
            {stats.map((stat) => (
              <p key={stat.label} className="font-mono text-xs text-secondary">
                <span className="font-serif text-2xl italic text-primary">
                  {stat.value}
                </span>{" "}
                {stat.label}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* MINIMAL ICON GRID BENTO */}
      <section className="section-container border-t border-line py-20 lg:py-28">
        <Reveal>
          <span className="label">Practice Taxonomy</span>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-primary sm:text-4xl">
            Domains of practice
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((cat, i) => {
            const Icon = iconMap[cat.icon as keyof typeof iconMap] ?? Code2;
            return (
              <Reveal key={cat.name} delay={i * 0.05} className="h-full">
                <div className="rounded-2xl border border-line bg-card p-8 h-full flex flex-col justify-between transition-all duration-300 hover:border-line-strong hover:shadow-lg">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface border border-line text-accent">
                        <Icon size={22} strokeWidth={1.5} />
                      </div>
                      <span className="font-mono text-xs text-muted">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl text-primary font-medium">
                      {cat.name}
                    </h3>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {cat.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-md bg-surface px-3 py-1 font-mono text-xs text-secondary border border-line/50"
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
      <section className="border-t border-line bg-surface/40 py-28 lg:py-36">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="label">Architecture & Flow</span>
                <h2 className="mt-3 font-serif text-3xl tracking-tight text-primary sm:text-4xl">
                  How the stack fits together.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <Reveal>
                <p className="font-serif text-2xl leading-relaxed text-primary lg:text-3xl">
                  {profile.tagline}
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="text-base leading-relaxed text-secondary">
                  Every project connects hardware, firmware, and cloud. Sensor
                  data from microcontrollers such as the ESP32 and ESP8266 is
                  transmitted over Wi-Fi and MQTT into structured databases,
                  then presented through web and mobile dashboards — with
                  methods like Fuzzy Mamdani turning raw readings into
                  interpretable classification.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="/projects"
                    className={cn(buttonVariants({ size: "lg" }), "group")}
                  >
                    See it applied
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                  <a
                    href={profile.cvFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
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
