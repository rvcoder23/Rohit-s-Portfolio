import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          glow: "hsl(var(--secondary-glow))",
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
          glass: "hsl(var(--card-glass))",
          border: "hsl(var(--card-border))",
        },
        grid: "hsl(var(--grid))",
        vignette: "hsl(var(--vignette))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-accent': 'var(--gradient-accent)',
        'gradient-text': 'var(--gradient-text)',
        'gradient-card': 'var(--gradient-card)',
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        'glow-primary': 'var(--glow-primary)',
        'glow-secondary': 'var(--glow-secondary)',
        'glow-accent': 'var(--glow-accent)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1', letterSpacing: '-0.025em', fontWeight: '900' }],
        'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-md': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.015em', fontWeight: '700' }],
        'display-sm': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-xl': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
        'heading-lg': ['1.75rem', { lineHeight: '1.3', letterSpacing: '-0.005em', fontWeight: '600' }],
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'extra-bold': '800',
      },
      transitionTimingFunction: {
        'smooth': 'var(--ease-smooth)',
        'bounce': 'var(--ease-bounce)',
      },
      transitionDuration: {
        'fast': 'var(--duration-fast)',
        'normal': 'var(--duration-normal)',
        'slow': 'var(--duration-slow)',
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
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--primary) / 0.6), 0 0 80px hsl(var(--primary) / 0.3)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.8)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "scale-in-spring": {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-100px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right-stagger": {
          from: { opacity: "0", transform: "translateX(30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up-50": {
          from: { opacity: "0", transform: "translateY(50px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-bottom-to-top": {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "underline-draw": {
          "0%": { "stroke-dasharray": "0 100%" },
          "100%": { "stroke-dasharray": "100% 0" },
        },
        "gradient-shift": {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
            filter: "hue-rotate(0deg)"
          },
          "50%": {
            backgroundPosition: "100% 50%",
            filter: "hue-rotate(30deg)"
          },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "tilt-up": {
          from: { transform: "perspective(1000px) rotateX(25deg) rotateY(-5deg)" },
          to: { transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" },
        },
        "hover-lift": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-10px)" },
        },
        "hover-scale-1-1": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.1)" },
        },
        "hover-scale-1-05": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.05)" },
        },
        "hover-rotate-360": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "zoom-in": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.05)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 4s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "fade-in": "fade-in 1s var(--ease-smooth) forwards",
        "fade-in-up": "fade-in-up 0.8s var(--ease-smooth) forwards",
        "scale-in": "scale-in 0.6s var(--ease-smooth) forwards",
        "scale-in-spring": "scale-in-spring 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
        "slide-in-right": "slide-in-right 0.7s var(--ease-smooth) forwards",
        "slide-in-left": "slide-in-left 0.7s var(--ease-smooth) forwards",
        "slide-in-right-stagger": "slide-in-right-stagger 0.7s var(--ease-smooth) forwards",
        "slide-up": "slide-up 0.8s var(--ease-smooth) forwards",
        "slide-up-50": "slide-up-50 0.8s var(--ease-smooth) forwards",
        "slide-bottom-to-top": "slide-bottom-to-top 0.8s var(--ease-smooth) forwards",
        "underline-draw": "underline-draw 1s var(--ease-smooth) forwards",
        "gradient-shift": "gradient-shift 6s ease-in-out infinite",
        "shimmer": "shimmer 2s ease-in-out infinite",
        "tilt-up": "tilt-up 0.8s var(--ease-smooth) forwards",
        "hover-lift": "hover-lift 0.3s var(--ease-smooth) forwards",
        "hover-scale-1-1": "hover-scale-1-1 0.3s var(--ease-smooth) forwards",
        "hover-scale-1-05": "hover-scale-1-05 0.3s var(--ease-smooth) forwards",
        "hover-rotate-360": "hover-rotate-360 0.6s var(--ease-smooth) forwards",
        "zoom-in": "zoom-in 0.3s var(--ease-smooth) forwards",
        "typewriter": "typewriter 2s steps(11, end) 1s forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
