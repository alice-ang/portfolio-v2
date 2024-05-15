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
        palette: {
          yellow: "#E7CC3C",
          background: "#1F1F1F",
          darkBackground: "#131214",
          lightGrey: "#D9D9D9",
          white: "#ffffff",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        feta: ["var(--font-feta)"],
      },
    },
  },
  plugins: [],
};
export default config;
