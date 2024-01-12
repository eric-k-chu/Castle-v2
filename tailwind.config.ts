import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: "linear-gradient(to top, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0.5) 70%), url('/images/hero.png')",
        "hero-2":
          "linear-gradient(to top, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0.6) 70%), url('/images/hero.png')",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
      colors: {
        "primary-1": "#769656",
        "primary-2": "#5C7B41",
        title: "#7C2929",
        twitch: "#6441a5",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
