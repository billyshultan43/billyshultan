"use client";

import * as React from "react";

// Deterministic PRNG (mulberry32) — same sequence on server & client,
// so the rendered HTML is identical and hydration matches.
function makeRng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildParticles() {
  const rng = makeRng(1337);
  return Array.from({ length: 28 }, () => ({
    top: rng() * 100,
    left: rng() * 100,
    size: 1 + rng() * 2.2,
    duration: 9 + rng() * 16,
    delay: rng() * 12,
    tx: (rng() * 30 - 15).toFixed(1) + "px",
    opacity: (0.15 + rng() * 0.4).toFixed(2),
  }));
}

function buildStars() {
  const rng = makeRng(99173);
  return Array.from({ length: 46 }, () => ({
    top: rng() * 100,
    left: rng() * 100,
    size: rng() < 0.7 ? 1 : 1.6,
    duration: 3 + rng() * 5,
    delay: rng() * 6,
  }));
}

export function ImmersiveBackground() {
  const particles = React.useMemo(buildParticles, []);
  const stars = React.useMemo(buildStars, []);

  const rootRef = React.useRef<HTMLDivElement>(null);
  const lightRef = React.useRef<HTMLDivElement>(null);
  const target = React.useRef({ x: 50, y: 18, nx: 0, ny: 0 });
  const current = React.useRef({ x: 50, y: 18, nx: 0, ny: 0 });
  const raf = React.useRef<number | null>(null);

  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      target.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
        nx,
        ny,
      };
    };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.08;
      current.current.y += (target.current.y - current.current.y) * 0.08;
      current.current.nx += (target.current.nx - current.current.nx) * 0.06;
      current.current.ny += (target.current.ny - current.current.ny) * 0.06;

      if (lightRef.current) {
        lightRef.current.style.transform = `translate(${current.current.x}vw, ${current.current.y}vh) translate(-50%, -50%)`;
      }
      if (rootRef.current) {
        rootRef.current.style.setProperty("--mx", current.current.nx.toFixed(3));
        rootRef.current.style.setProperty("--my", current.current.ny.toFixed(3));
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
      style={{ ["--mx" as string]: "0", ["--my" as string]: "0" }}
    >
      {/* Layer 1 — animated aurora gradient */}
      <div className="absolute inset-0 bg-aurora-gradient animate-aurora-gradient opacity-30" />

      {/* Layer 2 — drifting grid (near parallax) */}
      <div
        className="layer-parallax absolute inset-0 bg-grid-pattern bg-grid opacity-50 aurora-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"
        style={{ transform: "translate3d(calc(var(--mx,0) * -12px), calc(var(--my,0) * -12px), 0)" }}
      />

      {/* Layer 3 — floating glow orbs (far parallax) */}
      <div
        className="layer-parallax absolute inset-0"
        style={{ transform: "translate3d(calc(var(--mx,0) * 22px), calc(var(--my,0) * 22px), 0)" }}
      >
        <div
          className="aurora-blob aurora-1"
          style={{
            top: "-10%",
            left: "-8%",
            width: "44vw",
            height: "44vw",
            background: "radial-gradient(circle, rgba(37,99,235,0.45), transparent 70%)",
          }}
        />
        <div
          className="aurora-blob aurora-2"
          style={{
            top: "14%",
            right: "-12%",
            width: "40vw",
            height: "40vw",
            background: "radial-gradient(circle, rgba(139,92,246,0.32), transparent 70%)",
          }}
        />
        <div
          className="aurora-blob aurora-3"
          style={{
            bottom: "-14%",
            left: "26%",
            width: "36vw",
            height: "36vw",
            background: "radial-gradient(circle, rgba(34,211,238,0.22), transparent 70%)",
          }}
        />
        <div
          className="aurora-blob aurora-4"
          style={{
            top: "40%",
            right: "22%",
            width: "26vw",
            height: "26vw",
            background: "radial-gradient(circle, rgba(59,130,246,0.28), transparent 70%)",
          }}
        />
      </div>

      {/* Light beams */}
      <div className="light-beam left-[-10%] top-[8%]" />
      <div className="light-beam alt right-[-10%]" />

      {/* Layer 4 — floating particles */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              ["--tx" as string]: p.tx,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Tiny stars */}
      <div
        className="layer-parallax absolute inset-0"
        style={{ transform: "translate3d(calc(var(--mx,0) * 8px), calc(var(--my,0) * 8px), 0)" }}
      >
        {stars.map((s, i) => (
          <span
            key={i}
            className="star"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Layer 5 — mouse-following light */}
      <div ref={lightRef} className="mouse-light" />

      {/* Noise texture */}
      <div className="noise-overlay" />

      {/* Readability vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(5,5,5,0.72))]" />
    </div>
  );
}
