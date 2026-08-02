"use client";

import * as React from "react";
import { Activity, Cpu, Radio, ShieldAlert, CheckCircle2, RefreshCw } from "lucide-react";

export function IotTelemetryWidget() {
  const [coValue, setCoValue] = React.useState<number>(120); // ppm
  const [hcValue, setHcValue] = React.useState<number>(450); // ppm
  const [rpmValue, setRpmValue] = React.useState<number>(1500);
  const [isSimulating, setIsSimulating] = React.useState<boolean>(true);

  // Simulate slight fluctuation when live
  React.useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setCoValue((prev) => Math.min(500, Math.max(50, Math.round(prev + (Math.random() * 10 - 5)))));
      setHcValue((prev) => Math.min(1200, Math.max(100, Math.round(prev + (Math.random() * 20 - 10)))));
    }, 2500);
    return () => clearInterval(interval);
  }, [isSimulating]);

  // Fuzzy Mamdani logic simulation
  const calculateFuzzyOutput = (co: number, hc: number) => {
    // Simple Mamdani-style score combination
    const coScore = co < 150 ? 0.2 : co < 300 ? 0.5 : 0.9;
    const hcScore = hc < 500 ? 0.2 : hc < 800 ? 0.6 : 0.95;
    const combined = (coScore * 0.5) + (hcScore * 0.5);

    if (combined < 0.35) return { status: "GOOD (Normal)", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/30" };
    if (combined < 0.70) return { status: "MODERATE (Attention)", color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-500/10 border-amber-500/30" };
    return { status: "UNHEALTHY (Exceeds Threshold)", color: "text-rose-600 dark:text-rose-400", bg: "bg-rose-500/10 border-rose-500/30" };
  };

  const result = calculateFuzzyOutput(coValue, hcValue);

  return (
    <div className="my-10 rounded-2xl border border-line bg-card p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              ESP32 + Fuzzy Mamdani Live Simulator
            </span>
          </div>
          <h3 className="mt-2 font-serif text-2xl text-primary">
            Vehicle Emission & Air Quality Telemetry
          </h3>
        </div>
        <button
          onClick={() => setIsSimulating(!isSimulating)}
          className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-1.5 font-mono text-xs text-secondary hover:text-primary transition-colors"
        >
          <RefreshCw size={12} className={isSimulating ? "animate-spin" : ""} />
          {isSimulating ? "Live Stream Active" : "Manual Control"}
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Controls */}
        <div className="space-y-6 lg:col-span-1">
          <div>
            <div className="flex justify-between font-mono text-xs text-secondary mb-2">
              <span>CO (Carbon Monoxide)</span>
              <span className="text-primary font-medium">{coValue} ppm</span>
            </div>
            <input
              type="range"
              min="50"
              max="500"
              value={coValue}
              onChange={(e) => {
                setIsSimulating(false);
                setCoValue(Number(e.target.value));
              }}
              className="w-full accent-accent cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between font-mono text-xs text-secondary mb-2">
              <span>HC (Hydrocarbon)</span>
              <span className="text-primary font-medium">{hcValue} ppm</span>
            </div>
            <input
              type="range"
              min="100"
              max="1200"
              value={hcValue}
              onChange={(e) => {
                setIsSimulating(false);
                setHcValue(Number(e.target.value));
              }}
              className="w-full accent-accent cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between font-mono text-xs text-secondary mb-2">
              <span>Engine RPM</span>
              <span className="text-primary font-medium">{rpmValue} RPM</span>
            </div>
            <input
              type="range"
              min="800"
              max="4000"
              step="100"
              value={rpmValue}
              onChange={(e) => {
                setIsSimulating(false);
                setRpmValue(Number(e.target.value));
              }}
              className="w-full accent-accent cursor-pointer"
            />
          </div>
        </div>

        {/* Telemetry Output Display */}
        <div className="lg:col-span-2 flex flex-col justify-between rounded-xl border border-line bg-surface/60 p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            <div className="rounded-lg bg-card p-4 border border-line">
              <span className="font-mono text-[11px] text-muted uppercase">Sensor MQ-7</span>
              <p className="mt-1 font-serif text-2xl text-primary">{coValue}</p>
              <span className="font-mono text-[10px] text-secondary">ppm CO</span>
            </div>
            <div className="rounded-lg bg-card p-4 border border-line">
              <span className="font-mono text-[11px] text-muted uppercase">Sensor MQ-2</span>
              <p className="mt-1 font-serif text-2xl text-primary">{hcValue}</p>
              <span className="font-mono text-[10px] text-secondary">ppm HC</span>
            </div>
            <div className="rounded-lg bg-card p-4 border border-line col-span-2 sm:col-span-1">
              <span className="font-mono text-[11px] text-muted uppercase">Blynk Cloud</span>
              <p className="mt-1 font-mono text-sm text-emerald-600 dark:text-emerald-400 font-medium pt-1">Connected</p>
              <span className="font-mono text-[10px] text-secondary">Wi-Fi ESP32</span>
            </div>
          </div>

          <div className={`rounded-xl border p-4 ${result.bg} flex items-center justify-between`}>
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-secondary">
                Fuzzy Mamdani Classification Result
              </span>
              <p className={`mt-1 font-serif text-xl font-medium ${result.color}`}>
                {result.status}
              </p>
            </div>
            <Cpu size={28} className={result.color} />
          </div>
        </div>
      </div>
    </div>
  );
}
