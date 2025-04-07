/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Deep blue-gray
        secondary: "#1e293b", // Lighter blue-gray
        text: "#94a3b8", // Muted gray
        textLight: "#e2e8f0", // Light gray
        accent: "#64ffda", // Teal
        background: "#0f172a", // or your dark background color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        xl: "0 0 25px -5px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
