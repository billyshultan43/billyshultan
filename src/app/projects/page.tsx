import { PageIntro } from "@/components/page-intro";
import { ProjectsIndex } from "@/components/projects-index";

export const metadata = {
  title: "Projects",
  description:
    "Engineering and software projects by Billy Shultan Al Hadiy, IoT monitoring systems, AI-integrated applications, and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        title="Engineering & Software Work"
        description="Each project below is documented from verified sources, the CV and project documentation."
        meta="Index / 2023-2026"
        number="02"
      />
      <ProjectsIndex />
    </>
  );
}
