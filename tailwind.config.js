/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0071e3',
          deep: '#005fc0',
          sky: '#42a1ff',
        },
        ink: {
          DEFAULT: '#1d1d1f',
          secondary: '#6e6e73',
          muted: '#86868b',
        },
        surface: {
          DEFAULT: '#ffffff',
          soft: '#fbfbfd',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
};
