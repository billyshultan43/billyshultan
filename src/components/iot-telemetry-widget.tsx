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
    <div className="card-base my-10 overflow-hidden p-6 shadow-soft sm:p-9">
      <div className="flex flex-col gap-5 border-b border-line pb-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              ESP32 + Fuzzy Mamdani Live Simulator
            </span>
          </div>
          <h3 className="mt-2.5 font-serif text-2xl text-primary">
            Vehicle Emission & Air Quality Telemetry
          </h3>
        </div>
        <button
          onClick={() => setIsSimulating(!isSimulating)}
          className="inline-flex items-center gap-2 self-start rounded-full border border-line bg-surface px-4 py-2 font-mono text-xs text-secondary transition-colors duration-300 hover:border-accent hover:text-accent"
        >
          <RefreshCw size={12} className={isSimulating ? "animate-spin" : ""} />
          {isSimulating ? "Live Stream Active" : "Manual Control"}
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-1">
          <div>
            <div className="mb-2 flex justify-between font-mono text-xs text-secondary">
              <span>CO (Carbon Monoxide)</span>
              <span className="font-medium text-primary">{coValue} ppm</span>
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
              className="w-full cursor-pointer accent-accent"
            />
          </div>

          <div>
            <div className="mb-2 flex justify-between font-mono text-xs text-secondary">
              <span>HC (Hydrocarbon)</span>
              <span className="font-medium text-primary">{hcValue} ppm</span>
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
              className="w-full cursor-pointer accent-accent"
            />
          </div>

          <div>
            <div className="mb-2 flex justify-between font-mono text-xs text-secondary">
              <span>Engine RPM</span>
              <span className="font-medium text-primary">{rpmValue} RPM</span>
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
              className="w-full cursor-pointer accent-accent"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-line bg-surface/50 p-6 lg:col-span-2">
          <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-line bg-card p-4">
              <span className="font-mono text-[11px] uppercase text-muted">Sensor MQ-7</span>
              <p className="mt-1 font-serif text-2xl text-primary">{coValue}</p>
              <span className="font-mono text-[10px] text-secondary">ppm CO</span>
            </div>
            <div className="rounded-2xl border border-line bg-card p-4">
              <span className="font-mono text-[11px] uppercase text-muted">Sensor MQ-2</span>
              <p className="mt-1 font-serif text-2xl text-primary">{hcValue}</p>
              <span className="font-mono text-[10px] text-secondary">ppm HC</span>
            </div>
            <div className="col-span-2 rounded-2xl border border-line bg-card p-4 sm:col-span-1">
              <span className="font-mono text-[11px] uppercase text-muted">Blynk Cloud</span>
              <p className="pt-1 font-mono text-sm font-medium text-emerald-600 dark:text-emerald-400">Connected</p>
              <span className="font-mono text-[10px] text-secondary">Wi-Fi ESP32</span>
            </div>
          </div>

          <div className={`flex items-center justify-between rounded-2xl border p-5 ${result.bg}`}>
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
