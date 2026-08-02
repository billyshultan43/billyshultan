import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function BentoMetrics() {
  return (
    <section className="section-container pb-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Card 1: Years Experience (Dark) */}
        <Reveal className="md:col-span-6 lg:col-span-3">
          <div className="flex flex-col justify-between rounded-3xl bg-primary text-background p-10 h-full shadow-lg relative overflow-hidden group">
            <div>
              <span className="font-serif text-6xl sm:text-7xl font-normal tracking-tight text-background">
                2+
              </span>
              <h3 className="mt-4 font-serif text-2xl text-background font-normal">
                Years Experience
              </h3>
              <p className="mt-3 text-sm text-background/70 leading-relaxed">
                Engineering solutions that scale and last.
              </p>
            </div>
            <div className="mt-12 flex justify-end">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </div>
        </Reveal>

        {/* Card 2: Featured Projects (Light) */}
        <Reveal className="md:col-span-6 lg:col-span-3" delay={0.05}>
          <Link
            href="/projects"
            className="group flex flex-col justify-between rounded-3xl border border-line bg-card p-10 h-full shadow-sm transition-all duration-300 hover:border-line-strong hover:shadow-xl"
          >
            <div>
              <span className="font-serif text-6xl sm:text-7xl font-normal tracking-tight text-primary">
                3
              </span>
              <h3 className="mt-4 font-serif text-2xl text-primary font-normal">
                Featured Projects
              </h3>
              <p className="mt-3 text-sm text-secondary leading-relaxed">
                Solving real problems with technology.
              </p>
            </div>
            <div className="mt-12 flex justify-end">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:border-accent group-hover:text-accent">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Card 3: Editorial Testimonial Quote (Dark) */}
        <Reveal className="md:col-span-12 lg:col-span-6" delay={0.1}>
          <div className="flex flex-col justify-between rounded-3xl bg-primary text-background p-10 h-full shadow-lg relative overflow-hidden">
            <div>
              <span className="font-serif text-4xl text-accent">&ldquo;</span>
              <blockquote className="mt-2 font-serif text-xl sm:text-2xl italic leading-relaxed text-background/90">
                Billy is a highly skilled engineer who consistently delivers innovative solutions. His expertise in IoT and embedded systems is outstanding.
              </blockquote>
            </div>

            <div className="mt-10 flex items-center justify-between pt-6 border-t border-background/10">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-surface border border-background/20">
                  <Image
                    src="/assets/images/profile/profile.png"
                    alt="Project Manager"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-background">Project Manager</p>
                  <p className="text-xs text-background/60 font-mono">Tech Company</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="h-2 w-2 rounded-full bg-background/30" />
                <span className="h-2 w-2 rounded-full bg-background/30" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Card 4: Four Focus Sub-Tiles */}
        <Reveal className="md:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-8" delay={0.15}>
          <div className="rounded-3xl border border-line bg-card p-8 shadow-sm flex flex-col justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Tech</span>
            <p className="mt-6 font-serif text-3xl text-primary">15+</p>
            <p className="mt-1 text-xs text-secondary font-mono">Technologies practiced</p>
          </div>
          <div className="rounded-3xl border border-line bg-card p-8 shadow-sm flex flex-col justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Hardware</span>
            <p className="mt-6 font-serif text-3xl text-primary">IoT</p>
            <p className="mt-1 text-xs text-secondary font-mono">Embedded Systems</p>
          </div>
          <div className="rounded-3xl border border-line bg-card p-8 shadow-sm flex flex-col justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Intelligence</span>
            <p className="mt-6 font-serif text-3xl text-primary">AI</p>
            <p className="mt-1 text-xs text-secondary font-mono">Integration & Fuzzy Logic</p>
          </div>
          <div className="rounded-3xl border border-line bg-card p-8 shadow-sm flex flex-col justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Infrastructure</span>
            <p className="mt-6 font-serif text-3xl text-primary">Cloud</p>
            <p className="mt-1 text-xs text-secondary font-mono">Real-time Solutions</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
