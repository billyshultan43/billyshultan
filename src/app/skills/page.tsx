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

      <section className="section-container border-t border-line py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-serif text-3xl tracking-tight text-primary sm:text-4xl">
                Domains of practice
              </h2>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-secondary">
                The skills are not isolated; each domain is exercised in the
                systems delivered on the projects page.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {skills.map((cat, i) => {
              const Icon = iconMap[cat.icon as keyof typeof iconMap] ?? Code2;
              return (
                <Reveal key={cat.name} delay={i * 0.04}>
                  <div className="grid grid-cols-1 gap-3 border-t border-line py-9 sm:grid-cols-12 sm:gap-6">
                    <Icon size={18} className="mt-1 text-accent sm:col-span-1" />
                    <div className="sm:col-span-11">
                      <h3 className="text-sm font-medium text-primary">
                        {cat.name}
                      </h3>
                      <p className="mt-3 font-mono text-[13px] leading-loose text-secondary">
                        {cat.skills.join(" / ")}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
            <Reveal delay={0.2}>
              <div className="border-t border-line" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface/50">
        <div className="section-container section-padding">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Reveal>
                <h2 className="font-serif text-3xl tracking-tight text-primary sm:text-4xl">
                  How the stack fits together
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal>
                <p className="max-w-2xl font-serif text-2xl leading-relaxed text-primary lg:text-3xl">
                  {profile.tagline}
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-secondary">
                  Every project connects hardware, firmware, and cloud. Sensor
                  data from microcontrollers such as the ESP32 and ESP8266 is
                  transmitted over Wi-Fi and MQTT into structured databases,
                  then presented through web and mobile dashboards — with
                  methods like Fuzzy Mamdani turning raw readings into
                  interpretable classification.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="mt-12 flex flex-wrap gap-4">
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
