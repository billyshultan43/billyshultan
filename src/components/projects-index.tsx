import { BentoProjects } from "@/components/bento-projects";
import { projects } from "@/content/projects";

export function ProjectsIndex() {
  return (
    <section className="section-container section-padding pt-4">
      <BentoProjects projects={projects} />
    </section>
  );
}
