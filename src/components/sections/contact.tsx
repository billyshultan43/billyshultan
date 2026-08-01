import { ArrowUpRight, Download } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { contact } from "@/content/social";
import { profile } from "@/content/profile";

const rows = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "Phone", value: contact.phone, href: "tel:+6285711616091" },
  { label: "LinkedIn", value: "linkedin.com/in/billyshultan", href: contact.linkedin },
];

export function ContactSection() {
  return (
    <section className="section-container section-padding">
      <h2 className="font-serif text-4xl tracking-tight text-primary lg:text-5xl">
        Contact
      </h2>
      <div className="mt-16 border-b border-line">
        {rows.map((row, i) => (
          <Reveal key={row.label} delay={i * 0.06}>
            <a
              href={row.href}
              target={row.href.startsWith("http") ? "_blank" : undefined}
              rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group grid grid-cols-1 items-baseline gap-2 border-t border-line py-8 sm:grid-cols-12 sm:gap-6"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted sm:col-span-3">
                {row.label}
              </p>
              <p className="font-serif text-2xl leading-tight text-primary transition-colors duration-300 group-hover:text-accent sm:col-span-8 lg:text-4xl">
                {row.value}
              </p>
              <ArrowUpRight
                size={20}
                className="hidden justify-self-end text-secondary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent sm:col-span-1 sm:block"
              />
            </a>
          </Reveal>
        ))}
        <div className="grid grid-cols-1 items-baseline gap-2 border-t border-line py-8 sm:grid-cols-12 sm:gap-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted sm:col-span-3">
            Location
          </p>
          <p className="text-sm leading-relaxed text-secondary sm:col-span-8">
            {contact.location}
          </p>
        </div>
      </div>
      <div className="mt-12">
        <a
          href={profile.cvFile}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "group")}
        >
          Download CV
          <Download
            size={16}
            className="transition-transform duration-300 group-hover:translate-y-0.5"
          />
        </a>
      </div>
    </section>
  );
}
