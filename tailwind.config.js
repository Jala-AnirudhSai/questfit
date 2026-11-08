/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#080812',
        surface: '#101020',
        card: '#16162c',
        neonPurple: '#A855F7',
        electricCyan: '#00E5FF',
        neonPink: '#FF3D9A',
        xpGold: '#FFC857',
        textPrimary: '#F5F3FF',
        textSecondary: '#9292AA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        gaming: ['Rajdhani', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 20px rgba(168, 85, 247, 0.3)',
        cyan: '0 0 20px rgba(0, 229, 255, 0.3)',
        pink: '0 0 20px rgba(255, 61, 154, 0.3)',
        gold: '0 0 20px rgba(255, 200, 87, 0.3)',
      }
    },
  },
  plugins: [],
}