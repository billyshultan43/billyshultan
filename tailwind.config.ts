import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F3EFE6",
        surface: "#ECE6D8",
        card: "#FAF6EE",
        primary: "#201D17",
        secondary: "#6C6354",
        muted: "#8A8171",
        accent: "#9C5B33",
        "accent-deep": "#7C4A28",
        "accent-light": "#C4936D",
        line: "rgba(32, 29, 23, 0.14)",
        "line-strong": "rgba(32, 29, 23, 0.32)",
        charcoal: "#221F1A",
        "charcoal-deep": "#1B1814",
        "charcoal-text": "#E7E1D3",
        "charcoal-muted": "#A29A88",
        "charcoal-line": "rgba(231, 225, 211, 0.14)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        display: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        hairline: "0 1px 0 rgba(32, 29, 23, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
