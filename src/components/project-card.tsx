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
        <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-glow">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={cover}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <span className="absolute left-3 top-3 rounded-full bg-surface/80 px-3 py-1 text-xs font-medium text-secondary backdrop-blur">
              {project.year}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <span className="text-xs font-medium uppercase tracking-wider text-muted">
              {project.category}
            </span>
            <h3 className="mt-1 flex items-start justify-between gap-2 text-lg font-semibold text-white">
              {project.title}
              <ArrowUpRight
                size={18}
                className="mt-1 shrink-0 text-muted transition-all group-hover:text-primary"
              />
            </h3>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
              {project.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5 pt-1">
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
