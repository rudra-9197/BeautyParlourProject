/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      navpink: '#ec4899',
      white: '#FFFFFF',
      grayc: '#bbb',
      grayb:"#717171",
      black: '#000000',
      grayd: '#F8F9F9 ',
      red: '#dc2626',
      purple: '#5D6D7E',
      lightred: '#ef4444',
      lightBlue: '#06b6d4',
      Blue: '#0891b2'
    },

    fontFamily: {
        'crismon': [ "Crimson Text", "serif"]
    },
 
    extend: {}
  },
  plugins: [
    
  ],
}