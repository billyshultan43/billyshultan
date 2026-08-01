import { BlueprintLines } from "@/components/blueprint-lines";
import { Hairline } from "@/components/hairline";
import { ParallaxWord } from "@/components/parallax-word";
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
    <section className="relative overflow-hidden py-12 lg:py-16">
      <Hairline />

      <ParallaxWord
        text="Stack"
        className="-translate-x-1/2 -translate-y-1/2 text-[clamp(200px,24vw,280px)] opacity-50"
      />

      <BlueprintLines />

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

        <div className="mx-auto mt-10 max-w-5xl">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.04}>
              <div>
                <Hairline />
                <div className="py-4">
                  <h3 className="label">{cat.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-secondary">
                    {cat.items.join(" • ")}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          <Hairline />
        </div>
      </div>
    </section>
  );
}
