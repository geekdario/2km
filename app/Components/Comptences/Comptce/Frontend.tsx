import React from 'react'
import Image from 'next/image'
import imreact from "@/public/assets/React.svg"
import imnext from "@/public/assets/next-js.png"
import imjavascript from "@/public/assets/javascript.png"
import imTailwind from "@/public/assets/Tailwindcss.svg"
import imTypescript from "@/public/assets/typescript.svg"
import imframer from "@/public/assets/Framermotion.png"

export const Frontend = () => {
  return (
    <div className='grid grid-cols-3 gap-4 mt-4'>
        {/* React js */}
        <div className=' flex justify-center items-center border pr-5 py-1 rounded-xl bg-pblue bg-opacity-20 border-pblue border-opacity-75  hover:border-pblue cursor-pointer hover:animate-pulse'>
          <Image src={imreact} alt='React' className='w-9' />
        <div className='ml-2'>
          <h3 className='text-l text-white'>React JS</h3>
        <ul className='text-xs pl-3 list-disc '><li>Bon niveau</li></ul>
        </div>
      </div>
             {/* Next js */}
      <div className=' flex justify-center items-center border pr-5 py-1 rounded-xl bg-pblue bg-opacity-20 border-pblue border-opacity-75 hover:border-pblue cursor-pointer hover:animate-pulse '>
          <Image src={imnext} alt='nextjs' className='w-9 ' />
        <div className='ml-2'>
          <h3 className='text-l text-white'>Next JS</h3>
          <ul className='text-xs pl-3 list-disc'><li>Bon niveau</li></ul>
        </div>
      </div>
      
              {/* Javascript */}

      <div className=' flex justify-center items-center border pr-5 py-1 rounded-xl bg-pblue bg-opacity-20 border-pblue border-opacity-75 hover:border-pblue cursor-pointer hover:animate-pulse'>
          <Image src={imjavascript} alt='javascript' className='w-9 ' />
        <div className='ml-2'>
          <h3 className='text-l text-white'>Javascript</h3>
          <ul className='text-xs pl-3 list-disc'><li>Bon niveau</li></ul>
        </div>
      </div>
                    {/* Tailwind css */}
      <div className=' flex justify-center items-center border pr-5 py-1 rounded-xl bg-pblue bg-opacity-20 border-pblue border-opacity-75 hover:border-pblue cursor-pointer hover:animate-pulse'>
          <Image src={imTailwind} alt='TailwindCss' className='w-9 ' />
        <div className='ml-2'>
          <h3 className='text-l text-white'>TailwindCss</h3>
          <ul className='text-xs pl-3 list-disc'><li>Bon niveau</li></ul>
        </div>
      </div>
                             {/* Typescript */}
      <div className=' flex justify-center items-center border pr-5 py-1 rounded-xl bg-pblue bg-opacity-20 border-pblue border-opacity-75 hover:border-pblue cursor-pointer hover:animate-pulse '>
          <Image src={imTypescript} alt='Typescript' className='w-9' />
        <div className='ml-2'>
          <h3 className='text-l text-white'>Typescript</h3>
          <ul className='text-xs pl-3 list-disc'><li>Bon niveau</li></ul>
        </div>
      </div>
                          {/* Framer */}
      <div className=' flex justify-center items-center border pr-5 py-1 rounded-xl bg-pblue bg-opacity-20 border-pblue border-opacity-75 hover:border-pblue cursor-pointer hover:animate-pulse '>
          <Image src={imframer} alt='Framer' className='w-9' />
        <div className='ml-2'>
          <h3 className='text-l text-white'>Framer</h3>
          <ul className='text-xs pl-3 list-disc'><li>Bon niveau</li></ul>
        </div>
      </div>
    
    </div>
  )
}
