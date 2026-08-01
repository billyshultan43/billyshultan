import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F3EFE7",
        surface: "#EDE7DA",
        card: "#F8F5EE",
        primary: "#17140E",
        secondary: "#6E6656",
        muted: "#8B8271",
        accent: "#1D4A35",
        "accent-hover": "#295C44",
        "accent-soft": "#4A6F5B",
        line: "rgba(23, 20, 14, 0.16)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        display: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      boxShadow: {
        hairline: "0 1px 0 rgba(23, 20, 14, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
