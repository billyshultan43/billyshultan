import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { ProjectsIndex } from "@/components/projects-index";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { TechStack } from "@/components/tech-stack";
import { ContactForm } from "@/components/contact-form";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-emerald-500/35 selection:text-emerald-250">
      <main>
        <Hero />
        <Manifesto />
        <ProjectsIndex />
        <ExperienceTimeline />
        <TechStack />
        <ContactForm />
      </main>
    </div>
  );
}
