import Link from "next/link";
import { Cpu } from "lucide-react";
import { navLinks } from "@/content/site";
import { socials } from "@/content/social";
import { SocialIcon } from "./social-icon";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-card/40">
      <div className="section-container grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Link href="/" className="flex items-center gap-2 font-semibold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-gradient">
              <Cpu size={18} />
            </span>
            <span>Billy Shultan Al Hadiy</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Electrical Engineer & IoT Developer focused on environmental monitoring,
            embedded systems, and AI-integrated solutions.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Navigation
          </h3>
          <ul className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
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
      <div className="border-t border-white/10 py-6">
        <p className="section-container text-center text-xs text-muted">
          © {year} Billy Shultan Al Hadiy. All rights reserved. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
