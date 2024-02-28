/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily : {
        'parisienne' : ['Parisienne'],
        'poppins' : ['Poppins'],
        'MateSC':['Mate SC'],
        'LibreBaskerville':['Libre Baskerville'],
        'Outfit':['Outfit'],
        'Rubik':['Rubik'],
        'Jost':['Jost']
      },
      dropShadow : {
        '3xl' : '0px 50px 50px rgba(0,0,0,0.7)',
      },
      colors : {
        'primary-color' : "#152238",
        // 'primary-color' : "#262e57",
        // 'primary-blue':'#a5e9e8',
      }
    },
  },
  plugins: [],
}

