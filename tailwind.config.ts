import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0F",
        surface: "#111118",
        card: "#13131B",
        primary: "#F5F5F7",
        secondary: "#A1A1AA",
        muted: "#A1A1AA",
        accent: "#7C5CFF",
        "accent-hover": "#9178FF",
        "accent-soft": "#A78BFA",
        line: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        display: ["var(--font-serif)", "Georgia", "serif"],
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(circle at 50% 0%, rgba(124,92,255,0.08), transparent 55%)",
        "accent-gradient": "linear-gradient(135deg, #7C5CFF, #A78BFA)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        float: "float 7s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0,0,0,0.25), 0 8px 32px rgba(0,0,0,0.35)",
        glow: "0 0 0 1px rgba(124,92,255,0.15), 0 8px 32px rgba(124,92,255,0.08)",
        premium: "0 4px 24px rgba(0,0,0,0.4)",
        glass: "0 8px 32px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
