import React from 'react'
import Image from "next/image"
import Gmail from "@/public/assets/email.svg"
import GitHub from "@/public/assets/github.svg"
import Linkedln from "@/public/assets/linkedin.svg"
import Geek from "@/public/assets/geek.png"
import imheroreact from '@/public/assets/React.svg'
import imherojs from '@/public/assets/javascript.png'
import imherotail from '@/public/assets/Tailwindcss.svg'

export const Hero = () => {
  return (
    <div  className=' w-full flex justify-center items-center pt-16'>
        <div className="">
          <span>Salut! je suis- </span>
          <h2 className='text-4xl text-pblue font-extrabold'>Kouadio Kouakou Médard</h2>
          <h3 className='text-2xl font-extrabold'>Développeur Web & Desktop & Webdesigner</h3>
          <div className='pt-8 text-l'>
            Passionné du monde de l'informatique plus précisément<br/>  en développement d'applications,j'en ai décidé d'en faire <br/> mon métier. De nature curieuse, le monde de l'informatique<br/>  permet de m'épanouir et d'une autre façon d'apprendre.
            </div>
          <div className='flex flex-col pt-2'>
            <div className='flex'>
            <button className='flex justify-center items-center bg-pblue p-2 m-2  rounded-2xl shadow-lg transition-all hover:bg-fpblue hover:brightness-150' >
                <Image src={GitHub} alt="l'image de GitHub"className='w-8'/>
                <span className='px-2 text-white font-bold'>GitHub</span>
              </button>
              <button  className='flex justify-center items-center bg-pblue p-2 m-2 rounded-2xl shadow-lg transition-all hover:bg-fpblue hover:brightness-150'>
                  <Image src={Linkedln} alt="l'image de Linkedln" className='w-8'/>
                  <span className='px-2 text-white font-bold  hover:text-gray-50'>Linkedln</span>
              </button>

            </div>
            <div>
            <button  className='flex justify-center items-center bg-pblue p-2 m-2 rounded-2xl shadow-lg transition-all hover:bg-fpblue hover:brightness-150'>
              <Image src={Gmail} alt="l'image de GitHub" className='w-8 '/>
              <span className='px-3 text-white font-bold '>geekdario95@gmail.com</span></button>
              

            </div>
          </div>
        </div>


        <div className=' relative mx-20'>
            <div className=' bg-gradient-to-tr from-pblue via-pblue to-white  w-64 h-96  rounded-3xl shadow-lg  '>
           
            </div>
            <Image src={Geek} alt='photo geek' className='absolute w-36 -top-8 right-12'/>
            <Image src={imherojs} alt='photo js' className='absolute w-10 top-2 -right-3 rounded shadow-lg animate-bounce'/>
            <Image src={imheroreact} alt='photo react' className='absolute w-12 top-6 -left-6 rounded  animate-bounce'/>
            <Image src={imherotail} alt='photo tailwind' className='absolute w-12 bottom-5 -left-5 rounded  animate-bounce'/>
           
        </div>
      </div>
  )
}
