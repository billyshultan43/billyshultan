import Link from "next/link";
import { contact } from "@/content/social";

const links = [
  { label: "GitHub", href: "https://github.com/billyshultan43" },
  { label: "LinkedIn", href: "https://linkedin.com/in/billyshultan" },
  { label: "Email", href: "mailto:billyshultan00@email.com" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-background">
      <div className="mx-auto w-full max-w-[1920px] px-6 pb-10 pt-12 sm:px-10 xl:px-[72px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <Link
              href="/"
              className="text-[13px] font-normal tracking-[0.08em] text-primary"
            >
              Billy Shultan
            </Link>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-secondary">
              Electrical Engineer / IoT / Embedded Systems / AI Integration
            </p>
          </div>

          <div className="flex gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="link-underline text-[13px] font-normal tracking-[0.08em] text-secondary transition-colors duration-300 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-secondary">
            &copy; {year} Billy Shultan Al Hadiy. All rights reserved.
          </p>
          <p className="text-[13px] uppercase tracking-[0.2em] text-secondary">
            {contact.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
