import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        alegreya: ["var(--font-alegreya)"],
      },
      colors: {
        bgGrey: "rgba(217, 217, 217, 0.25)",
        "primary-cta": "#4A3AFF",
        "primary-text": "#333333",
        "secondary-text": "#555A65",
        "primary-content": "#F9FAFB",
        "primary-border": "#EAECF0",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
export default config;
