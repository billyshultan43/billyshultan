import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { Reveal } from "@/components/reveal";

export function ProjectsShowcase() {
  const [first, ...rest] = projects;

  return (
    <section id="work" className="section-container section-padding scroll-mt-24">
      <Reveal>
        <h2 className="font-serif text-4xl tracking-tight text-primary sm:text-5xl">
          Selected work
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-secondary">
          Three systems, documented end to end, from schematic to deployed
          instrument.
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <Link href={`/projects/${first.slug}`} className="group mt-16 block">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7 lg:mt-16">
              <div className="relative aspect-[4/3] overflow-hidden border border-line bg-card sm:aspect-[16/11]">
                <Image
                  src={first.gallery[0]}
                  alt={first.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between lg:col-span-4 lg:col-start-9 lg:pt-0">
              <div>
                <p className="font-mono text-xs text-secondary">
                  {first.year} / {first.category}
                </p>
                <h3 className="mt-6 font-serif text-3xl leading-tight text-primary transition-colors duration-500 group-hover:italic group-hover:text-accent lg:text-4xl">
                  {first.title}
                </h3>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-secondary">
                  {first.summary}
                </p>
              </div>
              <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
                <p className="font-mono text-xs text-muted">{first.role}</p>
                <ArrowUpRight
                  size={22}
                  className="text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </div>
          </div>
        </Link>
      </Reveal>

      <div className="mt-24 grid grid-cols-1 gap-20 lg:gap-8">
        {rest.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.06}>
            <Link href={`/projects/${project.slug}`} className="group block">
              {i === 0 ? (
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
                  <div className="flex flex-col justify-end lg:col-span-5 lg:pt-32">
                    <div>
                      <p className="font-mono text-xs text-secondary">
                        {project.year} / {project.category}
                      </p>
                      <h3 className="mt-6 font-serif text-2xl leading-tight text-primary transition-colors duration-500 group-hover:italic group-hover:text-accent lg:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-5 max-w-md text-sm leading-relaxed text-secondary">
                        {project.summary}
                      </p>
                    </div>
                    <div className="mt-8 flex items-center justify-between border-t border-line pt-5">
                      <p className="font-mono text-xs text-muted">
                        {project.role}
                      </p>
                      <ArrowUpRight
                        size={20}
                        className="text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-6 lg:col-start-7 lg:-mt-16">
                    <div className="relative aspect-[4/5] overflow-hidden border border-line bg-card">
                      <Image
                        src={project.gallery[0]}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-8">
                  <div className="lg:col-span-5">
                    <div className="relative aspect-[16/10] overflow-hidden border border-line bg-card">
                      <Image
                        src={project.gallery[0]}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-6 lg:col-start-8">
                    <p className="font-mono text-xs text-secondary">
                      {project.year} / {project.category}
                    </p>
                    <h3 className="mt-6 font-serif text-2xl leading-tight text-primary transition-colors duration-500 group-hover:italic group-hover:text-accent lg:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-5 max-w-md text-sm leading-relaxed text-secondary">
                      {project.summary}
                    </p>
                    <div className="mt-8 flex items-center justify-between border-t border-line pt-5">
                      <p className="font-mono text-xs text-muted">
                        {project.role}
                      </p>
                      <ArrowUpRight
                        size={20}
                        className="text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              )}
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
