/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#63D4E8',
          light: '#FF8F5E',
          dark: '#E55A28',
        },
        background: {
          DEFAULT: '#0A0A0F',
          surface: '#14141A',
          surfaceLight: '#1E1E26',
        },
        text: {
          primary: '#FAFAFA',
          secondary: '#9CA3AF',
          muted: '#6B7280',
        },
        status: {
          success: '#22C55E',
          successLight: '#4ADE80',
          error: '#EF4444',
          errorLight: '#F87171',
          warning: '#F59E0B',
        },
        accent: {
          DEFAULT: '#8B5CF6',
          light: '#A78BFA',
        },
        border: {
          DEFAULT: '#2A2A35',
          light: '#3A3A45',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
}
