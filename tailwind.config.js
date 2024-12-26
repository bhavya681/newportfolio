module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#4a56e2',
        secondary: '#ffc857',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        bounceIn: {
          '0%, 100%': { transform: 'scale(0.9)', opacity: 0 },
          '50%': { transform: 'scale(1.1)', opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        bounceIn: 'bounceIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
