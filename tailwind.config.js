/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange' : '#FF391F',
        'gray': '#6F5B58',
        'silver': '#787878',
        'cardcolor': '#FF9E92'
      },
      
    },
  },
  plugins: [],
};
