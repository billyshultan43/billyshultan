import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { certificates } from "@/content/certificates";
import { achievements } from "@/content/achievements";

export function CertificatesSection() {
  const award = achievements[0];
  return (
    <section className="border-t border-line bg-surface/50">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-4 -top-4 h-full w-full border border-line-strong"
                />
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-card">
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
              <p className="mt-8 font-serif text-2xl leading-snug text-primary">
                {award.title}
              </p>
              <p className="mt-1 text-sm text-secondary">
                {award.event} / {award.date}
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-secondary">
                {award.description}
              </p>
              {award.file && (
                <Link
                  href={award.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-1.5 text-sm text-accent-deep transition-colors duration-300 hover:text-primary"
                >
                  View certificate
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              )}
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <h2 className="font-serif text-4xl tracking-tight text-primary sm:text-5xl">
                Credentials
              </h2>
            </Reveal>
            <div className="mt-14">
              {certificates.map((cert, i) => (
                <Reveal key={cert.id} delay={i * 0.08}>
                  <div className="grid grid-cols-1 gap-3 border-t border-line py-9 sm:grid-cols-12 sm:gap-6">
                    <div className="sm:col-span-9">
                      <h3 className="font-serif text-xl leading-snug text-primary lg:text-2xl">
                        {cert.name}
                      </h3>
                      <p className="mt-2 text-sm text-secondary">
                        {cert.category} / {cert.issuer}
                      </p>
                    </div>
                    <div className="flex items-center justify-between gap-4 sm:col-span-3 sm:flex-col sm:items-end sm:justify-between sm:gap-2">
                      <p className="font-mono text-xs text-muted">
                        {cert.date}
                      </p>
                      {cert.file && (
                        <a
                          href={cert.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${cert.name}`}
                          className="group inline-flex items-center gap-1 font-mono text-xs text-accent-deep transition-colors duration-300 hover:text-primary"
                        >
                          PDF
                          <ArrowUpRight
                            size={13}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <p className="mt-10 border-t border-line pt-7 font-mono text-xs leading-relaxed text-muted">
                BNSP certified, qualification 6, industrial automation / KAN
                accredited calibration chain
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
