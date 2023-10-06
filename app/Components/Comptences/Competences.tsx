"use client"
import React, { useState } from 'react'
import { Frontend } from './Comptce/Frontend'
import { Backend } from './Comptce/Backend'
import { Design } from './Comptce/Design'
import { Autres } from './Comptce/Autres'

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
      <h1 className='text-3xl text-center'>
         -Competences-
      </h1>
      <div>
        <ul className='flex justify-center text-xl pt-5 ' >
        {  comptces.map((comptce,index)=>(<li key={index} className={`ml-10 cursor-pointer ${index===lienActive ? "text-pblue border-b-4 border-b-pblue transition all scale-110 translate-x delay-75":""}`} onClick={()=>HandleClick(index)}>{comptce}</li>))}
        
          
        </ul>
        
        <div className='w-2/3 h-1 bg-pblue mt-0 mx-60 opacity-25'>
        </div>
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