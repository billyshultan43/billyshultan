"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/95 backdrop-blur-sm">
      <nav className="section-container flex h-[72px] items-center justify-between">
        <Link
          href="/"
          className="text-[15px] font-medium leading-none tracking-tight text-primary"
        >
          Billy Shultan Al Hadiy
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "link-underline text-sm transition-colors duration-300",
                  isActive(link.href)
                    ? "text-accent-deep"
                    : "text-secondary hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center text-primary md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-background md:hidden">
          <ul className="section-container flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line last:border-b-0">
                <Link
                  href={link.href}
                  className={cn(
                    "block py-5 font-serif text-3xl transition-colors duration-300",
                    isActive(link.href) ? "italic text-accent" : "text-primary"
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
