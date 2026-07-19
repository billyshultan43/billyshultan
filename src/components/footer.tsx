import Link from "next/link";
import { navLinks } from "@/content/site";
import { socials } from "@/content/social";
import { SocialIcon } from "./social-icon";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-card/30">
      <div className="section-container grid gap-10 py-16 md:grid-cols-3">
        <div>
          <Link href="/" className="flex items-center gap-3 font-medium text-primary">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/20">
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-sm">Billy Shultan Al Hadiy</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-secondary">
            Electrical Engineer & IoT Developer focused on environmental monitoring,
            embedded systems, and AI-integrated solutions.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">
            Navigation
          </h3>
          <ul className="grid grid-cols-2 gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-secondary transition-colors duration-200 hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">
            Connect
          </h3>
          <div className="flex gap-3">
            {socials
              .filter((s) => s.icon !== "mapPin")
              .map((s) => (
                <SocialIcon key={s.name} social={s} />
              ))}
          </div>
        </div>
      </div>
      <div className="border-t border-line/50 py-6">
        <p className="section-container text-center text-xs text-secondary/60">
          &copy; {year} Billy Shultan Al Hadiy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
