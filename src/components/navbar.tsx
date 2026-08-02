"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/content/site";
import { cn } from "@/lib/utils";

function useTheme() {
  const [dark, setDark] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = React.useCallback(() => {
    setDark((prev) => {
      const next = !(prev ?? false);
      document.documentElement.classList.toggle("dark", next);
      try {
        localStorage.setItem("theme", next ? "dark" : "light");
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  return { dark, toggle };
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const { dark, toggle } = useTheme();

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-6 sm:px-10">
        <Link
          href="/"
          className="group flex items-center gap-1.5 font-serif text-lg tracking-tight text-primary"
        >
          <span className="font-serif text-lg font-semibold tracking-normal text-primary">
            BS<span className="text-accent">.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "link-underline text-[13px] font-normal tracking-[0.08em] transition-colors duration-300",
                  isActive(link.href)
                    ? "text-primary font-medium"
                    : "text-secondary hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggle}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-secondary transition-all duration-300 hover:scale-105 hover:text-primary hover:border-line-strong"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-[13px] font-medium text-background transition-all duration-300 hover:bg-accent"
          >
            Let&apos;s Talk <ArrowUpRight size={14} />
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-primary lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-background lg:hidden shadow-2xl">
          <ul className="flex flex-col px-6 py-8 sm:px-10 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line/60 pb-4 last:border-b-0">
                <Link
                  href={link.href}
                  className={cn(
                    "block font-serif text-3xl font-normal transition-colors duration-300",
                    isActive(link.href) ? "text-primary text-accent" : "text-secondary"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

