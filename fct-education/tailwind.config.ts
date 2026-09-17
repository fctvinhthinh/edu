import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#005BAC",
          50: "#E6F0FA",
          100: "#CCE1F5",
          200: "#99C3EB",
          300: "#66A4E1",
          400: "#3386D7",
          500: "#005BAC",
          600: "#004E93",
          700: "#003E76",
          800: "#002F58",
          900: "#001F3B",
        },
        secondary: {
          DEFAULT: "#FFD447",
          50: "#FFFBEB",
          100: "#FFF3C4",
          200: "#FFE885",
          300: "#FFD447",
          400: "#FFC107",
          500: "#E6A800",
        },
        accent: "#00AEEF",
        background: "#FFFFFF",
        foreground: "#1A1A1A",
        muted: "#F5F7FA",
        border: "#E5E9EF",
      },
      fontFamily: {
        heading: ["var(--font-be-vietnam-pro)", "Be Vietnam Pro", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "16px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
      },
      boxShadow: {
        soft: "0 2px 20px rgba(0, 0, 0, 0.06)",
        card: "0 4px 30px rgba(0, 0, 0, 0.08)",
        elevated: "0 8px 40px rgba(0, 91, 172, 0.15)",
        glow: "0 0 40px rgba(0, 91, 172, 0.2)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "slide-in": "slideIn 0.6s ease forwards",
        marquee: "marquee 30s linear infinite",
        spin: "spin 1s linear infinite",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      transitionTimingFunction: {
        DEFAULT: "ease",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #005BAC 0%, #00AEEF 100%)",
        "gradient-hero": "linear-gradient(135deg, #005BAC 0%, #003E76 60%, #001F3B 100%)",
        "gradient-gold": "linear-gradient(135deg, #FFD447 0%, #FFC107 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
