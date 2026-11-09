/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gada: {
          bg: '#080B11',
          card: '#0D1322',
          cardHover: '#131C31',
          border: 'rgba(255, 255, 255, 0.08)',
          borderGold: 'rgba(212, 175, 55, 0.25)',
          gold: '#D4AF37',
          goldLight: '#F3E5AB',
          goldDark: '#AA820A',
          amber: '#F0B90B',
          slate: '#8E9BAE',
          muted: '#5A6679',
          accent: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'glow-gold': '0 0 35px -5px rgba(212, 175, 55, 0.15)',
        'glow-subtle': '0 0 25px -5px rgba(240, 185, 11, 0.1)'
      }
    },
  },
  plugins: [],
}
