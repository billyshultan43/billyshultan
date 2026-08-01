import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hairline } from "@/components/hairline";
import { ParallaxWord } from "@/components/parallax-word";
import { Reveal } from "@/components/reveal";
import { projects } from "@/content/projects";

export function ProjectsIndex() {
  return (
    <section className="section-container relative overflow-hidden section-padding pt-4">
      <ParallaxWord
        text="Projects"
        className="-translate-x-1/2 -translate-y-1/2 text-[clamp(130px,16vw,250px)] opacity-50"
      />
      <div className="relative z-10">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.06}>
            <div>
              <Hairline />
              <Link
                href={`/projects/${project.slug}`}
                className="group grid grid-cols-1 gap-6 py-12 transition-colors duration-300 hover:bg-white/40 sm:grid-cols-12 sm:items-center sm:gap-6"
              >
                <p className="font-mono text-xs text-muted sm:col-span-2">
                  {project.year}
                </p>

                <div className="sm:col-span-5">
                  <h2 className="font-serif text-2xl leading-tight text-primary lg:text-3xl">
                    {project.title}
                  </h2>
                  <div className="mt-2 flex items-center gap-4">
                    <p className="font-mono text-xs text-muted">
                      {project.category}
                    </p>
                    <ArrowUpRight
                      size={18}
                      className="text-primary transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </div>
                </div>

                <div className="order-first relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-line bg-card sm:order-none sm:col-span-5 sm:w-[300px] sm:justify-self-end md:w-[360px] lg:w-[420px]">
                  <Image
                    src={project.gallery[0]}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 420px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </Link>
            </div>
          </Reveal>
        ))}
        <Hairline />
      </div>
    </section>
  );
}
