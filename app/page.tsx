"use client"
import Image from 'next/image'

import Background from '@/public/assets/Back2.jpg'
import Accueil from "./Pages/Accueil/Accueil";
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';

export default function Home() {
  return (
    <div className="relative w-full h-full text-white ">
   <Image src={Background} alt="l'arriere plan de ma page " className='w-full h-full absolute -z-10 '/>
 
   <div className=' bg-bg-col bg-opacity-50 backdrop-blur w-full '>
    <Navbar/>
    <Accueil/>
     <Footer/>

     </div>
   
    </div>
  )
}
