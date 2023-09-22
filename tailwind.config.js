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
      'greyProfile':'#F2F2F2',
      'whiteI': '#fff',
      'blueS':"#4285F4",
      'blueE':"#286DE0",
      'inputBg':"#F5F5F5",
      'link':'#346BD4',
      'blueBg':'#4285F4',
      'lightGreen':'#7FCD93',
      'safron': '#EE8484',
      'lightYellow': '#F6DC7D',
      'lightViolet':'#A9B0E5',
      'lightSafron':'#ECA4A4',
      'gold':'#DEBF85',
      'greenPercent':'#4AD15F',
      'greenPercentBg':'#E9F9EB',
      'whatsapp':'#25D366',
      'insta':'#d62976',
      'youtube':'#FF0000',
      'mail':'#7c6efa',
      'instaBg':'#FFE9EC',
      'youtubeBg':'#FFE9E9',
      'mailBg':'#EBE6F9',
      'profileTrans':'#F8FAFF',

    },
  },
  plugins: [],
}
