/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens:{
        'xs': {'min': '320px'},
        'sm': {'min': '640px'},
        'md': {'min': '768px'},
        'lg': {'min': '1024px'},
        'xl': {'min': '1280px'},
        '2xl': {'min': '1536px'},
      },
      fontFamily:{
        'MainTextFont': ['Please', 'sans-serif'],
        'SecondaryFont': ['Yeseva One', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'Ubuntu': ['Ubuntu', 'sans-serif']
      },
      colors:{
        'BlackColor': '#000000',
        'WhiteColor': '#ffffff',
        'GrayColor': '#7a7a7a',
        'MainColor': '#fa12a2',
        'secondaryColor': '#f7088e',
        'OptionalColor': '#fcc4e7',
        'ButtonColorFirst': '#ff2383',
        'ButtonColorSecond': '#ff5ba2',
        'GradientMixtureFirst':'#f9e8f6',
        'GradientMixtureSecond':'#f9a0f3',
        'GradientMixtureThird':'#ed65da',
      },
      backgroundImage:{
        'serviceOneImage': "url('Images/service.jpg')",
        'serviceTwoImage': "url('Images/service2.jpg')",
        'serviceThreeImage': "url('Images/service3.jpg')",
        'serviceFourImage': "url('Images/service4.jpg')",
      },
    },
  },
  plugins: [],
}
