/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        reliance: {
          red: '#e42529',
          darkred: '#c01519',
          brightred: '#ff3b30',
          yellow: '#fdb913',
          gold: '#eab308',
          navy: '#003380',
          darknavy: '#002255',
          lightgray: '#f5f7fa',
          border: '#e5e7eb',
          subtext: '#555555'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.12)',
        'dropdown': '0 10px 30px rgba(0,0,0,0.15)',
      }
    },
  },
  plugins: [],
}

