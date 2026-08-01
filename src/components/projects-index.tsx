import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";

export function ProjectsIndex() {
  return (
    <section className="section-container section-padding pt-4">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="group grid grid-cols-1 gap-5 border-t border-line py-10 transition-colors duration-300 hover:bg-white/40 sm:grid-cols-12 sm:items-center sm:gap-6"
        >
          <p className="font-mono text-xs text-muted sm:col-span-2">
            {project.year}
          </p>

          <div className="sm:col-span-6">
            <h2 className="font-serif text-2xl leading-tight text-primary lg:text-3xl">
              {project.title}
            </h2>
            <div className="mt-2 flex items-center gap-4">
              <p className="font-mono text-xs text-muted">{project.category}</p>
              <ArrowUpRight
                size={18}
                className="text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>
          </div>

          <div className="order-first relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-line bg-card sm:order-none sm:col-span-4 sm:w-[280px] sm:justify-self-end md:w-[320px] lg:w-[340px]">
            <Image
              src={project.gallery[0]}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, 340px"
              className="object-cover"
            />
          </div>
        </Link>
      ))}
      <div className="border-t border-line" />
    </section>
  );
}
