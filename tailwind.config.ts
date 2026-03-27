import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        primary: { DEFAULT: "#579af6", dark: "#3a7ad4", light: "#7fb4f8" },
        accent: { DEFAULT: "#f5a623", dark: "#d4891a" },
        dark: "#1a2332",
        surface: { DEFAULT: "#ffffff", alt: "#f4f7fb" },
        border: "#e2e8f0",
      },
    },
  },
  plugins: [],
};
export default config;
