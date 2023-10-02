import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'pblue': '#328AF1',
      'white': '#FFFFFF',
      'bg-col':'#000C1C'
      
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

