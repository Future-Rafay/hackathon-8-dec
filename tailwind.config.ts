import type { Config } from "tailwindcss";
import { integralCF, satoshi } from "@/styles/fonts";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        integral: ['integralCF', 'sans-serif'],
        satoshi: ['satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
