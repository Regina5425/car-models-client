/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2D323A',
        'primary-dark': '#F9FAFC',
        secondary: '#9CA0AF',
        'secondary-dark': '#7F8286',
        'accent-pink': '#E633E1',
        'accent-pink-dark': '#A300AF',
        'accent-yellow': '#E6CA45',
        'accent-yellow-dark': '#CFA408',
        success: '#0FC802',
        'success-dark': '#48AD41',
        error: '#E33939',
        'error-dark': '#A23030',
        white: '#FFFFFF',
        black: '#000000',
        grey: '#7F8286',
        'grey-dark': '#6A6B71',
        milky: '#F9FAFC',
      },
    },
  },
  plugins: [],
};
