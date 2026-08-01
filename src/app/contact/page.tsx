import { Mail, Linkedin, Phone } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { contact, socials } from "@/content/social";
import { profile } from "@/content/profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Billy Shultan Al Hadiy, Electrical Engineer & IoT Developer based in Jakarta Barat, Indonesia.",
};

const socialButtons = socials.filter((s) => s.icon === "mail" || s.icon === "linkedin");

export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="Contact"
        description="Reach out for engineering, IoT, or full stack opportunities."
      />

      <section className="section-container section-padding">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="flex flex-col gap-3">
              {socialButtons.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-14 w-full justify-start gap-3 px-6 text-base"
                  )}
                >
                  {s.icon === "mail" ? <Mail size={20} /> : <Linkedin size={20} />}
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-sm font-normal text-secondary">
                      {s.icon === "mail" ? "Email" : "LinkedIn"}
                    </span>
                    <span className="font-medium">
                      {s.icon === "mail" ? contact.email : "linkedin.com/in/billyshultan"}
                    </span>
                  </span>
                </a>
              ))}
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-secondary">
              <Phone size={15} className="text-accent" /> {contact.phone}
            </p>
            <a
              href={profile.cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), "mt-6 h-12")}
            >
              Download CV
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="p-8">
              <h2 className="font-serif text-xl text-primary">Send a message</h2>
              <p className="mt-1 text-sm text-secondary">
                Fill the form below and I&apos;ll get back to you.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
