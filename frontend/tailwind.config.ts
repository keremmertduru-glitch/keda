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
        background: "#09090b", // zinc-950
        foreground: "#fafafa", // zinc-50
        primary: {
          DEFAULT: "#6366f1", // indigo-500
          hover: "#4f46e5", // indigo-600
        },
        surface: {
          DEFAULT: "#18181b", // zinc-900
          border: "#27272a", // zinc-800
        }
      },
    },
  },
  plugins: [],
};
export default config;