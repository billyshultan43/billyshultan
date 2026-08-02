import { BackgroundWord } from "@/components/background-word";
import { BlueprintLines } from "@/components/blueprint-lines";
import { Hairline } from "@/components/hairline";
import { Reveal } from "@/components/reveal";

const categories = [
  {
    title: "Hardware & Embedded",
    items: [
      "ESP32",
      "Arduino",
      "Sensors & Actuators",
      "Relay Control",
      "Industrial Instrumentation",
    ],
  },
  {
    title: "Industrial Communication",
    items: ["Modbus RTU", "RS485", "UART", "I²C"],
  },
  {
    title: "Software Development",
    items: ["Laravel", "Flutter", "Next.js", "React", "Python", "PHP", "JavaScript"],
  },
  {
    title: "Backend & Database",
    items: ["Supabase", "PostgreSQL", "MySQL", "REST API", "SQL"],
  },
  {
    title: "Deployment",
    items: ["GitHub", "Vercel"],
  },
];

export function TechStack() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-surface/30">
      <Hairline />

      <BackgroundWord
        text="Stack"
        className="left-0 -translate-y-1/2 text-[clamp(200px,24vw,280px)] opacity-60"
      />

      <BlueprintLines />

      <div className="section-container relative z-10">
        <Reveal>
          <div className="mx-auto flex max-w-[600px] flex-col items-center text-center">
            <span className="label text-accent">Technical Stack</span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-primary tracking-tight">
              Instruments & Frameworks
            </h2>
            <p className="mt-4 text-base leading-relaxed text-secondary">
              Engineering complete solutions from embedded hardware to
              cloud-based applications.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {categories.map((cat, i) => {
            const isFeatured = i === 2 || i === 3;
            return (
              <Reveal key={cat.title} delay={i * 0.05} className={isFeatured ? "md:col-span-2 lg:col-span-1" : ""}>
                <div className="flex flex-col justify-between rounded-2xl border border-line bg-card p-8 h-full transition-all duration-300 hover:border-line-strong hover:shadow-lg">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                      Domain 0{i + 1}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl text-primary font-normal">
                      {cat.title}
                    </h3>
                  </div>
                  <div className="mt-8 pt-6 border-t border-line/60">
                    <p className="font-mono text-xs leading-relaxed text-secondary">
                      {cat.items.join(" / ")}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
