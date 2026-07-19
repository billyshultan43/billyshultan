import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <Reveal as="article">
      <Link href={`/projects/${project.slug}`} className="group block h-full">
        <Card className="flex h-full flex-col overflow-hidden transition-all duration-500 hover:border-accent/25 md:flex-row">
          <div className="relative h-56 w-full overflow-hidden md:h-auto md:w-1/2">
            <Image
              src={project.gallery[0]}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent md:bg-gradient-to-r" />
          </div>
          <div className="flex flex-1 flex-col justify-center p-8">
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-secondary/70">
              {project.category} &middot; {project.year}
            </span>
            <h3 className="mt-3 flex items-start justify-between gap-3 text-2xl font-semibold text-primary">
              {project.title}
              <ArrowUpRight size={22} className="shrink-0 text-secondary transition-all duration-300 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-secondary">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 5).map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
              View details <ArrowUpRight size={15} />
            </span>
          </div>
        </Card>
      </Link>
    </Reveal>
  );
}
