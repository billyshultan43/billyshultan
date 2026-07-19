"use client";

import * as React from "react";

export function ImmersiveBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_35%_at_50%_0%,rgba(139,92,246,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_80%_30%,rgba(167,139,250,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_25%_at_20%_60%,rgba(139,92,246,0.04),transparent_50%)]" />

      <div className="ambient-glow animate-drift" style={{ top: "8%", left: "15%", width: "32vw", height: "32vw", background: "radial-gradient(circle, rgba(139,92,246,0.1), transparent 70%)" }} />
      <div className="ambient-glow animate-drift" style={{ top: "55%", right: "5%", width: "28vw", height: "28vw", background: "radial-gradient(circle, rgba(167,139,250,0.07), transparent 70%)" }} />
      <div className="ambient-glow animate-drift" style={{ bottom: "10%", left: "30%", width: "22vw", height: "22vw", background: "radial-gradient(circle, rgba(139,92,246,0.05), transparent 70%)" }} />

      <div className="floating-circle animate-drift" style={{ top: "12%", left: "8%", width: "18vw", height: "18vw", animationDelay: "-3s" }} />
      <div className="floating-circle animate-drift" style={{ top: "60%", right: "12%", width: "12vw", height: "12vw", animationDelay: "-7s" }} />
      <div className="floating-circle animate-drift" style={{ bottom: "20%", left: "45%", width: "8vw", height: "8vw", animationDelay: "-5s" }} />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />

      <div className="noise-overlay" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(9,9,9,0.75))]" />
    </div>
  );
}
