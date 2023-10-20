
import { Competences } from '@/app/Components/Comptences/Competences'
import { Hero } from '@/app/Components/Hero/Hero'
import React from 'react'
import { Service } from '@/app/Components/Servicess/Service'
import { Connaissance } from '@/app/Components/Connaissance/Connaissance'
import { Atouts } from '@/app/Components/Atouts/Atouts'
import { Hireme } from '@/app/Components/Hire/Hireme'
//  import { motion } from "framer-motion"



export default function Accueil() {
  return (
    <div 
    className='relative w-full h-full text-white'>
     {/* <Image src={Background} alt="l'arriere plan de ma page " className='w-full absolute -z-10 bg-no-repeat  bg-cover'/> */}

     
     <div className='w-full'>
    {/* <Navbar/> */}
     <Hero/>
     <Competences/>
     <Service/>
     <Connaissance/>
     {/* <Contact/> */}
     <Atouts/>
     <Hireme/>
     {/* <Footer/> */}

     </div>
   
    {/* navbar */}
     {/* heros */}
      {/* Competences */}
       {/* Projets */}
        {/* Atous */}
         {/* contact */}

    </div>
  )
}
