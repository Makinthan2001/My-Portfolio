import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        float: "float 3s ease-in-out infinite",
        shine: "shine 1.2s ease-in-out",
        gloss: "gloss 0.8s ease-out",
        shimmer: "shimmer 1.5s ease-in-out infinite",
        "scroll-right": "scroll-right 30s linear infinite",
        "scroll-left": "scroll-left 30s linear infinite",
        "scroll-vertical": "scroll-vertical 60s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shine: {
          "0%": { transform: "translateX(-100%) rotate(45deg)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateX(100%) rotate(45deg)", opacity: "0" },
        },
        gloss: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "50%": { transform: "scale(1.05)", opacity: "0.3" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
        shimmer: {
          "0%, 100%": { transform: "translateX(-100%) skewX(-15deg)", opacity: "0" },
          "50%": { transform: "translateX(100%) skewX(-15deg)", opacity: "0.6" },
        },
        "scroll-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-left": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "scroll-vertical": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;