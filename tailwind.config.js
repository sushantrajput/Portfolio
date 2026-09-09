/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FBFBF9",
        surface: "#FFFFFF",
        ink: "#14171A",
        muted: "#676E75",
        line: "#E6E6E0",
        line2: "#F1F1EC",
        accent: "#14584C",
        accentHover: "#0E4238",
        accentSoft: "#E4EFEA",
        flag: "#8A5A12",
        flagSoft: "#FBEDD2",
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        serif: ["'Source Serif 4'", "Georgia", "serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      maxWidth: { shell: "68rem", read: "40rem" },
      boxShadow: {
        card: "0 1px 2px rgba(20,23,26,.04), 0 8px 24px -14px rgba(20,23,26,.12)",
        lift: "0 2px 4px rgba(20,23,26,.05), 0 18px 40px -18px rgba(20,23,26,.22)",
      },
    },
  },
  plugins: [],
};
