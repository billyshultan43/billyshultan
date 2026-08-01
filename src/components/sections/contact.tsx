import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { contact } from "@/content/social";

const rows = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "Phone", value: contact.phone, href: "tel:+6285711616091" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/billyshultan",
    href: contact.linkedin,
  },
];

export function ContactSection() {
  return (
    <section className="border-t border-line">
      <div className="section-container section-padding">
        <Reveal>
          <h2 className="max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Open for engineering roles and collaborations.
          </h2>
        </Reveal>
        <div className="mt-16">
          {rows.map((row, i) => (
            <Reveal key={row.label} delay={i * 0.06}>
              <a
                href={row.href}
                target={row.href.startsWith("http") ? "_blank" : undefined}
                rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group grid grid-cols-1 items-baseline gap-3 border-t border-line py-9 sm:grid-cols-12 sm:gap-6 lg:py-11"
              >
                <p className="font-mono text-xs text-muted sm:col-span-3">
                  {row.label}
                </p>
                <p className="font-serif text-2xl leading-tight text-primary transition-colors duration-300 group-hover:text-accent sm:col-span-8 lg:text-4xl">
                  {row.value}
                </p>
                <ArrowUpRight
                  size={20}
                  className="hidden justify-self-end text-secondary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent sm:col-span-1 sm:block"
                />
              </a>
            </Reveal>
          ))}
          <div className="grid grid-cols-1 items-baseline gap-3 border-t border-line py-9 sm:grid-cols-12 sm:gap-6">
            <p className="font-mono text-xs text-muted sm:col-span-3">Location</p>
            <p className="text-sm leading-relaxed text-secondary sm:col-span-8">
              {contact.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
