"use client"
import React, { useState } from 'react'
import { Frontend } from './Comptce/Frontend'
import { Backend } from './Comptce/Backend'
import { Design } from './Comptce/Design'
import { Autres } from './Comptce/Autres'
import Image from 'next/image'
import telecom from "@/public/assets/Telecommuting.png"
import cercleeffe from "@/public/assets/cercleeffect.png"

export const Competences = () => {

      const comptces: string[] = ["Front-End",
                                "Back-End",
                                  "Design",
                                "Autres"]
      const [lienActive,setlienActive]= useState<number>(0)

      const HandleClick=(index:number)=>{
          setlienActive(index)
      }
      let affichage : JSX.Element=<Frontend/>

      switch(lienActive){
        case 0 :
          affichage=<Frontend/>
          break;
          case 1 :
          affichage=<Backend/>
          break;
          case 2 :
          affichage=<Design/>
          break;
          case 3 :
            affichage=<Autres/>
            break;
      }

  return (
    <div className='w-full pt-20'>
     
      
        <h1 className='mt-2 text-xl md:text-3xl font-extrabold leading-relaxed text-center pb-8'> <span className='bg-pblue px-2 mr-2 font-extrabold shadow-lg rounded-tl-2xl rounded-br-2xl'>
          COMPETENCES</span>ACQUISES DURANTS<br/> MES VEILLES</h1>
     
      <div className='flex justify-center items-center'>
      <Image src={telecom} alt='telecom' className='w-1/3'/>

      </div>
      <div className='w-full flex justify-center'>
        <ul className=' flex justify-center text-sm md:text-xl pt-5 ' >
        {  comptces.map((comptce,index)=>(<li key={index} className={` ml-5 md:ml-10 cursor-pointer ${index===lienActive ? "text-pblue border-b-4 border-b-pblue transition all scale-110 translate-x delay-75":""}`} onClick={()=>HandleClick(index)}>{comptce}</li>))}
        
          
        </ul>
        
        
      </div>
             <div className='hidden md:flex  w-2/3 h-1 bg-pblue mt-0 mx-60 opacity-25'>
           </div>
      <main className='w-full h-36 flex justify-center items-center'>
       {affichage}
        {/* <Frontend/>
        <Backend/>
        <Design/>
        <Autres/> */}
      </main>
      
      
    </div>
  )
}
