"use client"
import Image from 'next/image'
 import webdesign from "@/public/assets/webdesign.svg"
 import integration from "@/public/assets/integration.svg"
 import coding from "@/public/assets/coding.svg"
 import Graphique from "@/public/assets/graphic.svg"
 import { DocumentArrowDownIcon} from '@heroicons/react/24/solid'
  import cercleeffe from "@/public/assets/cercleeffect.png"

//  import { motion } from "framer-motion"
 //import round from "@/public/assets/round.png"
import React from 'react'

export const Service = () => {
  return (
    <div id='services' className='w-full mt-20 relative z-10'>
         

       

       <Image src={cercleeffe} alt="cercle effet" className='w-16 absolute -z-10 hidden md:flex md:left-96 md:top-0'/>
        <h1 className='mt-2 text-xl md:text-3xl font-extrabold leading-relaxed text-center pb-8'>JE PROPOSE DES <span className='bg-pblue px-2 mr-2 font-extrabold shadow-lg rounded-tl-2xl rounded-br-2xl '>SERVICES</span><br/> DE QUALITES</h1>
    
       <div className='flex justify-center flex-wrap items-center w-full'>

       <div  className='grid grid-cols-1 gap-4 lg:grid-cols-4 md:gap-4 md:grid-cols-3 sm:grid-cols-2'>
        
        <div className='flex flex-col items-center justify-center border-dashed border-2 shadow-2xl border-pblue w-60 pt-4 rounded-xl transition-all cursor-pointer hover:bg-pblue hover:transition-all hover:-translate-y-2 md:hover:-translate-y-4'>
            <div className='rounded-full bg-white w-20 h-20 p-5 shadow-md'>
                <Image src={webdesign} alt="Webdesign" className='w-10 '/>
            </div>
            <h3 className='mt-2 text-2xl font-extrabold'>Web design</h3>
            <p className='text-center p-5 font-sans'>Réalisation complete de maquette pour votre site vitrine,application web et mobile </p>
        </div>

        <div className='flex flex-col items-center justify-center border-dashed border-2 shadow-2xl border-pblue w-60 pt-4 rounded-xl transition-all cursor-pointer hover:bg-pblue hover:transition-all hover:-translate-y-2 md:hover:-translate-y-4'>
            <div className='rounded-full bg-white w-20 h-20 p-5 shadow-md'>
                <Image src={integration} alt="Webdesign" className='w-10 '/>
            </div>
            <h3 className='mt-2 text-2xl font-extrabold'>Integration Web</h3>
            <p className='text-center p-5 font-sans'>Conversion d'une maquette en site vitrine,application web et mobile </p>
        </div>


        <div className='flex flex-col items-center justify-center border-dashed border-2 shadow-2xl border-pblue w-60 pt-4 rounded-xl transition-all cursor-pointer hover:bg-pblue hover:transition-all hover:-translate-y-2 md:hover:-translate-y-4'>
            <div className='rounded-full bg-white w-20 h-20 p-5 shadow-md'>
                <Image src={coding} alt="Webdesign" className='w-10 '/>
            </div>
            <h3 className='mt-2 text-2xl font-extrabold'>Développement</h3>
            <p className='text-center p-5 font-sans'>Développement sur mesure de votre site vitrine,application web et mobile </p>
        </div>


        <div className='flex flex-col items-center justify-center border-dashed border-2 shadow-2xl border-pblue w-60 pt-4 rounded-xl transition-all cursor-pointer hover:bg-pblue hover:transition-all hover:-translate-y-2 md:hover:-translate-y-4'>
            <div className='rounded-full bg-white w-20 h-20 p-5 shadow-md'>
                <Image src={Graphique} alt="Webdesign" className='w-10 '/>
            </div>
            <h3 className='mt-2 text-2xl font-extrabold'>Design Graphique</h3>
            <p className='text-center p-5 font-sans'>Identifiez-vous par votre logo,Flyer,Carte de visite etc...</p>
        </div>


       </div>
      

       </div>
         <div>

                    <div className='w-full mt-20 flex justify-center items-center'>
                        <div className=' bg-pblue w-3/4 h-60 flex justify-around items-center flex-col sm:flex-col sm:px-3 md:flex-row shadow-2xl'>
                            <div className='flex flex-col'>
                                <div className='text-3xl font-extrabold'>En savoir plus sur mon parcours</div>
                                <div className='text-gray-200'>Ma détermination c'est ça ma magie</div>
                            </div>
                            <a href='assets/cvmedard.pdf' download className='flex justify-center items-center border-2 bg-pblue bg-opacity-60 text-xl px-8 py-3 shadow-2xl rounded hover:bg-fpblue cursor-pointer'><DocumentArrowDownIcon className="h-5  text-blue-500 " /><span className='pl-2'>Télécharger</span></a>
                        </div>
                    
                    
                    </div>
                </div> 

    </div>
  )
}
