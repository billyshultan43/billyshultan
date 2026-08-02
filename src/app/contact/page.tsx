import { Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { BackgroundWord } from "@/components/background-word";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { contact } from "@/content/social";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Billy Shultan Al Hadiy, Electrical Engineer & IoT Developer based in Jakarta Barat, Indonesia.",
};

const contactItems = [
  { label: "Email", href: `mailto:${contact.email}`, icon: Mail, value: contact.email },
  { label: "LinkedIn", href: contact.linkedin, icon: Linkedin, value: "linkedin.com/in/billyshultan" },
  { label: "WhatsApp", href: "https://wa.me/6285711616091", icon: Phone, value: "+62 857-1161-6091" },
  { label: "Location", href: "#", icon: MapPin, value: contact.location },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="Contact"
        description="Reach out for engineering, IoT, or full stack opportunities."
        meta="Contact / Jakarta Barat, DKI Jakarta"
      />

      <section className="section-container relative overflow-hidden pb-28 pt-2">
        <BackgroundWord
          text="Let's Talk"
          className="left-auto right-0 -translate-y-1/2 text-[clamp(110px,14vw,210px)] opacity-40"
        />
        <div className="relative z-10 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-serif text-4xl leading-[1.08] tracking-tight text-primary sm:text-5xl">
                Get in touch.
              </h2>
              <p className="mt-6 max-w-md text-base font-light leading-[1.85] text-secondary sm:text-lg">
                Whether you have an engineering project, an IoT development
                inquiry, or want to discuss collaboration across hardware and
                software systems, my inbox is open.
              </p>
            </Reveal>

            <div className="mt-10 border-t border-line">
              {contactItems.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.05}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-6 border-b border-line py-6 transition-colors duration-300 hover:bg-surface/50"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-card text-accent transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-background">
                      <item.icon size={19} strokeWidth={1.5} />
                    </span>
                    <div className="flex-1">
                      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                        {item.label}
                      </span>
                      <p className="mt-1 text-sm font-medium text-primary sm:text-base">
                        {item.value}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={17}
                      className="text-line-strong transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-3">
                {["IoT Systems", "Embedded", "AI Integration", "Full Stack"].map(
                  (tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7" delay={0.08}>
            <div className="card-base relative overflow-hidden p-7 shadow-lift sm:p-12">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-[80px]"
              />
              <div className="relative">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                  Secure Channel
                </span>
                <h3 className="mt-2.5 font-serif text-3xl text-primary">
                  Send a message
                </h3>
                <p className="mt-2 text-sm font-light text-secondary">
                  Fill the form below and I&apos;ll get back to you promptly.
                </p>
                <div className="mt-9">
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
