import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "#A7D3F5",
        offWhite: "#F7F9FC",
        orange: "#FF8C42",
        black: "#333333",
        gray: "#666666",
        white: "#FFFFFF",
        lightGray: "#666666",
      },
    },
  },
  plugins: [],
} satisfies Config;
