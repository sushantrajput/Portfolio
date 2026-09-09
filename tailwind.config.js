/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        deepBlue: "linear-gradient(90deg, #161B23 0%, #1C212A 25%, #1C212A 50%, #1C212A 75%, #1C212A 100%)",
        fontBlue: "linear-gradient(50deg, #B597F6 0%, #96C6EA 100%)",
      },
      colors: {
        /* Your Custom Dark Theme Colors */
        color1: "#6A57E0",
        color1Hover: "#563ef4",
        color2: "#80FFD2",
        color3: "#161B23",
        
        /* The Missing Template Colors (Mapped to Dark Mode) */
        paper: "#161B23",      // Maps the old white backgrounds to your dark background
        ink: "#e5e7eb",        // Maps the old dark text to light gray text
        surface: "#1C212A",    // Maps card backgrounds to a slightly lighter dark tone
        flagSoft: "#1C212A",   // Ensures tags match the dark theme
        flag: "#80FFD2",       // Maps tags/accents to your neon accent color
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"]
      },
    },
  },
  plugins: [],
}
