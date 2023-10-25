"use client"
import React, { useEffect } from 'react'
import Image from "next/image"
import Gmail from "@/public/assets/email.svg"
import GitHub from "@/public/assets/github.svg"
import Linkedln from "@/public/assets/linkedin.svg"
import Geek from "@/public/assets/geek.png"
import imheroreact from '@/public/assets/React.svg'
import imherojs from '@/public/assets/javascript.png'
import imherotail from '@/public/assets/Tailwindcss.svg'
import Typewriter from 'typewriter-effect';
import {motion} from "framer-motion"
export const Hero = () => {
//   interface Fonctions{
//     id:number;
//     Fonction:string;
//  }
      // const foncslide:Fonctions=[{id:1,Fonction:"Web"},{id:2,Fonction:"Desktop"}]
    

          

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }}  transition={{ duration: 0.5 }}  className=' w-full md:flex flex-wrap justify-center items-center md:pt-16 '>
        <div className="">
          <div className='text-center text-xl md:text-left'>Salut! je suis- </div>
          <h2 className=' text-3xl text-center  md:text-left sm:text-4xl text-pblue font-extrabold'>Kouadio Kouakou Médard</h2>
          <h3 className='text-center text-3xl sm:flex sm:justify-center sm:text-2xl md:text-left md:justify-start font-extrabold'><span className='mr-4'>Développeur</span> <Typewriter
                options={{
                  strings: ['Web', 'Desktop'],
                  autoStart: true,
                  loop: true,
                }} /> <span>&Webdesigner</span>
                </h3>
          <div className='text-xs text-center pt-4 sm:text-sm md:text-left'>
            Passionné du monde de l'informatique plus précisément<br/>  en développement d'applications,j'en ai décidé d'en faire <br/> mon métier. De nature curieuse, le monde de l'informatique<br/>  permet de m'épanouir et d'une autre façon d'apprendre <br/>alors jetez un coup d'oeil à
            mes compétences et services.
            </div>
          <div className='flex flex-col items-center md:items-start pt-2'>
            <div className='flex'>
            <a href='https://github.com/geekdario' target="_blank" className='flex justify-center items-center bg-pblue p-2 m-2  rounded-2xl shadow-lg transition-all delay-150 hover:bg-fpblue hover:brightness-150 cursor-pointer' >
                <Image src={GitHub} alt="l'image de GitHub"className='w-8'/>
                <span className='px-2 text-white font-bold'>GitHub</span>
              </a>

              <a href='https://www.linkedin.com/in/kouakou-medard-kouadio-56247a175' target='_blank' className='flex justify-center items-center bg-pblue p-2 m-2 rounded-2xl shadow-lg transition-all delay-150 hover:bg-fpblue hover:brightness-150 cursor-pointer'>
                  <Image src={Linkedln} alt="l'image de Linkedln" className='w-8'/>
                  <span className='px-2 text-white font-bold  hover:text-gray-50'>Linkedln</span>
              </a>

            </div>
            <div className='w-72 mb-8'>
            <a className='flex justify-center items-center bg-pblue p-2 m-2 rounded-2xl shadow-lg transition-all delay-150 hover:bg-fpblue hover:brightness-150'>
              <Image src={Gmail} alt="l'image de GitHub" className='w-8 '/>
              <span className='px-3 text-white font-bold '>geekdario95@gmail.com</span></a>
              

            </div>
          </div>
        </div>


        <div className=' relative mx-20'>
            <div className='flex relative bg-gradient-to-tr from-pblue via-pblue to-white  w-64 h-96  rounded-3xl shadow-lg '>
           
            </div>
            <Image src={Geek} alt='photo geek' className='absolute right-24 -top-8 w-36 sm:left-8 md:-top-8 '/>
            <Image src={imherojs} alt='photo js' className='absolute w-10 top-2 right-12 sm:left-56  rounded shadow-lg animate-bounce'/>
            <Image src={imheroreact} alt='photo react' className='absolute w-12 top-6 -left-6 rounded  animate-bounce [animation-delay:-.3s]'/>
            <Image src={imherotail} alt='photo tailwind' className='absolute w-12 bottom-5 -left-5 rounded  animate-bounce [animation-delay:-.5s]'/>
           
        </div>




      </motion.div>
  )
}
