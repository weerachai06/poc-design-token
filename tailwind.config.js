/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-background-primary)',
        link: 'var(--color-background-link)',
        inverse: 'var(--color-background-inverse)',
        'core-white': 'var(--color-core-white)',
        'core-black': 'var(--color-core-black)',
        'core-grey': 'var(--color-core-gray)',
        'core-blue': 'var(--color-core-blue)',
        'font-primary': 'var(--color-font-primary)',
        'font-link': 'var(--color-font-link)',
        'font-inverse': 'var(--color-font-inverse)',
      }
    }
  },
  plugins: [],
}