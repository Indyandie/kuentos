/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}',
    // Add other file paths or globs as needed
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#4B9EDF',
        'custom-hover-blue': '#357ABD',
      },
      fontFamily: {
        'custom-font': ['Arial', 'sans-serif'],
      },
      spacing: {
        'custom-padding': '1rem',
      },
      // Add other customizations here
    },
  },
  // ... (other configurations)
};


