/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gov: {
          navy: '#0B2545',
          navyDark: '#06172D',
          navyLight: '#133E68',
          blue: '#134B70',
          sky: '#EEF4F8',
          saffron: '#FF671F',
          saffronLight: '#FFF4EE',
          green: '#046A38',
          greenLight: '#EBF6EF',
          gold: '#C59B27',
          grayBg: '#F8FAFC',
          cardBorder: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'gov': '0 2px 4px rgba(11, 37, 69, 0.06), 0 4px 12px rgba(11, 37, 69, 0.04)',
        'gov-lg': '0 8px 24px rgba(11, 37, 69, 0.08), 0 2px 6px rgba(11, 37, 69, 0.04)',
      }
    },
  },
  plugins: [],
}

