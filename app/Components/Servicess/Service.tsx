import Image from 'next/image'
 import web from "@/public/assets/web.svg"
 import integration from "@/public/assets/integration.svg"
 import coding from "@/public/assets/coding.svg"
 import Graphique from "@/public/assets/graphic.svg"
 import download from "@/public/assets/download.svg"
 //import round from "@/public/assets/round.png"
import React from 'react'

export const Service = () => {
  return (
    <div className='w-full mt-20'>

        <h1 className='text-3xl text-center m-20'>
         -Services-
       </h1>
       
       <div className='flex justify-center items-center w-full'>
       <div className='grid grid-cols-4 gap-6'>
        
        <div className='flex flex-col items-center justify-center border-dashed border-2 shadow-2xl border-pblue w-60 pt-4 rounded-xl transition-all cursor-pointer hover:bg-pblue hover:transition-all hover:-translate-y-4'>
            <div className='rounded-full bg-white w-20 h-20 p-5 shadow-md'>
                <Image src={web} alt="Webdesign" className='w-10 '/>
            </div>
            <h3 className='mt-2 text-2xl font-extrabold'>Web design</h3>
            <p className='text-center p-5'>Réalisation complete de maquette pour votre site vitrine,application web et mobile </p>
        </div>

        <div className='flex flex-col items-center justify-center border-dashed border-2 shadow-2xl border-pblue w-60 pt-4 rounded-xl transition-all cursor-pointer hover:bg-pblue hover:transition-all hover:-translate-y-4'>
            <div className='rounded-full bg-white w-20 h-20 p-5 shadow-md'>
                <Image src={integration} alt="Webdesign" className='w-10 '/>
            </div>
            <h3 className='mt-2 text-2xl font-extrabold'>Integration Web</h3>
            <p className='text-center p-5'>Conversion d'une maquette en site vitrine,application web et mobile </p>
        </div>


        <div className='flex flex-col items-center justify-center border-dashed border-2 shadow-2xl border-pblue w-60 pt-4 rounded-xl transition-all cursor-pointer hover:bg-pblue hover:transition-all hover:-translate-y-4'>
            <div className='rounded-full bg-white w-20 h-20 p-5 shadow-md'>
                <Image src={coding} alt="Webdesign" className='w-10 '/>
            </div>
            <h3 className='mt-2 text-2xl font-extrabold'>Développement</h3>
            <p className='text-center p-5'>Développement sur mesure de votre site vitrine,application web et mobile </p>
        </div>


        <div className='flex flex-col items-center justify-center border-dashed border-2 shadow-2xl border-pblue w-60 pt-4 rounded-xl transition-all cursor-pointer hover:bg-pblue hover:transition-all hover:-translate-y-4'>
            <div className='rounded-full bg-white w-20 h-20 p-5 shadow-md'>
                <Image src={Graphique} alt="Webdesign" className='w-10 '/>
            </div>
            <h3 className='mt-2 text-2xl font-extrabold'>Design Graphique</h3>
            <p className='text-center p-5'>Identifiez-vous par votre logo,Flyer,Carte de visite etc...</p>
        </div>


       </div>
      

       </div>
                    <div>

                <div className='w-full mt-20 flex justify-center items-center'>
                    <div className=' bg-pblue w-3/4 h-60 flex justify-around items-center shadow-2xl'>
                        <div className='flex flex-col'>
                        <div className='text-3xl font-extrabold'>En savoir plus sur mon parcours</div>
                        <div className='text-gray-200'>Ma détermination c’est ça ma magie</div>
                        </div>
                        <button className='flex justify-center items-center border-2 bg-pblue bg-opacity-60 text-xl px-8 py-3 shadow-2xl hover:bg-fpblue'><Image src={download} alt='download'className='w-10' /><span className='pl-2'>Télécharger</span></button>
                    </div>
                   
                
                </div>
                </div>

    </div>
  )
}
