/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0d10",
        surface: "#12151c",
        text: "#ffffff",
        muted: "#8a8f98",
        accent: "#6c7cff",
      },
      boxShadow: {
        glow: "0 0 40px rgba(108,124,255,0.15)",
        soft: "0 20px 40px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
};
