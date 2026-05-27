/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F2A2D',     // deep midnight teal
        accent: '#FF6B2C',      // warm sodium-orange
        neutral: '#FAF6F0',     // off-white (used for text on dark bg)
        cream: '#DDD5C4',       // warm page background
        paper: '#F4EFE4',       // warm card bg
        muted: '#5A5A5A',       // secondary text
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
};
