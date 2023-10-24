"use client"
import React, {useState,useEffect } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { DocumentArrowDownIcon} from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
// import { motion } from "framer-motion"
import {Link}  from "react-scroll"


export const Navbar = () => {
  
  const router = useRouter()

       const [isopen,SetIsopen]=useState<boolean>(false)
       const [posfixe,SetPosfixe]=useState<boolean>(false)
    

       const handleClick=()=>{
        SetIsopen(!isopen)
  
       }

           useEffect(()=>{
            
            const HandleScroll=()=>{

              if(window.scrollY>100){
              
               SetPosfixe(true) 
               SetIsopen(false)
               
              }
              else{
               SetPosfixe(false)
             
              }
               
          }
     
          window.addEventListener('scroll',HandleScroll)

           },[])
             


  return (
    <nav className={`w-full md:text-l flex  justify-between md:justify-around items-center p-3 transition-all delay-0 ${ posfixe ?"md:fixed md:bg-pblue md:top-0 md:z-50 md:transition-all md:delay-75 md:shadow-xl md:brightness-95":" "}`}>
      <div  onClick={() => router.push('/')} className={`text-4xl font-bold border-2 rounded w-20 h-auto border-pblue text-center cursor-pointer ${posfixe ? " border-white":""} `}>
        2K<span className={`text-pblue ${posfixe? "md:text-bg-col md:font-extrabold":""}`}>M</span>
      </div>
      <div className={` md:flex justify-center items-center  ${isopen ? "block absolute z-30 bg-fpblue w-42 right-0 top-0 bottom-0  shadow shadow-black text-center md:text-xl py-16 p-10" :"hidden"}`}>
        
      <ul className=' md:flex justify-center items-center font-extrabold uppercase md:lowercase'>
        <li className='mx-4 md:py-1 md:px-2   md:border-b-4 md: border-b-pblue transition-all rounded md:hover:border-b-4 hover:text-fpblue hover:brightness-150'>
          <Link spy={true} smooth={true} offset={50} duration={500}  to="Competences">Competences</Link></li>
        <li className='mx-4 md:py-1 px-2  md:hover:border-b-4 hover: border-b-pblue transition-all delay-150 hover:rounded hover:text-fpblue hover:brightness-150'><Link spy={true} smooth={true} offset={50} duration={500} to="services">Services</Link></li>
        <li className='mx-4 md:py-2 md:px-2 md:hover:border-b-4 md:hover: border-b-pblue transition-all delay-150 hover:rounded hover:text-fpblue hover:brightness-150'><a onClick={() => router.push('/projet')}>Projets</a></li>
        <li className='mx-4 md:py-2 md:px-2  md:hover:border-b-4 md:hover: border-b-pblue transition-all delay-150 hover:rounded hover:text-fpblue hover:brightness-150'><Link spy={true} smooth={true} offset={50} duration={500} to="atouts">atouts</Link></li>
        
      </ul>
      <a href="assets/cvmedard.pdf" download className={`hidden md:flex md:justify-between transition-all delay-150 bg-pblue  ml-10 py-2 px-3 rounded-full ${posfixe ? "md:bg-bg-col":""} hover:bg-white hover:text-pblue hover:scale-110 `}><DocumentArrowDownIcon className="h-5  text-blue-500 " /><span className='px-2'>CV</span></a>
      </div>
      <div className='absolute right-4 z-50 md:hidden '>
        <button className='border-solid border-2 border-white rounded-md' onClick={()=>handleClick()} >

        { isopen ? (<XMarkIcon className="h-9 w-9 text-blue-500   " />):(<Bars3Icon className="h-9 w-9 text-blue-500" />)}
        </button>
       
              
      </div>
    </nav>
  )
}
