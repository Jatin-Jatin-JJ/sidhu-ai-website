// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: '#e11d48', // Deep rose for highlights
        dark: '#0f172a',     // Slate-900 for rich blacks
        light: '#fdfcfa',    // Slight off-white background
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
};
