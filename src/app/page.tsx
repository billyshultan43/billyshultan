import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { contact } from "@/content/social";

const projectCards = [
  { project: projects[0], index: "01", caption: "Environmental Monitoring" },
  { project: projects[2], index: "02", caption: "Vehicle Emission" },
  { project: projects[1], index: "03", caption: "AI Cashier System" },
];

const stats = [
  { value: "2+", label: "Years" },
  { value: "3", label: "Projects" },
  { value: "15+", label: "Technologies" },
  { value: "∞", label: "Ideas" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ABOUT STRIP */}
      <section className="section-container mt-3">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[176px_179px_320px_82px_209px] lg:gap-0 lg:h-[230px]">
          <div className="flex h-[230px] flex-col justify-between rounded-[16px] bg-primary p-7 text-background">
            <span className="font-serif text-[56px] leading-none">2+</span>
            <div>
              <h3 className="font-serif text-[22px] leading-tight">
                Years of
                <br />
                Experience
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-background/65">
                Engineering solutions that scale and last.
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <p className="pt-16 pl-9 font-mono text-[11px] uppercase tracking-[0.3em] text-secondary">
              About
            </p>
          </div>

          <div className="flex h-[230px] flex-col justify-center rounded-[16px] bg-primary p-7 text-background">
            <p className="font-serif text-[17px] leading-[1.6]">
              Electrical Engineer with a passion for IoT, embedded systems, and
              AI integration.
            </p>
            <p className="mt-4 text-[13px] leading-relaxed text-background/65">
              I build end-to-end connected systems for industrial and
              environmental monitoring.
            </p>
          </div>

          <div className="hidden lg:block" />

          <div className="hidden flex-col justify-center px-2 lg:flex">
            <p className="text-[12px] text-secondary">{contact.location}</p>
            <p className="mt-1.5 text-[13px] font-medium text-primary">
              {contact.email}
            </p>
            <div className="my-5 h-px w-full bg-line" />
            <p className="text-[12px] text-secondary">Open to collaboration</p>
            <Link
              href="/contact"
              className="group mt-1.5 inline-flex items-center gap-1.5 text-[13px] font-medium text-primary"
            >
              Get in touch
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECT CARDS */}
      <section className="section-container mt-7">
        <div className="flex flex-col gap-4 lg:block lg:ml-auto lg:mr-5 lg:w-fit">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-0">
            <div className="lg:mr-[37px]">
              <Link
                href={`/projects/${projectCards[0].project.slug}`}
                className="block h-[120px] w-full overflow-hidden rounded-[14px] bg-primary lg:w-[214px]"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={projectCards[0].project.gallery[0]}
                    alt={projectCards[0].project.title}
                    fill
                    className="object-cover opacity-55"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-primary/85" />
                  <span className="absolute left-4 top-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-background/80">
                    {projectCards[0].project.year}
                  </span>
                  <span className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-2 text-[13px] font-medium leading-tight text-background">
                    Ambient Monitoring
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
              <p className="mt-2.5 text-[11px] text-secondary">
                {projectCards[0].caption}
              </p>
            </div>

            <div className="lg:mr-[11px]">
              <Link
                href={`/projects/${projectCards[1].project.slug}`}
                className="block h-[120px] w-full overflow-hidden rounded-[14px] bg-primary lg:w-[198px]"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={projectCards[1].project.gallery[0]}
                    alt={projectCards[1].project.title}
                    fill
                    className="object-cover opacity-55"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-primary/85" />
                  <span className="absolute left-4 top-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-background/80">
                    {projectCards[1].project.year}
                  </span>
                  <span className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-2 text-[13px] font-medium leading-tight text-background">
                    Vehicle Emission
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
              <p className="mt-2.5 text-[11px] text-secondary">
                {projectCards[1].caption}
              </p>
            </div>

            <div>
              <Link
                href={`/projects/${projectCards[2].project.slug}`}
                className="block h-[120px] w-full overflow-hidden rounded-[14px] bg-primary lg:w-[236px]"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={projectCards[2].project.gallery[0]}
                    alt={projectCards[2].project.title}
                    fill
                    className="object-cover opacity-55"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-primary/85" />
                  <span className="absolute left-4 top-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-background/80">
                    {projectCards[2].project.year}
                  </span>
                  <span className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-2 text-[13px] font-medium leading-tight text-background">
                    Smart POS
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
              <p className="mt-2.5 text-[11px] text-secondary">
                {projectCards[2].caption}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED TEXT */}
      <section className="section-container mt-7">
        <div className="lg:ml-auto lg:max-w-[635px]">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-secondary">
            Featured Projects
          </span>
          <h2 className="mt-4 font-serif text-[42px] leading-[1.12] tracking-tight text-primary">
            Building solutions that make an impact.
          </h2>
          <p className="mt-5 text-[15px] leading-[1.7] text-secondary">
            Explore selected projects that showcase my work across IoT,
            embedded systems, and full-stack development.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-primary"
            >
              View all projects
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <p className="text-[12px] text-secondary">
              {projects.length} projects and counting
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="section-container mt-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-0">
          <div className="lg:col-span-7 lg:pr-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-secondary">
              — Contact
            </span>
            <h2 className="mt-4 font-serif text-[40px] leading-[1.12] tracking-tight text-primary">
              Let&apos;s build something
              <br />
              amazing together.
            </h2>
            <p className="mt-6 max-w-[420px] text-[15px] leading-[1.7] text-secondary">
              I&apos;m always open to discussing new projects, collaborations,
              or opportunities across engineering, IoT, and software
              development.
            </p>
            <p className="mt-4 max-w-[420px] text-[15px] leading-[1.7] text-secondary">
              Currently focused on environmental monitoring and AI-integrated
              systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <span className="font-serif text-[30px] leading-none text-primary">
                    {s.value}
                  </span>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-secondary">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-2 text-[14px] font-medium text-primary"
            >
              Get In Touch
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <div className="flex h-[300px] w-[200px] flex-col justify-center rounded-[16px] bg-primary p-6 text-background lg:mr-5">
              <p className="font-serif text-[19px] italic leading-[1.5]">
                Passionate about creating intelligent systems that improve
                lives.
              </p>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-background/60">
                — {profile.name.split(" ")[0]} {profile.name.split(" ")[1]?.charAt(0)}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
