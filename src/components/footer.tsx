import { contact } from "@/content/social";
import { Hairline } from "@/components/hairline";
import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-background">
      <div className="section-container py-14">
        <Hairline className="mb-10" />
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-secondary tracking-wider">
            &copy; {year} Billy Shultan Al Hadiy. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/billyshultan43"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="text-secondary hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

