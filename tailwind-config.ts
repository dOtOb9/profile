module.exports = {
  plugins: [
    require('tailwindcss-animated')
  ],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(5px)' }, 
        }
      },
      animation: {
        bounce: 'bounce 1s infinite',
      }
    },
  }
}