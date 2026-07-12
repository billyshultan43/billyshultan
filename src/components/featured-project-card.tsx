import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <Reveal as="article">
      <Link href={`/projects/${project.slug}`} className="group block h-full">
        <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card transition-colors duration-300 hover:border-accent/40 md:flex-row">
          <div className="relative h-56 w-full overflow-hidden md:h-auto md:w-1/2">
            <Image
              src={project.gallery[0]}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center p-7">
            <span className="text-xs font-medium uppercase tracking-wider text-secondary">
              {project.category} · {project.year}
            </span>
            <h3 className="mt-2 flex items-start justify-between gap-3 text-2xl font-semibold text-white">
              {project.title}
              <ArrowUpRight size={22} className="shrink-0 text-secondary transition-all group-hover:text-accent" />
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-secondary">{project.summary}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 5).map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
              View details <ArrowUpRight size={15} />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
