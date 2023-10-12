/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend : {
        colors: {
        'primary': '#1e293b',
        'pink': '#7F3DD2',
        'green': '#1FC77E',
        'yellow': '#FEEA00',
        'black': '#000000',
        'white': '#FFFFFF',
      },  
      container: {
        center: true,
        padding: "15rem"
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}
