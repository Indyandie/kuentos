/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}',
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


