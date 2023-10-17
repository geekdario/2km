import React from 'react'
import Image from 'next/image'
import programmer from "@/public/assets/Programmer-pana.svg"


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
    <div className='md:flex justify-center  items-center w-full h-screen'>
        <div>
            <Image src={programmer} alt='le programmeur' className='ml-5 h-96 transition-all hover:opacity-70 hover:transition-all hover:delay-150 '/>
        </div>
        <div className='md:flex flex-col'>
            <h2 className='text-4xl leading-normal'>Découverte de certaines<br/><span className='bg-pblue px-2 mr-2 font-extrabold shadow-lg rounded-tl-2xl rounded-br-2xl mt-2'>Atouts</span>durant ma formation</h2>
            <p className='pt-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> A officia molestiae dolorum tempora ut accusamus cupiditate!<br/> Nesciunt tempora reiciendis libero voluptate!</p>
            <ul className=''>
                {Listatouts.map((List)=>(<li key={List.id} className='py-3 '>
                    
                    <h3 className='text-2xl font-extrabold uppercase pr-6'>
                     <span className='text-pblue text-3xl  '>0{List.id}.</span> {List.title}   
                    </h3>
                    <p className='pl-16'>
                        {List.Description}
                    </p>
                    
                    
                    </li>))}
            </ul>
        </div>

        
    </div>
  )
}
