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
        <Card className="flex h-full flex-col overflow-hidden">
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src={cover}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              {project.category} / {project.year}
            </p>
            <h3 className="mt-3 flex items-start justify-between gap-3 font-serif text-xl leading-tight text-primary">
              {project.title}
              <ArrowUpRight
                size={18}
                className="mt-1 shrink-0 text-secondary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </h3>
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-secondary">
              {project.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-line pt-5">
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
