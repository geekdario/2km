import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'fpblue':"#2E83E7",
      'pblue': '#328AF1',
      'white': '#FFFFFF',
      'bg-col':'#000C1C',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      
    },
    extend: {
    //  backgroundImage: {
    //     'back-image': "url(`'portfolio/public/assets/Back2.jpg'`)",
        
    //   }
  
    },
  },
  plugins: [],
}
export default config

