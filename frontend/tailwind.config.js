/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        bg2: "var(--bg2)",
        ink: "var(--ink)",
        ink2: "var(--ink2)",
        green: {
          DEFAULT: "var(--green)",
          dk: "var(--green-dk)",
          md: "var(--green-md)",
          lt: "var(--green-lt)",
          xs: "var(--green-xs)",
        },
        gold: {
          DEFAULT: "var(--gold)",
          lt: "var(--gold-lt)",
          dk: "var(--gold-dk)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          lt: "var(--muted-lt)",
        },
        red: {
          DEFAULT: "var(--red)",
          lt: "var(--red-lt)",
        },
        blue: {
          DEFAULT: "var(--blue)",
          lt: "var(--blue-lt)",
        },
        border: "var(--border)",
        white: "var(--white)",
      },
      boxShadow: {
        s: "var(--shadow-s)",
        m: "var(--shadow-m)",
        l: "var(--shadow-l)",
        g: "var(--shadow-g)",
        o: "var(--shadow-o)",
      },
      borderRadius: {
        sm: "var(--r-sm)",
        md: "var(--r-md)",
        lg: "var(--r-lg)",
        xl: "var(--r-xl)",
        "2xl": "var(--r-2xl)",
        "3xl": "var(--r-3xl)",
      },
      fontFamily: {
        body: "var(--font-body)",
        disp: "var(--font-disp)",
      },
      animation: {
        'fade-up': 'fadeUp 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-ring': 'vPulse 2s infinite',
        'sheet-up': 'sheetUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.2s ease forwards',
        'ani-up': 'aniUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'blink': 'blink 1.4s infinite',
        'ping-slow': 'pingRing 1.6s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        vPulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(46,107,62,0.4)', transform: 'scale(1)' },
          '70%': { boxShadow: '0 0 0 12px rgba(46,107,62,0)', transform: 'scale(1.05)' },
          '100%': { boxShadow: '0 0 0 0 rgba(46,107,62,0)', transform: 'scale(1)' },
        },
        sheetUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        aniUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        pingRing: {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
