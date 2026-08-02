"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/content/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
  });

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-5 sm:px-6">
      <nav
        className={cn(
          "glass mx-auto flex h-16 max-w-[1330px] items-center justify-between rounded-full pl-6 pr-3 transition-all duration-500 sm:pl-8 sm:pr-4",
          scrolled && !open && "shadow-lift"
        )}
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-serif text-[21px] font-semibold tracking-tight text-primary"
        >
          <span
            aria-hidden="true"
            className="inline-block h-2.5 w-2.5 rounded-full bg-accent/90 transition-transform duration-300 group-hover:scale-125"
          />
          Billy S.
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative block rounded-full px-4 py-2 text-[13px] font-normal tracking-[0.02em] transition-colors duration-300",
                    active
                      ? "text-primary font-medium"
                      : "text-secondary hover:text-primary"
                  )}
                >
                  {active && !reduce && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-surface shadow-sm ring-1 ring-line"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="group hidden items-center gap-1.5 rounded-full bg-primary px-6 py-2.5 text-[13px] font-medium text-background transition-all duration-300 hover:bg-accent hover:shadow-glow active:translate-y-[1px] sm:inline-flex"
          >
            Let&apos;s Talk
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-primary transition-colors duration-300 hover:border-accent lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="glass mx-auto mt-3 max-w-[1330px] overflow-hidden rounded-[28px] shadow-ink-lg lg:hidden"
          >
            <ul className="flex flex-col p-5">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.35 }}
                >
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3.5 font-serif text-2xl transition-colors duration-300",
                      isActive(link.href)
                        ? "bg-surface text-primary"
                        : "text-secondary hover:bg-surface/60 hover:text-primary"
                    )}
                  >
                    {link.label}
                    <span className="font-mono text-[11px] tracking-[0.2em] text-muted">
                      0{i + 1}
                    </span>
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.35 }}
                className="pt-3"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-background transition-colors duration-300 hover:bg-accent"
                >
                  Let&apos;s Talk <ArrowUpRight size={15} />
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
