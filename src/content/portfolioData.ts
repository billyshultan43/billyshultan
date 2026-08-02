import { profile } from "./profile";
import { projects } from "./projects";
import { experience } from "./experience";
import { skills } from "./skills";
import { contact, socials } from "./social";
import { certificates } from "./certificates";
import { achievements } from "./achievements";

export interface ProjectModel {
  id: string;
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string;
  description: string;
  longDescription: string;
  metrics: string[];
  tags: string[];
  image: string;
  aspectRatio: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  architecture: string[];
  hardware?: { name: string; description: string }[];
  software?: string[];
  gallery?: string[];
  documents?: { label: string; file: string }[];
}

export interface ExperienceModel {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export const portfolioData = {
  profile: {
    name: profile.name,
    title: "Electrical Engineer • IoT • Embedded Systems",
    location: contact.location,
    status: "Available for IoT, Embedded & Full Stack Engineering",
    email: contact.email,
    github: "https://github.com/billyshultan",
    linkedin: contact.linkedin,
    bio: profile.summary,
    heroSummary: profile.heroSummary,
    cvFile: profile.cvFile,
    profileImage: profile.profileImage,
  },
  projects: projects.map((p) => ({
    id: p.slug,
    slug: p.slug,
    title: p.title,
    client: p.category.includes("IoT") ? "IoT & Environmental Systems" : "Web & Enterprise Software",
    year: p.year,
    category: p.category,
    description: p.summary,
    longDescription: p.overview,
    metrics: p.features.slice(0, 3),
    tags: p.technologies,
    image: p.gallery[0] || "/assets/images/profile/profile.png",
    aspectRatio: "aspect-[16/10]",
    featured: true,
    liveUrl: p.demo,
    githubUrl: p.github,
    architecture: p.hardware ? p.hardware.map(h => `${h.name}: ${h.description}`) : p.features.slice(0, 3),
    hardware: p.hardware,
    software: p.software,
    gallery: p.gallery,
    documents: p.documents,
  })) as ProjectModel[],
  experience: experience.map((e) => ({
    id: e.id,
    role: e.role,
    company: e.company,
    period: e.period,
    description: e.responsibilities[0] || "",
    highlights: e.responsibilities,
    skills: e.technologies || [],
  })) as ExperienceModel[],
  skills: skills,
  certificates: certificates,
  achievements: achievements,
  contact: contact,
  socials: socials,
};
