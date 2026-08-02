import Link from "next/link";
import { ArrowUpRight, Linkedin, Github, Mail } from "lucide-react";
import { contact } from "@/content/social";
import { profile } from "@/content/profile";
import { navLinks } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-28 pb-8 sm:mt-36">
      <div className="section-container">
        <div className="border-t border-line pt-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-secondary">
                {contact.location}
              </p>
              <p className="mt-4 max-w-md font-serif text-3xl leading-[1.15] tracking-tight text-primary sm:text-4xl">
                Let&apos;s work{" "}
                <em className="text-accent">together.</em>
              </p>
            </div>

            <div className="flex flex-col items-start gap-6 lg:items-end">
              <a
                href={`mailto:${contact.email}`}
                className="link-underline font-mono text-sm text-primary/80 transition-colors hover:text-primary"
              >
                {contact.email}
              </a>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-medium text-background transition-all duration-300 hover:bg-accent hover:shadow-glow active:translate-y-[1px]"
              >
                Let&apos;s Talk
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-6 border-t border-line pt-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
              <span className="flex items-center gap-2 font-serif text-lg font-semibold tracking-tight text-primary">
                <span
                  aria-hidden="true"
                  className="inline-block h-2 w-2 rounded-full bg-accent"
                />
                Billy S<span className="text-accent">.</span>
              </span>
              <p className="text-[11px] tracking-[0.04em] text-secondary">
                &copy; {year} {profile.name}. All rights reserved.
              </p>
            </div>

            <ul className="hidden flex-wrap items-center gap-x-6 gap-y-2 md:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[12px] text-secondary transition-colors duration-300 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary transition-colors duration-300 hover:text-accent"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://github.com/billyshultan43"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary transition-colors duration-300 hover:text-accent"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="text-secondary transition-colors duration-300 hover:text-accent"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
              <Link
                href="#"
                className="flex items-center gap-1.5 text-[11px] text-secondary transition-colors duration-300 hover:text-primary"
              >
                Back to top
                <ArrowUpRight size={12} className="rotate-45" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
