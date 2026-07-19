"use client";

import * as React from "react";

export function ImmersiveBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(214,185,140,0.07),transparent_60%)]" />

      <div className="ambient-glow" style={{ top: "-20%", left: "5%", width: "45vw", height: "45vw", background: "radial-gradient(circle, rgba(214,185,140,0.09), transparent 70%)" }} />
      <div className="ambient-glow" style={{ top: "10%", right: "-15%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(214,185,140,0.05), transparent 70%)" }} />
      <div className="ambient-glow" style={{ bottom: "-20%", left: "20%", width: "35vw", height: "35vw", background: "radial-gradient(circle, rgba(214,185,140,0.04), transparent 70%)" }} />
      <div className="ambient-glow" style={{ top: "50%", right: "10%", width: "20vw", height: "20vw", background: "radial-gradient(circle, rgba(255,255,255,0.018), transparent 70%)" }} />

      <svg className="absolute inset-0 h-full w-full opacity-[0.03]" viewBox="0 0 1000 1000" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="500" cy="400" rx="600" ry="300" fill="none" stroke="rgba(214,185,140,0.15)" strokeWidth="0.5" />
        <ellipse cx="500" cy="400" rx="700" ry="380" fill="none" stroke="rgba(214,185,140,0.08)" strokeWidth="0.3" />
        <line x1="0" y1="600" x2="1000" y2="400" stroke="rgba(214,185,140,0.04)" strokeWidth="0.3" />
      </svg>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="noise-overlay" />

      <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-transparent to-background/40" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(11,11,11,0.7))]" />
    </div>
  );
}
