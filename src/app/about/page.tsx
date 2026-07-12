import { Target, Cpu, Wrench, Sparkles } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
        eyebrow="About Me"
        title="Billy Shultan Al Hadiy"
        description="Electrical Engineer and IoT developer with a practical, hands-on engineering background."
      />

      <section className="section-container section-padding">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="text-2xl font-semibold text-white">Professional Background</h2>
              <p className="mt-4 text-base leading-relaxed text-muted">{profile.summary}</p>
            </Reveal>

            <Reveal delay={0.05}>
              <h3 className="mt-10 text-xl font-semibold text-white">Specialization</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                My work centers on Electrical Engineering, the Internet of Things (IoT),
                Embedded Systems, AI Integration, Software Development, and Full Stack
                Development — with a consistent focus on environmental and industrial
                monitoring applications.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.roles.map((r) => (
                  <Badge key={r} className="border-accent/30 bg-accent/10 text-accent">
                    {r}
                  </Badge>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="mt-10 text-xl font-semibold text-white">Career Objective</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Committed to supporting operational and engineering system development
                across the energy, environmental, and manufacturing industries — combining
                field-proven instrumentation skills with modern software and connectivity.
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <Card className="p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
                  Technical Interests
                </h3>
                <ul className="mt-4 space-y-4">
                  {interests.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-secondary">
                        <item.icon size={18} />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-white">{item.title}</p>
                        <p className="text-xs leading-relaxed text-muted">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Capabilities" title="Verified skill domains" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((cat, i) => (
              <Reveal key={cat.name} delay={i * 0.06}>
                <Card className="h-full p-5">
                  <p className="text-sm font-semibold text-white">{cat.name}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cat.skills.slice(0, 6).map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
