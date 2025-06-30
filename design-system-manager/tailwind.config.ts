import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'design-primary': 'var(--design-primary)',
        'design-secondary': 'var(--design-secondary)',
        'design-accent': 'var(--design-accent)',
      },
    },
  },
  plugins: [],
}
export default config