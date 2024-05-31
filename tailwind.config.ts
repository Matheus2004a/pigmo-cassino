import type { Config } from "tailwindcss";

import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        "low-contrast": "#826B8E",
        "elevation-1": "#170D19",
        "elevation-3": "#35243D",
        'gradient-start': '#FF6864',
        'gradient-end': '#E90083',
        'gradient-start-main': '#00000000',
        'gradient-end-main': '#CC95D726',
        'gradient-start-telegram': '#34BDC6',
        'gradient-end-telegram': '#299CDC',
        'gradient-start-x': '#0D0B0C',
        'gradient-end-x': '#1C1717',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "success": "#24D861",
        primary: {
          DEFAULT: "#E90083",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'custom-green': '0px 1px 8px 0px rgba(36, 216, 97, 0.8)',
        'custom-red': '0px 2px 5px 0px rgba(222, 52, 73, 1)',
        'custom-discord': '0px 11px 26.8px 0px #E900833D',
        'custom-telegram': '0px 11px 26.8px 0px #2CA5D612',
        'custom-x': '0px 11px 26.8px 0px #2A1A2F4A',
        'custom-banner': '0px -3px 0px 0px #170D1980 inset',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config