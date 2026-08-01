import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const stats = [
  { value: "2+", label: "Years of Experience" },
  { value: "3", label: "Featured Projects" },
  { value: "15+", label: "Technologies" },
  { value: "Electrical", label: "Engineer" },
  { value: "IoT", label: "Embedded Systems" },
  { value: "AI", label: "Integration" },
];

export function StatsStrip() {
  return (
    <section className="relative z-10 -mt-16 bg-background lg:-mt-24">
      <div className="section-container">
        <div className="-ml-px -mt-px grid grid-cols-2 border-b border-r border-line sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05} className="h-full">
              <div
                className={cn(
                  "flex h-full flex-col justify-between gap-6 border-l border-t border-line px-5 py-8 sm:py-10"
                )}
              >
                <p className="font-serif text-4xl italic leading-none text-primary lg:text-5xl">
                  {stat.value}
                </p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
