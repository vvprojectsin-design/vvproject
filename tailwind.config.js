/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      colors: {
        background: "#F8FAFC",
        foreground: "#0F172A",
        primary: "#002B5B",
        "primary-foreground": "#FFFFFF",
        secondary: "#F1F5F9",
        "secondary-foreground": "#0F172A",
        accent: "#F97316",
        "accent-foreground": "#FFFFFF",
        muted: "#F1F5F9",
        "muted-foreground": "#64748B",
        border: "#E2E8F0",
        input: "#E2E8F0",
        ring: "#002B5B",
      },
      borderRadius: {
        lg: "0.75rem",
        md: "calc(0.75rem - 2px)",
        sm: "calc(0.75rem - 4px)",
      },
    },
  },
  plugins: [],
};
