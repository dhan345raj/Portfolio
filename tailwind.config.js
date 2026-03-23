/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
        secondary: '#A78BFA',
        accent: '#7DD3FC',
        lavender: '#E8E0F0',
        skyblue: '#DBEAFE',
        glass: 'rgba(255,255,255,0.55)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(108,99,255,0.10)',
        float: '0 20px 60px rgba(108,99,255,0.12)',
        card: '0 4px 24px rgba(0,0,0,0.06)',
      },
      backdropBlur: {
        glass: '16px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        gradientWave: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'floatSlow 5s ease-in-out infinite',
        'gradient-wave': 'gradientWave 4s ease infinite',
      },
    },
  },
  plugins: [],
}
