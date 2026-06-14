
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          900: '#FAFAFC',
          800: '#F2F2F8',
          700: '#FFFFFF',
          border: '#E4E4F0',
        },
        accent: {
          DEFAULT: '#E07AF0',
          hover: '#C960D9',
        },
        muted: '#6E6E88',
      }
    },
  },
  plugins: [],
}
