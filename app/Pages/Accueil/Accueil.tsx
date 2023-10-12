import Image from 'next/image'
import { Competences } from '@/app/Components/Comptences/Competences'
import { Hero } from '@/app/Components/Hero/Hero'
import { Navbar } from '@/app/Components/Navbar/Navbar'
import { Projets } from '@/app/Components/Projets/Projets'
import React from 'react'
import { Service } from '@/app/Components/Servicess/Service'
import { Connaissance } from '@/app/Components/Connaissance/Connaissance'
import { Footer } from '@/app/Components/Footer/Footer'



export default function Accueil() {
  return (
    <div className='relative w-full h-full text-white'>
     {/* <Image src={Background} alt="l'arriere plan de ma page " className='w-full absolute -z-10 bg-no-repeat  bg-cover'/> */}

     <div className='flex justify-center items-center  bg-fpblue p-2 right-0 top-72 fixed z-20 shadow-3xl shadow-white rounded-l-lg hover:bg-pblue cursor-pointer'>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 ">
  <path fill-rule="evenodd" d="M19.5 9.75a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l4.72-4.72a.75.75 0 111.06 1.06L16.06 9h2.69a.75.75 0 01.75.75z" clip-rule="evenodd" />
  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
</svg>

       <div>
            <div className='font-semibold text-xs'>
                Contactez-moi
           </div>
            <div className='text-xs'>
             07 87 76 61 09
            </div>
       </div>
     </div>
     <div className=' bg-bg-col bg-opacity-50 backdrop-blur w-full '>
    <Navbar/>
     <Hero/>
     <Competences/>
     <Service/>
     <Connaissance/>
   
     <Footer/>

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
