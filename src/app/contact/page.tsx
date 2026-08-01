import { ArrowUpRight, FileDown } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { contact } from "@/content/social";
import { profile } from "@/content/profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Billy Shultan Al Hadiy, Electrical Engineer & IoT Developer based in Jakarta Barat, Indonesia.",
};

const rows = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/billyshultan",
    href: contact.linkedin,
  },
  { label: "Phone", value: contact.phone, href: "tel:+6285711616091" },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="Contact"
        description="Reach out for engineering, IoT, or full stack opportunities."
        meta="Contact / Jakarta Barat, DKI Jakarta"
      />

      <section className="section-container section-padding pt-2">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <a
                href={`mailto:${contact.email}`}
                className="group inline-block max-w-full break-words font-serif text-2xl leading-tight text-primary transition-colors duration-300 hover:text-accent sm:text-3xl"
              >
                {contact.email}
              </a>
            </Reveal>
            <div className="mt-12">
              {rows.map((row, i) => (
                <Reveal key={row.label} delay={i * 0.05}>
                  <a
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      row.href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    className="group flex items-baseline justify-between gap-6 border-t border-line py-5"
                  >
                    <span className="font-mono text-xs text-muted">
                      {row.label}
                    </span>
                    <span className="text-right text-sm text-secondary transition-colors duration-300 group-hover:text-primary">
                      {row.value}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-secondary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </a>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <div className="mt-10">
                <a
                  href={profile.cvFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "group")}
                >
                  Download CV
                  <FileDown
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="border border-line bg-card p-8">
                <h2 className="font-serif text-xl text-primary">
                  Send a message
                </h2>
                <p className="mt-1 text-sm text-secondary">
                  Fill the form below and I&apos;ll get back to you.
                </p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
