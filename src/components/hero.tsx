import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section className="section-container pt-6 pb-3">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10 items-start">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-secondary">
            Electrical Engineer
          </span>
          <h1 className="mt-6 font-serif text-[50px] leading-[1.06] font-normal tracking-tight text-primary">
            Billy Shultan
            <br />
            Al Hadiy<span>.</span>
          </h1>

          <p className="mt-6 max-w-[330px] text-[14px] leading-[1.55] text-secondary font-normal">
            {profile.heroSummary}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-7">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[14px] font-medium text-background transition-opacity duration-300 hover:opacity-85"
            >
              View My Work
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-primary"
            >
              About Me
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: Portrait */}
        <div className="lg:col-span-6">
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[24px] bg-card">
            <Image
              src={profile.profileImage}
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
