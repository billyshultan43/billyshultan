import Link from "next/link";
import { navLinks } from "@/content/site";
import { contact, socials } from "@/content/social";
import { SocialIcon } from "./social-icon";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-surface/70">
      <div className="section-container py-20">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Link
              href="/"
              className="font-serif text-3xl leading-none tracking-tight text-primary"
            >
              Billy Shultan Al Hadiy
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-secondary">
              Electrical Engineer and IoT developer working on environmental and
              industrial monitoring systems.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-10 sm:grid-cols-3">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Navigate
              </h3>
              <ul className="mt-5 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-secondary transition-colors duration-300 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Contact
              </h3>
              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-secondary transition-colors duration-300 hover:text-primary"
                  >
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+6285711616091"
                    className="text-sm text-secondary transition-colors duration-300 hover:text-primary"
                  >
                    {contact.phone}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Connect
              </h3>
              <div className="mt-5 flex gap-3">
                {socials
                  .filter((s) => s.icon !== "mapPin")
                  .map((s) => (
                    <SocialIcon key={s.name} social={s} />
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            &copy; {year} Billy Shultan Al Hadiy. All rights reserved.
          </p>
          <p className="text-xs text-muted">{contact.location}</p>
        </div>
      </div>
    </footer>
  );
}
