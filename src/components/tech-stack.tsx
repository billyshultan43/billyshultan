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
    <section className="relative overflow-hidden border-t border-line py-14 lg:py-20">
      <span
        aria-hidden="true"
        className="text-outline pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-serif text-[clamp(200px,24vw,280px)] font-medium uppercase leading-none tracking-[0.02em] opacity-50"
      >
        Stack
      </span>

      <div className="section-container relative z-10">
        <Reveal>
          <div className="mx-auto flex max-w-[520px] flex-col items-center text-center">
            <h2 className="label">Technical Stack</h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-secondary">
              Engineering complete solutions from embedded hardware to
              cloud-based applications.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 max-w-5xl">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.04}>
              <div className="border-t border-line py-5">
                <h3 className="label">{cat.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-secondary">
                  {cat.items.join(" • ")}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-line" />
        </div>
      </div>
    </section>
  );
}
