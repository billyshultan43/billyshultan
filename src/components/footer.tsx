import Link from "next/link";
import { ArrowUpRight, Linkedin, Github, Mail } from "lucide-react";
import { contact } from "@/content/social";
import { profile } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-7">
      <div className="section-container">
        <div className="flex items-stretch justify-between gap-8">
          <div className="flex h-[96px] flex-1 items-center justify-between rounded-[16px] bg-primary px-8 text-background lg:max-w-[620px]">
            <div>
              <h3 className="font-serif text-[22px] leading-snug">
                Let&apos;s work
                <br />
                together
              </h3>
              <p className="mt-2 font-mono text-[12px] text-background/70">
                {contact.email}
              </p>
            </div>
            <Link
              href="/contact"
              aria-label="Contact"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-background/10 transition-colors duration-300 hover:bg-background/20"
            >
              <ArrowUpRight size={18} className="text-background" />
            </Link>
          </div>

          <div className="hidden items-center gap-5 lg:flex">
            <Link
              href="/contact"
              aria-label="Start a project"
              className="flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-primary text-background transition-opacity duration-300 hover:opacity-85"
            >
              <ArrowUpRight size={20} />
            </Link>
            <div>
              <p className="text-[13px] font-medium text-primary">
                Start a project
              </p>
              <p className="mt-1 text-[11px] text-secondary">
                Available for new opportunities
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] tracking-[0.04em] text-secondary">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="https://github.com/billyshultan43"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="text-secondary transition-colors hover:text-primary"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
            <Link
              href="#"
              className="flex items-center gap-1.5 text-[11px] text-secondary transition-colors hover:text-primary"
            >
              Back to top
              <ArrowUpRight size={12} className="rotate-45" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
