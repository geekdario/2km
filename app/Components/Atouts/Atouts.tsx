import React from 'react'
import Image from 'next/image'
import programmer from "@/public/assets/Programmer-pana.svg"
import cercleeffe from "@/public/assets/cercleeffect.png"

// import {motion} from "framer-motion"


export const Atouts = () => {
    
    type Lisatout={
        id:number,
        title:string,
        Description:string
    }
                    const Listatouts :Lisatout[]=[{
                        id:1,
                        title:"Créatif",
                        Description:"Lorem ipsum dolor sit amet consectetur adipisicing elit"
                    },
                    {
                        id:2,
                        title:"Solutionniste",
                        Description:"Lorem ipsum dolor sit amet consectetur adipisicing elit"
                    },
                    {
                        id:3,
                        title:"Adaptabilité",
                        Description:"Lorem ipsum dolor sit amet consectetur adipisicing elit"
                    }]


  return (
    <div id='atouts' className='flex-wrap md:flex justify-center items-center w-full py-5'>
        
        <div  className='' >
            <Image  src={programmer} alt='le programmeur' className=' h-72 w-70  md:w-auto md:h-96  transition-all hover:opacity-70 hover:transition-all hover:delay-150 '/>
        </div>
        <div className='md:flex flex-col relative z-10'>
        <Image src={cercleeffe} alt="cercle effet" className='w-16  absolute hidden md:flex -z-10 md:left-3 -top-2'/>
            <h2 className='text-xl md:text-4xl md:leading-relaxed text-center font-semibold uppercase'>Découverte de certains<br/><span className='bg-pblue px-2 mr-2 font-extrabold shadow-lg rounded-tl-2xl rounded-br-2xl mt-2'>Atouts</span>durant ma formation</h2>
            <p className='pt-11 font-sans text-center md:text-left pl-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> A officia molestiae dolorum tempora ut accusamus cupiditate!<br/> Nesciunt tempora reiciendis libero voluptate!</p>
            <ul className='pl-16'> 
                {Listatouts.map((List)=>(<li key={List.id} className='py-3 '>
                    
                    <h3 className='text-xl text-center md:text-left md:text-2xl font-extrabold  pr-6'>
                     <span className='text-pblue text-2xl md:text-3xl '>0{List.id}.</span> {List.title}   
                    </h3>
                    <p className='pl-16 font-sans text-center md:text-left'>
                        {List.Description}
                    </p>
                    
                    
                    </li>))}
            </ul>
        </div>

        
        
    </div>
  )
}
