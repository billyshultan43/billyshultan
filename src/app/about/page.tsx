import Image from "next/image";
import { Target, Cpu, Wrench, Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { profile } from "@/content/profile";
import { skills } from "@/content/skills";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

      <section className="section-container pb-32 pt-2">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12 items-start">
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
            <Reveal>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] border border-line bg-card shadow-2xl">
                <Image
                  src={profile.profileImage}
                  alt={profile.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1 space-y-8">
            <Reveal>
              <p className="font-serif text-2xl sm:text-3xl leading-relaxed text-primary">
                {profile.heroSummary}
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="text-base sm:text-lg leading-relaxed text-secondary">
                {profile.summary}
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-base leading-relaxed text-secondary">
                My work centers on Electrical Engineering, the Internet of
                Things, Embedded Systems, AI Integration, Software Development,
                and Full Stack Development, with a consistent focus on
                environmental and industrial monitoring applications.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-base leading-relaxed text-secondary">
                Committed to supporting operational and engineering system
                development across the energy, environmental, and manufacturing
                industries, combining field-proven instrumentation skills with
                modern software and connectivity.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-x-3 gap-y-3 border-t border-line pt-8">
                {profile.roles.map((role) => (
                  <span
                    key={role}
                    className="rounded-full bg-surface px-4 py-2 font-mono text-xs text-secondary border border-line/60"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* BENTO INTERESTS GRID */}
        <div className="mt-36">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Focus Areas</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl tracking-tight text-primary">
              Technical interests
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {interests.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="flex flex-col justify-between rounded-3xl border border-line bg-card p-10 h-full transition-all duration-300 hover:border-line-strong hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface border border-line text-accent mb-8 shadow-sm">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-primary font-normal">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-secondary">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* SKILL DOMAINS BENTO */}
        <div className="mt-36">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Taxonomy</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl tracking-tight text-primary">
              Skill domains
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((cat, i) => (
              <Reveal key={cat.name} delay={i * 0.05}>
                <div className="rounded-3xl border border-line bg-card p-10 h-full flex flex-col justify-between shadow-sm">
                  <div>
                    <h3 className="font-serif text-2xl font-normal text-primary mb-4">
                      {cat.name}
                    </h3>
                    <p className="font-mono text-xs leading-loose text-secondary">
                      {cat.skills.join(" / ")}
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-line/60 font-mono text-xs text-accent">
                    Domain 0{i + 1}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
