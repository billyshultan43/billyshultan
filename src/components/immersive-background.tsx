"use client";

import * as React from "react";

export function ImmersiveBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="ambient-glow" style={{ top: "-15%", left: "-10%", width: "50vw", height: "50vw", background: "radial-gradient(circle, rgba(214,185,140,0.07), transparent 70%)" }} />
      <div className="ambient-glow" style={{ bottom: "-20%", right: "-10%", width: "45vw", height: "45vw", background: "radial-gradient(circle, rgba(214,185,140,0.04), transparent 70%)" }} />
      <div className="ambient-glow" style={{ top: "40%", left: "50%", width: "30vw", height: "30vw", background: "radial-gradient(circle, rgba(255,255,255,0.015), transparent 70%)" }} />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(11,11,11,0.6))]" />

      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="noise-overlay" />
    </div>
  );
}
