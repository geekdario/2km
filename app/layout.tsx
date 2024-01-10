
import { Footer } from './Components/Footer/Footer'
import { Navbar } from './Components/Navbar/Navbar'



import './globals.css'
 import type { Metadata } from 'next'


 export const metadata: Metadata= {
   title: 'Geekdario | Portfolio',
    description: 'Generated by 2KM',
 }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
       
      <body className='relative w-full text-white bg-bg-col antialiased'>
        <Navbar/>
        <main>
        {children}
        </main>
        <Footer/>
        
        </body>
    </html>
  )
}
