/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { brand: '#FF5E27', ink: '#444B5F', cream: '#F7F5F1', mute: '#8A8F9C' },
      fontFamily: {
        serif: ['Vollkorn', 'Georgia', 'serif'],
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
