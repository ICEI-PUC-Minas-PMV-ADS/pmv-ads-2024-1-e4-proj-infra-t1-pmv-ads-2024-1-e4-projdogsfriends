/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/Pesquisa/**/*.{html,js,jsx}",
    "./src/pages/Passeador/**/*.{html,js,jsx}",
    "./src/pages/Dashboard/**/*.{html,js,jsx}",    
    "./src/components/google-maps/**/*.{html,js,jsx}",
    "./src/components/footer/**/*.{html,js,jsx}",
    "./src/components/calendar/**/*.{html,js,jsx}",
    "./src/pages/Auth/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

