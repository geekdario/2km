import React from 'react'
import Image from 'next/image'
import imPhotoshop from "@/public/assets/Photoshop.png"
import imfigma from "@/public/assets/Figma.png"


export const Design = () => {
  return (
    <div className='grid grid-cols-2 mt-14 md:grid-cols-3 gap-4 md:mt-4'> 
      {/* Node js */}
    <div className=' flex justify-center items-center border pr-5 py-1 rounded-xl bg-pblue bg-opacity-20 border-pblue border-opacity-75 hover:border-pblue cursor-pointer hover:animate-pulse'>
      <Image src={imPhotoshop} alt='Photoshop' className='w-9 ' />
    <div className='ml-2'>
      <h3 className='text-l text-white'>Photoshop</h3>
      <ul className='text-xs pl-3 list-disc'><li>Bon niveau</li></ul>
    </div>
  </div>
         {/* Postgres  */}
  <div className=' flex justify-center items-center border pr-5 py-1 rounded-xl bg-pblue bg-opacity-20 border-pblue border-opacity-75 hover:border-pblue cursor-pointer hover:animate-pulse'>
      <Image src={imfigma} alt='Figma' className='w-9 ' />
    <div className='ml-2'>
      <h3 className='text-l text-white'>Figma</h3>
      <ul className='text-xs pl-3 list-disc'><li>Bon niveau</li></ul>
    </div>
  </div></div>
  )
}
