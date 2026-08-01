import { Linkedin, Mail, Phone } from "lucide-react";
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
  { label: "Email", href: `mailto:${contact.email}`, icon: Mail },
  { label: "LinkedIn", href: contact.linkedin, icon: Linkedin },
  { label: "WhatsApp", href: "https://wa.me/6285711616091", icon: Phone },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="Contact"
        description="Reach out for engineering, IoT, or full stack opportunities."
        meta="Contact / Jakarta Barat, DKI Jakarta"
      />

      <section className="section-container relative overflow-hidden section-padding pt-2">
        <BackgroundWord
          text="Let's Talk"
          className="left-auto right-0 -translate-y-1/2 text-[clamp(120px,15vw,230px)]"
        />
        <div className="relative z-10 grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Reveal>
              <div className="flex items-start justify-center gap-10 sm:gap-14">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="link-underline group inline-flex flex-col items-center gap-3 opacity-80 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-100"
                  >
                    <item.icon size={18} strokeWidth={1.5} className="text-primary" />
                    <span className="text-[11px] uppercase tracking-[0.28em] text-secondary">
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="md:col-span-7">
            <div className="border border-line bg-card p-8 sm:p-10">
              <h2 className="font-serif text-xl text-primary">
                Send a message
              </h2>
              <p className="mt-1 text-sm text-secondary">
                Fill the form below and I&apos;ll get back to you.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
