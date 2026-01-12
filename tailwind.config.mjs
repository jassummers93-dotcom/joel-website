/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f',
        surface: '#141419',
        accent: '#e63946',
        'accent-secondary': '#4361ee',
        'text-primary': '#f8f9fa',
        'text-muted': '#9ca3af',
        border: '#2d2d35',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
