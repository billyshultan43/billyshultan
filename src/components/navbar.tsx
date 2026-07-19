"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/content/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-card/80 backdrop-blur-2xl border-b border-line shadow-glass"
          : "bg-transparent"
      )}
    >
      <nav className="section-container relative flex h-18 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 text-primary font-sans tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-gradient shadow-glow">
            <span className="h-2.5 w-2.5 rounded-full bg-white/90" />
          </span>
          <span className="hidden sm:inline text-sm font-medium tracking-wide">Billy Shultan</span>
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300",
                  isActive(link.href)
                    ? "text-primary bg-white/[0.05]"
                    : "text-secondary hover:text-primary hover:bg-white/[0.03]"
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-primary md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-card/95 backdrop-blur-2xl md:hidden">
          <ul className="section-container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                    isActive(link.href)
                      ? "bg-white/[0.05] text-primary"
                      : "text-secondary hover:bg-white/[0.04] hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
}
