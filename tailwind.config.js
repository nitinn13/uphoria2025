/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', './src/**/*.{js,ts,jsx,tsx}',
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        colombo: ['Colombo SF', 'sans-serif'],
        times: ['Times New Roman', 'serif'],
      },
      backgroundImage: {
        'uphoriadark': "url('assets/uphoria-dark.svg')",
      },
    },
  },
  plugins: [],
};
