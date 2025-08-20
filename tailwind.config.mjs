/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'cyber-green': '#00ff41',
        'electric-blue': '#0099ff',
        'neon-purple': '#9945ff',
        'dark-bg': '#0a0a0a',
        'dark-surface': '#151515',
        'dark-border': '#333333',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'SF Mono', 'Monaco', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'network-pulse': 'network-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { opacity: '0.4', transform: 'scale(1)' },
          '100%': { opacity: '1', transform: 'scale(1.02)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'network-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}