import { PageIntro } from "@/components/page-intro";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";

export const metadata = {
  title: "Projects",
  description:
    "Engineering and software projects by Billy Shultan Al Hadiy — IoT monitoring systems, AI-integrated applications, and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="Engineering & Software Work"
        description="Each project below is documented from verified sources — the CV and project documentation."
      />

      <section className="section-container section-padding">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
