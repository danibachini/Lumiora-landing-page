/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        'creamy': {
          100: '#d5c4b0',
          200: '#c2ae96',
          300: '#ae967a',
          400: '#b29169',
          500: '#9b805f',
          600: '#835d2f',
        }
      },

    },
  },
  plugins: [require("daisyui")],
}
