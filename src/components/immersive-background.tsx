"use client";

import * as React from "react";

export function ImmersiveBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_-5%,rgba(124,92,255,0.08),transparent_60%)]" />

      <div className="ambient-glow" style={{ top: "-12%", left: "10%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(124,92,255,0.12), transparent 70%)" }} />
      <div className="ambient-glow" style={{ bottom: "-20%", right: "-8%", width: "35vw", height: "35vw", background: "radial-gradient(circle, rgba(167,139,250,0.06), transparent 70%)" }} />
      <div className="ambient-glow" style={{ top: "35%", right: "2%", width: "18vw", height: "18vw", background: "radial-gradient(circle, rgba(124,92,255,0.05), transparent 70%)" }} />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0F]/50" />

      <div className="noise-overlay" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,10,15,0.7))]" />
    </div>
  );
}
