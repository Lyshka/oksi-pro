/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: "1200px",
      md: "768px",
    },
    colors: {
      black: {
        DEFAULT: "#1D1D1D",
      },
      blue: {
        DEFAULT: "#015FA7",
        27: "#27A6E5",
        "03": "#0380C3",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      gray: {
        DEFAULT: "#595959",
      },
      red: {
        DEFAULT: "#ff0000",
      },
      azure: {
        DEFAULT: "#1DCFC5",
        hover: "#0FC1B7",
      },
      footer: {
        DEFAULT: "#053F6B",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
