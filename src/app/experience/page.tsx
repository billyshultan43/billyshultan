import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { experience } from "@/content/experience";
import { education, organization } from "@/content/education";
import { profile } from "@/content/profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Experience",
  description:
    "Professional experience of Billy Shultan Al Hadiy in IoT, embedded systems, industrial instrumentation, and full stack development.",
};

const stats = [
  { value: "2+", label: "years of experience" },
  { value: "3", label: "major systems delivered" },
  { value: "8", label: "regions served across Indonesia & Malaysia" },
];

export default function ExperiencePage() {
  return (
    <>
      <PageIntro
        title="From the laboratory bench to the field."
        description="Professional experience spanning industrial instrumentation, IoT product development, and technical service — delivered across Indonesia and Malaysia."
        meta="Experience / 2018 — Present"
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
                Professional experience
              </h2>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-secondary">
                Full responsibilities across every role, from preventive
                maintenance to end-to-end system delivery.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            {experience.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.05}>
                <div className="border-t border-line py-12 lg:py-14">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="font-serif text-2xl leading-tight text-primary lg:text-3xl">
                      {item.role}
                    </h3>
                    {item.current && (
                      <span className="font-mono text-[11px] text-accent">
                        current
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-secondary">{item.company}</p>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {item.period}
                  </p>
                  <ul className="mt-8 max-w-3xl space-y-3">
                    {item.responsibilities.map((r, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-sm leading-relaxed text-secondary"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-2.5 w-2.5 shrink-0 border border-accent/60"
                        />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                  {item.technologies && item.technologies.length > 0 && (
                    <p className="mt-7 font-mono text-[11px] leading-loose text-muted">
                      {item.technologies.join(" / ")}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.15}>
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
                  Education
                </h2>
                <p className="mt-6 max-w-xs text-sm leading-relaxed text-secondary">
                  Electrical Engineering foundations, thesis research, and
                  university programs.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              {education.map((item) => (
                <Reveal key={item.id}>
                  <div className="border-t border-line py-10">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <h3 className="font-serif text-2xl leading-tight text-primary">
                        {item.degree}
                      </h3>
                      <p className="font-mono text-xs text-muted">
                        {item.period}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-secondary">
                      {item.institution}
                    </p>
                    {item.gpa && (
                      <p className="mt-4 text-sm text-secondary">
                        GPA:{" "}
                        <span className="font-serif text-lg italic text-primary">
                          {item.gpa}
                        </span>
                      </p>
                    )}
                    {item.thesis && (
                      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-secondary">
                        <span className="font-medium text-primary">Thesis: </span>
                        {item.thesis}
                      </p>
                    )}
                    {item.details && (
                      <ul className="mt-6 max-w-3xl space-y-3">
                        {item.details.map((d, idx) => (
                          <li
                            key={idx}
                            className="flex gap-3 text-sm leading-relaxed text-secondary"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-1.5 h-2.5 w-2.5 shrink-0 border border-accent/60"
                            />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}
              <div className="border-t border-line" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="section-container section-padding">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Reveal>
                <h2 className="font-serif text-3xl tracking-tight text-primary sm:text-4xl">
                  Organization & leadership
                </h2>
                <p className="mt-6 max-w-xs text-sm leading-relaxed text-secondary">
                  Student organization roles in planning, coordination, and
                  cross-campus collaboration.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              {organization.map((org) => (
                <Reveal key={org.id}>
                  <div className="border-t border-line py-10">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <h3 className="font-serif text-2xl leading-tight text-primary">
                        {org.role}
                      </h3>
                      <p className="font-mono text-xs text-muted">
                        {org.period}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-secondary">
                      {org.organization}
                    </p>
                    <ul className="mt-6 max-w-3xl space-y-3">
                      {org.responsibilities.map((r, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-sm leading-relaxed text-secondary"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-2.5 w-2.5 shrink-0 border border-accent/60"
                          />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
              <div className="border-t border-line" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-container pb-24 lg:pb-32">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4 border-t border-line pt-10">
            <div>
              <h2 className="font-serif text-3xl tracking-tight text-primary sm:text-4xl">
                The complete record.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-secondary">
                Certificates, achievements, and the downloadable CV are gathered
                on the resume page.
              </p>
            </div>
            <a
              href="/resume"
              className={cn(buttonVariants({ size: "lg" }), "group")}
            >
              View resume
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
