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
    <section className="section-container border-t border-line py-24 lg:py-32">
      <Reveal>
        <h2 className="label">Technical Stack</h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-16 md:grid-cols-2">
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
      </div>
    </section>
  );
}
