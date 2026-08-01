import Image from "next/image";
import { Target, Cpu, Wrench, Sparkles } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { profile } from "@/content/profile";
import { skills } from "@/content/skills";

export const metadata = {
  title: "About",
  description: profile.summary,
};

const interests = [
  {
    icon: Cpu,
    title: "Embedded & IoT Systems",
    text: "Designing low-cost, connected monitoring devices using microcontrollers, sensors, and cloud platforms.",
  },
  {
    icon: Wrench,
    title: "Engineering & Maintenance",
    text: "Assembling, testing, calibrating, and maintaining environmental laboratory and measurement instruments.",
  },
  {
    icon: Sparkles,
    title: "AI-Integrated Solutions",
    text: "Applying methods such as Fuzzy Mamdani to classify and interpret sensor data intelligently.",
  },
  {
    icon: Target,
    title: "Full Stack Development",
    text: "Building web and mobile applications with structured databases to support business and monitoring systems.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title="Electrical Engineer, working between the bench and the cloud."
        meta="Profile / Billy Shultan Al Hadiy"
      />

      <section className="section-container section-padding pt-2">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3 lg:col-start-10 lg:row-start-1">
            <Reveal>
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-3 -top-3 h-full w-full border border-line-strong"
                />
                <div className="relative aspect-[3/4] overflow-hidden border border-line bg-card">
                  <Image
                    src={profile.profileImage}
                    alt={profile.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 24vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8 lg:col-start-1 lg:row-start-1">
            <Reveal>
              <p className="max-w-2xl font-serif text-2xl leading-relaxed text-primary lg:text-3xl">
                {profile.heroSummary}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-secondary">
                {profile.summary}
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-secondary">
                My work centers on Electrical Engineering, the Internet of
                Things, Embedded Systems, AI Integration, Software Development,
                and Full Stack Development, with a consistent focus on
                environmental and industrial monitoring applications.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-secondary">
                Committed to supporting operational and engineering system
                development across the energy, environmental, and manufacturing
                industries, combining field-proven instrumentation skills with
                modern software and connectivity.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-7">
                {profile.roles.map((role) => (
                  <span key={role} className="font-mono text-xs text-secondary">
                    {role}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-serif text-3xl tracking-tight text-primary sm:text-4xl">
                Technical interests
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            {interests.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="grid grid-cols-1 gap-3 border-t border-line py-8 sm:grid-cols-12 sm:gap-6">
                  <item.icon size={18} className="mt-1 text-accent sm:col-span-1" />
                  <div className="sm:col-span-11">
                    <h3 className="text-sm font-medium text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-secondary">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <div className="border-t border-line" />
            </Reveal>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-serif text-3xl tracking-tight text-primary sm:text-4xl">
                Skill domains
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            {skills.map((cat, i) => (
              <Reveal key={cat.name} delay={i * 0.04}>
                <div className="grid grid-cols-1 gap-3 border-t border-line py-8 sm:grid-cols-12 sm:gap-6">
                  <p className="text-sm font-medium text-primary sm:col-span-4">
                    {cat.name}
                  </p>
                  <p className="font-mono text-[13px] leading-relaxed text-secondary sm:col-span-8">
                    {cat.skills.join(" / ")}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <div className="border-t border-line" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
