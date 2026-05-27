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
        // WNBA "Primetime" palette
        ink: '#0E0E11',
        'ink-2': '#17171C',
        'ink-3': '#22222A',
        bone: '#F4EBDC',
        'bone-2': '#E7DAC0',
        lane: '#FF2E40',
        'lane-2': '#FF6376',
        neon: '#D6FF3D',
        wood: '#B68654',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
        court: ['"Big Shoulders Display"', 'Impact', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1120px',
      },
    },
  },
};
