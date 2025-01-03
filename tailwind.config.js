/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-btn': '#02018B',
        'white-blur-15': '#FFFFFF26',
        'white-blur-10': '#FFFFFF1A',
        'white-blur-20': '#FFFFFF33',
        'white-blur-30': '#FFFFFF4D'
      },
      fontFamily: {
        josefin: ['Josefin Sans'],
      },
      backgroundImage: {
        'fis-bg': "url('/src/assets/bg.svg')",
      }
    },
  },
  plugins: [],
}

