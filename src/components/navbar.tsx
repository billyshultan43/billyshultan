"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/content/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background">
      <nav className="mx-auto flex h-[72px] w-full max-w-[1400px] items-center justify-between px-7 sm:px-8">
        <Link
          href="/"
          className="group flex items-center font-serif text-[22px] font-semibold tracking-tight text-primary"
        >
          BS.
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "text-[13px] font-normal tracking-[0.06em] transition-colors duration-300",
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

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-primary px-7 py-3 text-[13px] font-medium text-background transition-opacity duration-300 hover:opacity-85 sm:inline-flex"
          >
            Let&apos;s Talk
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
        <div className="border-t border-line bg-background shadow-2xl lg:hidden">
          <ul className="flex flex-col px-8 py-8 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line/60 pb-4 last:border-b-0">
                <Link
                  href={link.href}
                  className={cn(
                    "block font-serif text-3xl font-normal transition-colors duration-300",
                    isActive(link.href) ? "text-primary" : "text-secondary"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-7 py-3 text-[13px] font-medium text-background"
              >
                Let&apos;s Talk <ArrowUpRight size={14} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
