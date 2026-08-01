"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background">
      <nav className="mx-auto flex h-[72px] w-full max-w-[1920px] items-center justify-between px-6 sm:px-10 xl:px-[72px]">
        <Link
          href="/"
          className="text-[13px] font-normal tracking-[0.08em] text-primary"
        >
          Billy Shultan
        </Link>

        <ul className="hidden items-center gap-12 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "link-underline text-[13px] font-normal tracking-[0.08em] transition-colors duration-300",
                  isActive(link.href)
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={toggle}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            className="inline-flex h-6 w-6 items-center justify-center text-secondary transition-transform duration-300 hover:scale-110 hover:text-primary"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center text-primary lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-background lg:hidden">
          <ul className="flex flex-col px-6 py-4 sm:px-10">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line last:border-b-0">
                <Link
                  href={link.href}
                  className={cn(
                    "block py-5 font-serif text-3xl font-normal transition-colors duration-300",
                    isActive(link.href) ? "text-primary" : "text-secondary"
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
