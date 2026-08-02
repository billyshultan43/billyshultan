import { Code2, Layers, Cpu, Wrench, Sparkles, Globe, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
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

      <section className="section-container pb-4">
        <Reveal>
          <div className="flex flex-wrap items-baseline gap-x-12 gap-y-4">
            {stats.map((stat) => (
              <p key={stat.label} className="font-mono text-xs text-secondary">
                <span className="mr-2 font-serif text-3xl italic text-primary">
                  {stat.value}
                </span>{" "}
                {stat.label}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* BENTO DOMAINS */}
      <section className="section-container pb-24 pt-16 sm:pb-32 sm:pt-20">
        <SectionHeading
          index="01"
          title="Domains of practice"
          right={
            <span className="font-mono text-[11px] text-secondary">
              {skills.length} domains, end to end
            </span>
          }
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((cat, i) => {
            const Icon = iconMap[cat.icon as keyof typeof iconMap] ?? Code2;
            const featured = i === 2;
            return (
              <Reveal
                key={cat.name}
                delay={i * 0.04}
                className={featured ? "h-full md:col-span-2 lg:col-span-1" : "h-full"}
              >
                <div
                  className={`card-base card-hover flex h-full flex-col justify-between p-9 ${
                    featured ? "bg-primary text-background" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${
                          featured
                            ? "border-background/20 bg-background/10 text-accent-light"
                            : "border-line bg-surface text-accent"
                        }`}
                      >
                        <Icon size={24} strokeWidth={1.5} />
                      </span>
                      <span
                        className={`font-mono text-[10px] uppercase tracking-[0.24em] ${
                          featured ? "text-background/50" : "text-accent"
                        }`}
                      >
                        0{i + 1}
                      </span>
                    </div>
                    <h3
                      className={`mt-8 font-serif text-2xl ${
                        featured ? "text-background" : "text-primary"
                      }`}
                    >
                      {cat.name}
                    </h3>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {cat.skills.map((s) => (
                        <span
                          key={s}
                          className={`inline-flex items-center rounded-full px-3.5 py-2 font-mono text-[11px] ${
                            featured
                              ? "border border-background/20 bg-background/10 text-background/85"
                              : "chip"
                          }`}
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
      <section className="border-t border-line bg-surface/40 py-24 lg:py-32">
        <div className="section-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                index="02"
                title="How the stack fits together."
                className="mb-0"
              />
            </div>
            <div className="space-y-7 lg:col-span-7">
              <Reveal>
                <p className="font-serif text-2xl leading-[1.5] text-primary sm:text-3xl">
                  {profile.tagline}
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="text-base font-light leading-[1.85] text-secondary sm:text-lg">
                  Every project connects hardware, firmware, and cloud. Sensor
                  data from microcontrollers such as the ESP32 and ESP8266 is
                  transmitted over Wi-Fi and MQTT into structured databases,
                  then presented through web and mobile dashboards — with
                  methods like Fuzzy Mamdani turning raw readings into
                  interpretable classification.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="/projects"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "group gap-2 px-8"
                    )}
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
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "px-8"
                    )}
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
