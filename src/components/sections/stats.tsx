export function StatsStrip() {
  return (
    <section className="border-b border-line bg-background">
      <div className="section-container flex flex-wrap items-baseline justify-between gap-x-12 gap-y-3 py-6">
        <p className="font-mono text-xs text-secondary">
          Instrumentation and IoT, field-tested since 2021
        </p>
        <div className="flex flex-wrap items-baseline gap-x-10 gap-y-3">
          <p className="font-mono text-xs text-secondary">
            <span className="text-primary">2+</span> years experience
          </p>
          <p className="font-mono text-xs text-secondary">
            <span className="text-primary">3</span> systems delivered
          </p>
          <p className="font-mono text-xs text-secondary">
            <span className="text-primary">15+</span> technologies
          </p>
        </div>
      </div>
    </section>
  );
}
