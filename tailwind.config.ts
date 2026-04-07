import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F5F0EB",
        ivory: "#FAF8F5",
        stone: "#E8E2DB",
        charcoal: "#2A2A2A",
        graphite: "#1A1A1A",
        slate: "#6B6B6B",
        steel: "#9A9A9A",
        teal: {
          DEFAULT: "#1A6B6A",
          dark: "#145554",
          light: "#1E7F7E",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "display-sm": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading": ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },
      maxWidth: {
        "content": "1200px",
        "narrow": "800px",
        "wide": "1400px",
      },
    },
  },
  plugins: [],
};
export default config;
