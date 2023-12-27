/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/**/*.{js,html}'
  ],
  theme: {
    extend: {
      colors: {
        'kuen-blue': '#4B9EDF',
        'kuen-hover-blue': '#357ABD',
      },
      fontFamily: {
        'kuen-font': ['Arial', 'sans-serif'],
      },
      spacing: {
        'kuen-padding': '1rem',
      },
    },
  },
};


