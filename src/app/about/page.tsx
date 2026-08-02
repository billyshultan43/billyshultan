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
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8 items-start">
          <div className="lg:col-span-4 lg:col-start-9 lg:row-start-1">
            <Reveal>
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-3 -top-3 h-full w-full border border-line-strong rounded-2xl"
                />
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-line bg-card shadow-lg">
                  <Image
                    src={profile.profileImage}
                    alt={profile.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1 space-y-8">
            <Reveal>
              <p className="font-serif text-2xl leading-relaxed text-primary lg:text-3xl">
                {profile.heroSummary}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-base leading-relaxed text-secondary">
                {profile.summary}
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-base leading-relaxed text-secondary">
                My work centers on Electrical Engineering, the Internet of
                Things, Embedded Systems, AI Integration, Software Development,
                and Full Stack Development, with a consistent focus on
                environmental and industrial monitoring applications.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-base leading-relaxed text-secondary">
                Committed to supporting operational and engineering system
                development across the energy, environmental, and manufacturing
                industries, combining field-proven instrumentation skills with
                modern software and connectivity.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-7">
                {profile.roles.map((role) => (
                  <span
                    key={role}
                    className="rounded-md bg-surface px-3 py-1.5 font-mono text-xs text-secondary"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* BENTO INTERESTS GRID */}
        <div className="mt-32">
          <Reveal>
            <span className="label">Focus Areas</span>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-primary sm:text-4xl">
              Technical interests
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="flex flex-col justify-between rounded-2xl border border-line bg-card p-8 h-full transition-all duration-300 hover:border-line-strong hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface border border-line text-accent mb-6">
                    <item.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-primary font-medium">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-secondary">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* SKILL DOMAINS BENTO */}
        <div className="mt-32">
          <Reveal>
            <span className="label">Taxonomy</span>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-primary sm:text-4xl">
              Skill domains
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((cat, i) => (
              <Reveal key={cat.name} delay={i * 0.05}>
                <div className="rounded-2xl border border-line bg-card p-8 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-medium text-primary mb-4">
                      {cat.name}
                    </h3>
                    <p className="font-mono text-xs leading-loose text-secondary">
                      {cat.skills.join(" / ")}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-line/60 font-mono text-[11px] text-muted">
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
