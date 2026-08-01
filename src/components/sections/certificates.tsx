import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { certificates } from "@/content/certificates";
import { achievements } from "@/content/achievements";

export function CertificatesSection() {
  const award = achievements[0];
  return (
    <section className="section-container section-padding">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-4 -top-4 h-full w-full border border-line"
              />
              <div className="relative aspect-[4/3] overflow-hidden border border-line">
                {award.image && (
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                )}
              </div>
            </div>
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              {award.date} / {award.event}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-secondary">
              {award.description}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <h2 className="font-serif text-4xl tracking-tight text-primary lg:text-5xl">
            Certificates
          </h2>
          <div className="mt-16 border-b border-line">
            {certificates.map((cert, i) => (
              <Reveal key={cert.id} delay={i * 0.08}>
                <div className="grid grid-cols-1 gap-3 border-t border-line py-8 sm:grid-cols-12 sm:items-baseline sm:gap-6">
                  <div className="sm:col-span-8">
                    <h3 className="font-serif text-xl leading-snug text-primary lg:text-2xl">
                      {cert.name}
                    </h3>
                    <p className="mt-2 text-sm text-secondary">
                      {cert.category} / {cert.issuer}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-6 sm:col-span-4 sm:flex-col sm:items-end sm:gap-2">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                      {cert.date}
                    </p>
                    {cert.file && (
                      <a
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${cert.name}`}
                        className="group inline-flex items-center gap-1 text-xs font-medium text-accent transition-colors duration-300 hover:text-accent-hover"
                      >
                        PDF
                        <ArrowUpRight
                          size={13}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
