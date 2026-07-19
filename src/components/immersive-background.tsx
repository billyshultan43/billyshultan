"use client";

import * as React from "react";

export function ImmersiveBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="ambient-glow" style={{ top: "-18%", left: "-8%", width: "55vw", height: "55vw", background: "radial-gradient(circle, rgba(214,185,140,0.08), transparent 70%)" }} />
      <div className="ambient-glow" style={{ bottom: "-24%", right: "-12%", width: "50vw", height: "50vw", background: "radial-gradient(circle, rgba(214,185,140,0.05), transparent 70%)" }} />
      <div className="ambient-glow" style={{ top: "35%", right: "5%", width: "22vw", height: "22vw", background: "radial-gradient(circle, rgba(214,185,140,0.04), transparent 70%)" }} />
      <div className="ambient-glow" style={{ top: "60%", left: "12%", width: "18vw", height: "18vw", background: "radial-gradient(circle, rgba(255,255,255,0.02), transparent 70%)" }} />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_-10%,rgba(214,185,140,0.04),transparent_60%)]" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="noise-overlay" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(11,11,11,0.55))]" />
    </div>
  );
}
