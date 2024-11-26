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
        secondary: "#f5741c",
        darkBg: '#131424',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        "gradient-Cover":
        "linear-gradient(90.21deg, rgba(70,54, 124, 0.5) -91%, rgba(74, 47,189, 0.5) 111,58%)",
      }
    },
  },
  plugins: [],
} satisfies Config;
