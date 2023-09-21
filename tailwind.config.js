/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'black':'#000',
      'greySoft':'#858585',
      'bgSoft':'#F8FAFF',
      'whiteI': '#fff',
      'blueS':"#4285F4",
      'blueE':"#286DE0",
      'inputBg':"#F5F5F5",
      'link':'#346BD4',
      'blueBg':'#4285F4',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
     
    },
  },
  plugins: [],
}
