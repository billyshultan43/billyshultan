import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const cover = project.gallery[0];
  return (
    <Reveal as="article" delay={index * 0.08}>
      <Link href={`/projects/${project.slug}`} className="group block h-full">
        <Card className="flex h-full flex-col overflow-hidden transition-all duration-500 hover:border-accent/25 hover:shadow-glow">
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={cover}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
            <span className="absolute left-4 top-4 rounded-lg bg-black/50 px-3 py-1 text-xs font-medium text-primary/80 backdrop-blur-sm">
              {project.year}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-accent/60">
              {project.category}
            </span>
            <h3 className="mt-2 flex items-start justify-between gap-2 text-lg font-semibold text-primary">
              {project.title}
              <ArrowUpRight
                size={18}
                className="mt-1 shrink-0 text-secondary transition-all duration-300 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </h3>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-secondary">
              {project.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5 pt-1">
              {project.technologies.slice(0, 4).map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
        </Card>
      </Link>
    </Reveal>
  );
}
