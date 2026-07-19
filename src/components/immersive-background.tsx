"use client";

import * as React from "react";

export function ImmersiveBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%-5%,rgba(214,185,140,0.08),transparent_60%)]" />

      <div className="ambient-glow" style={{ top: "-16%", left: "2%", width: "48vw", height: "48vw", background: "radial-gradient(circle, rgba(214,185,140,0.12), transparent 70%)" }} />
      <div className="ambient-glow" style={{ bottom: "-18%", right: "-10%", width: "36vw", height: "36vw", background: "radial-gradient(circle, rgba(214,185,140,0.06), transparent 70%)" }} />
      <div className="ambient-glow" style={{ top: "45%", right: "8%", width: "18vw", height: "18vw", background: "radial-gradient(circle, rgba(214,185,140,0.05), transparent 70%)" }} />
      <div className="ambient-glow" style={{ top: "30%", left: "15%", width: "14vw", height: "14vw", background: "radial-gradient(circle, rgba(255,255,255,0.025), transparent 70%)" }} />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B0B0B]/50" />

      <div className="noise-overlay" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(11,11,11,0.75))]" />
    </div>
  );
}
