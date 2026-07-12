export interface SocialLink {
  name: string;
  href: string;
  icon: "linkedin" | "github" | "mail" | "phone" | "mapPin";
}

export interface ContactInfo {
  location: string;
  phone: string;
  email: string;
  linkedin: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  current?: boolean;
  responsibilities: string[];
  technologies?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  thesis?: string;
  details?: string[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface ProjectDocument {
  label: string;
  file: string;
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  overview: string;
  role?: string;
  github?: string;
  demo?: string;
  problem?: string;
  solution?: string;
  features: string[];
  technologies: string[];
  stack?: { name: string; description: string }[];
  hardware?: { name: string; description: string }[];
  software?: string[];
  architectureText?: string;
  architectureImage?: string;
  gallery: string[];
  contributions?: string[];
  challenges?: string[];
  lessons?: string[];
  improvements?: string[];
  documents?: ProjectDocument[];
  academic?: string;
  cover?: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  category: string;
  file?: string;
  image?: string;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  organizer: string;
  date: string;
  description: string;
  image?: string;
  file?: string;
  project?: string;
}
