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
        brand: {
          blue: "#0950F6",
          "blue-dark": "#06349e",
          "blue-deep": "#052c87",
          yellow: "#FFF12E",
          "yellow-hover": "#E8DC24",
          white: "#FFFFFF",
          canvas: "#F8FAFC",
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', "sans-serif"],
        subheading: ['"Anton"', "sans-serif"],
        sans: ['"Outfit"', "sans-serif"],
        mono: ['"Geist Mono"', "monospace"],
      },
      boxShadow: {
        "glow-yellow": "0 0 35px rgba(255, 241, 46, 0.45)",
        "glow-wa": "0 0 25px rgba(37, 211, 102, 0.75)",
        "glow-fb": "0 0 25px rgba(24, 119, 242, 0.75)",
        "glow-ig": "0 0 25px rgba(225, 48, 108, 0.75)",
      },
    },
  },
  plugins: [],
};

export default config;
