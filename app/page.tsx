"use client"
import Image from 'next/image'

import Background from '@/public/assets/Back2.jpg'
import Accueil from "./Components/Accueil/Accueil";
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';

export default function Home() {
  return (
    <div className="">
       
        <Accueil/>
       
   {/* <Image src={Background} alt="l'arriere plan de ma page " className='w-full h-full absolute -z-50 top-0 
    '/> */}
  
   <div className='flex justify-center items-center  bg-fpblue p-2 right-0 top-72 fixed z-20 shadow-3xl shadow-white rounded-l-lg hover:bg-pblue cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 ">
          <path fillRule="evenodd" d="M19.5 9.75a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l4.72-4.72a.75.75 0 111.06 1.06L16.06 9h2.69a.75.75 0 01.75.75z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
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
{/*    
   <div className=' bg-bg-col bg-opacity-50 backdrop-blur w-full relative'>
 
 

     </div> */}
   
    </div>
  )
}
