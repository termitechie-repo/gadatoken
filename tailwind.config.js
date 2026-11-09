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
          bg: '#080014',
          void: '#04000A',
          card: 'rgba(20, 2, 45, 0.7)',
          cardHover: 'rgba(32, 4, 72, 0.85)',
          border: 'rgba(168, 85, 247, 0.2)',
          borderGlow: 'rgba(192, 132, 252, 0.45)',
          purple: '#9333EA',
          violet: '#8B5CF6',
          electric: '#A855F7',
          neon: '#C084FC',
          light: '#E9D5FF',
          chrome: '#E2E8F0',
          amber: '#F0B90B', // BNB Smart Chain accent
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'glow-purple': '0 0 35px -5px rgba(168, 85, 247, 0.35)',
        'glow-violet': '0 0 50px -10px rgba(139, 92, 246, 0.45)',
        'glow-subtle': '0 0 25px -5px rgba(168, 85, 247, 0.15)'
      }
    },
  },
  plugins: [],
}
