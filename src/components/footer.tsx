import Link from "next/link";
import { navLinks } from "@/content/site";
import { contact, socials } from "@/content/social";
import { SocialIcon } from "./social-icon";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-surface/60">
      <div className="section-container py-14">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <Link
              href="/"
              className="font-serif text-2xl leading-none tracking-tight text-primary"
            >
              Billy Shultan Al Hadiy
            </Link>
            <p className="mt-3 font-mono text-xs leading-relaxed text-muted">
              Electrical Engineer / IoT / Embedded Systems / AI Integration
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="link-underline text-sm text-secondary transition-colors duration-300 hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            &copy; {year} Billy Shultan Al Hadiy. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted">{contact.location}</p>
          <div className="flex gap-2">
            {socials
              .filter((s) => s.icon !== "mapPin")
              .map((s) => (
                <SocialIcon key={s.name} social={s} />
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
