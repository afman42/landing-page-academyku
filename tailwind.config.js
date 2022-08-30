/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./*.{html,js}"], 
 theme: {
    extend: {
      spacing: {
         '20px': '20px',
         '24px': '24px',
         '32px': '32px',
         '36px': '36px',
         '40px': '40px',
         '48px': '48px',
         '100px': '100px',
         '244px': '244px',
         '259px': '259px',
         '328px': '328px',
         '349px': '349px',
         '359px': '359px',
         '352px': '352px',
         '373px': '373px',
         '416px': '416px',
         '433px': '433px',
         '702px': '702px'
      },
      screens: {
         'sm': {
            'max': '500px'
         }
      }
    },
  },
  plugins: [],
}
