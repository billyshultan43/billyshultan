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
];

const deployment = ["GitHub", "Vercel"];

export function TechStack() {
  return (
    <section className="relative overflow-hidden border-t border-line py-24 lg:py-32">
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
            <p className="mt-5 text-[15px] leading-[1.7] text-secondary">
              Engineering complete solutions from embedded hardware to
              cloud-based applications.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-x-16 gap-y-16 md:grid-cols-2 lg:gap-x-24">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.05}>
              <div className="border-t border-line pt-5">
                <h3 className="label">{cat.title}</h3>
                <div className="mt-4 border-t border-line/50" />
                <ul className="mt-5 space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item} className="text-[15px] text-secondary">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <div className="mx-auto flex w-full max-w-[300px] flex-col items-center border-t border-line pt-5 text-center md:col-span-2">
              <h3 className="label">Deployment</h3>
              <div className="mt-4 h-px w-12 bg-line/50" />
              <ul className="mt-5 space-y-2.5">
                {deployment.map((item) => (
                  <li key={item} className="text-[15px] text-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
