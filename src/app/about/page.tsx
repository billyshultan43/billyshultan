import Image from "next/image";
import { Target, Cpu, Wrench, Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
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

      <section className="section-container pb-24 pt-2">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7 lg:row-start-1">
            <Reveal>
              <p className="max-w-2xl font-serif text-2xl leading-[1.55] text-primary sm:text-3xl">
                {profile.heroSummary}
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-8 max-w-2xl text-base font-light leading-[1.85] text-secondary sm:text-lg">
                {profile.summary}
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-2xl text-base font-light leading-[1.85] text-secondary sm:text-lg">
                My work centers on Electrical Engineering, the Internet of
                Things, Embedded Systems, AI Integration, Software Development,
                and Full Stack Development, with a consistent focus on
                environmental and industrial monitoring applications.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-2xl text-base font-light leading-[1.85] text-secondary sm:text-lg">
                Committed to supporting operational and engineering system
                development across the energy, environmental, and manufacturing
                industries, combining field-proven instrumentation skills with
                modern software and connectivity.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-2 border-t border-line pt-8">
                {profile.roles.map((role) => (
                  <span key={role} className="chip px-4 py-2 text-[12px]">
                    {role}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
            <Reveal delay={0.1}>
              <div className="relative mx-auto w-full max-w-[380px] lg:mx-0 lg:ml-auto">
                <div
                  aria-hidden="true"
                  className="absolute -left-4 -top-4 -z-10 h-full w-full rounded-[36px] border border-accent/35"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/15 blur-[70px]"
                />
                <div className="relative aspect-[3/4] overflow-hidden rounded-[36px] border border-line bg-surface shadow-ink-lg">
                  <Image
                    src={profile.profileImage}
                    alt={profile.name}
                    fill
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* BENTO INTERESTS GRID */}
        <div className="mt-32">
          <SectionHeading index="01" title="Technical interests" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {interests.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05} className="h-full">
                <div className="card-base card-hover group flex h-full flex-col justify-between p-9">
                  <div>
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-surface text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
                      <item.icon size={24} strokeWidth={1.5} />
                    </span>
                    <h3 className="mt-8 font-serif text-2xl text-primary">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-5 text-base font-light leading-[1.75] text-secondary">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* SKILL DOMAINS BENTO */}
        <div className="mt-32">
          <SectionHeading
            index="02"
            title="Skill domains"
            right={
              <Link
                href="/skills"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary"
              >
                All skills
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            }
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((cat, i) => (
              <Reveal key={cat.name} delay={i * 0.04} className="h-full">
                <div className="card-base card-hover flex h-full flex-col justify-between p-9">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                        Domain 0{i + 1}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-accent/50"
                      />
                    </div>
                    <h3 className="mt-6 font-serif text-2xl text-primary">
                      {cat.name}
                    </h3>
                    <p className="mt-4 font-mono text-xs leading-loose text-secondary">
                      {cat.skills.join(" / ")}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-24 flex flex-col items-start justify-between gap-8 rounded-[36px] bg-primary px-8 py-12 text-background sm:px-12 lg:flex-row lg:items-center">
            <p className="max-w-xl font-serif text-3xl leading-[1.25] tracking-tight sm:text-4xl">
              Ready to connect hardware, firmware, and{" "}
              <em className="text-accent-light">cloud</em>?
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-background/25 px-8 text-background hover:border-accent-light hover:bg-accent-light hover:text-primary"
              )}
            >
              Let&apos;s Talk
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
