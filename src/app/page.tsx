import { Hero } from "@/components/hero";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/skills";
import { CertificatesSection } from "@/components/sections/certificates";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsShowcase />
      <ExperienceSection />
      <SkillsSection />
      <CertificatesSection />
      <ContactSection />
    </>
  );
}
