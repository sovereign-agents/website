/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg-base': '#09090B',
        'bg-surface': '#111113',
        'bg-elevated': '#18181B',
        'border-default': '#222225',
        'border-subtle': '#1A1A1D',
        'accent': '#D4C5A9',
        'accent-dim': '#B8A88A',
        'text-primary': '#F5F5F5',
        'text-secondary': '#8A8A8E',
        'text-muted': '#555558',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'mono': ['JetBrains Mono', 'SF Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
