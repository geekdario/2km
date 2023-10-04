import Image from 'next/image'
 import web from "@/public/assets/web.svg"
import React from 'react'

export const Service = () => {
  return (
    <div className='w-full mt-20'>

        <h1 className='text-3xl text-center m-20'>
         -Services-
       </h1>
       
       <div className='flex justify-center items-center'>
       <div className='grid grid-cols-4 gap-10 '>
        
        <div className='flex flex-col items-center justify-center border-dashed border-2 shadow-2xl border-pblue w-60 pt-4 rounded-xl transition-all cursor-pointer hover:bg-pblue hover:transition-all hover:-translate-y-4'>
            <div className='rounded-full bg-white w-20 h-20 p-5 shadow-md'>
                <Image src={web} alt="Webdesign" className='w-10 '/>
            </div>
            <h3 className='mt-2 text-2xl font-extrabold'>Web design</h3>
            <p className='text-center p-5'>Réalisation complete de maquette pour votre site vitrine,application web et mobile </p>
        </div>

        <div className='flex flex-col items-center justify-center border-dashed border-2 shadow-2xl border-pblue w-60 pt-4 rounded-xl transition-all cursor-pointer hover:bg-pblue hover:transition-all hover:-translate-y-4'>
            <div className='rounded-full bg-white w-20 h-20 p-5 shadow-md'>
                <Image src={web} alt="Webdesign" className='w-10 '/>
            </div>
            <h3 className='mt-2 text-2xl font-extrabold'>Web design</h3>
            <p className='text-center p-5'>Réalisation complete de maquette pour votre site vitrine,application web et mobile </p>
        </div>


        <div className='flex flex-col items-center justify-center border-dashed border-2 shadow-2xl border-pblue w-60 pt-4 rounded-xl transition-all cursor-pointer hover:bg-pblue hover:transition-all hover:-translate-y-4'>
            <div className='rounded-full bg-white w-20 h-20 p-5 shadow-md'>
                <Image src={web} alt="Webdesign" className='w-10 '/>
            </div>
            <h3 className='mt-2 text-2xl font-extrabold'>Web design</h3>
            <p className='text-center p-5'>Réalisation complete de maquette pour votre site vitrine,application web et mobile </p>
        </div>


        <div className='flex flex-col items-center justify-center border-dashed border-2 shadow-2xl border-pblue w-60 pt-4 rounded-xl transition-all cursor-pointer hover:bg-pblue hover:transition-all hover:-translate-y-4'>
            <div className='rounded-full bg-white w-20 h-20 p-5 shadow-md'>
                <Image src={web} alt="Webdesign" className='w-10 '/>
            </div>
            <h3 className='mt-2 text-2xl font-extrabold'>Web design</h3>
            <p className='text-center p-5'>Réalisation complete de maquette pour votre site vitrine,application web et mobile </p>
        </div>


   
       
       </div>

       </div>

    </div>
  )
}
