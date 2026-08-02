import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
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

      <section className="section-container relative overflow-hidden section-padding pt-2 pb-36">
        <BackgroundWord
          text="Let's Talk"
          className="left-auto right-0 -translate-y-1/2 text-[clamp(120px,15vw,230px)] opacity-60"
        />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Direct Inquiries</span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl tracking-tight text-primary">
                Get in touch.
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-secondary">
                Whether you have an engineering project, an IoT development inquiry, or want to discuss collaboration across hardware and software systems, my inbox is open.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 pt-4">
              {contactItems.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.05}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-6 rounded-[28px] border border-line bg-card p-8 transition-all duration-300 hover:border-line-strong hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-surface border border-line text-accent shadow-sm">
                      <item.icon size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                        {item.label}
                      </span>
                      <p className="mt-1 text-sm sm:text-base font-medium text-primary transition-colors group-hover:text-accent">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="lg:col-span-7">
            <div className="rounded-[36px] border border-line bg-card p-8 sm:p-14 shadow-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Secure Channel
              </span>
              <h3 className="mt-2 font-serif text-3xl text-primary font-normal">
                Send a message
              </h3>
              <p className="mt-2 text-sm text-secondary">
                Fill the form below and I&apos;ll get back to you promptly.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
