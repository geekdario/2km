import Image from 'next/image'
import { Competences } from '@/app/Components/Comptences/Competences'
import { Hero } from '@/app/Components/Hero/Hero'
import { Navbar } from '@/app/Components/Navbar/Navbar'
import { Projets } from '@/app/Components/Projets/Projets'
import React from 'react'



export default function Accueil() {
  return (
    <div className='relative w-full h-full text-white'>
     {/* <Image src={Background} alt="l'arriere plan de ma page " className='w-full absolute -z-10 bg-no-repeat  bg-cover'/> */}
     <div className=' bg-bg-col bg-opacity-50 backdrop-blur w-full '>
    <Navbar/>
     <Hero/>
     <Competences/>
     <Projets/> 

     I</div>
    {/* navbar */}
     {/* heros */}
      {/* Competences */}
       {/* Projets */}
        {/* Atous */}
         {/* contact */}

    </div>
  )
}
