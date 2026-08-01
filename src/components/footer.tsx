import Link from "next/link";
import { navLinks, secondaryLinks } from "@/content/site";
import { contact } from "@/content/social";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-background">
      <div className="mx-auto w-full max-w-[1920px] px-6 pb-10 pt-12 sm:px-10 xl:px-[72px]">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-start">
          <div>
            <Link
              href="/"
              className="text-[13px] font-normal tracking-[0.08em] text-primary"
            >
              Billy Shultan
            </Link>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-secondary">
              Electrical Engineer / IoT / Embedded Systems / AI Integration
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline text-[13px] font-normal tracking-[0.08em] text-secondary transition-colors duration-300 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            {secondaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline text-[13px] font-normal tracking-[0.08em] text-secondary transition-colors duration-300 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
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
