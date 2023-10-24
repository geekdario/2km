"use client"
import React, { useEffect, useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { DocumentArrowDownIcon} from '@heroicons/react/24/solid'
// import { motion } from "framer-motion"
import {Link} from "react-scroll"


export const Navbar = () => {

       const [isopen,SetIsopen]=useState<boolean>(false)
       const [posfixe,SetPosfixe]=useState<boolean>(false)
    

       const handleClick=()=>{
        SetIsopen(!isopen)
  
       }

      
               const HandleScroll=()=>{

                   if(window.scrollY>100){
                   
                    SetPosfixe(true) 
                    
                   }
                   else{
                    SetPosfixe(false)
                  
                   }
                    
               }
          
               window.addEventListener('scroll',HandleScroll)

             



  return (
    <nav className={`w-full text-l flex  justify-between md:justify-around items-center p-3 ${ posfixe ?"md:fixed bg-fpblue z-50":" "}`}>
      <div className='text-4xl font-bold border-2 rounded w-20 h-auto border-pblue text-center cursor-pointer'>
        2K<span className='text-pblue'>M</span>
      </div>
      <div
                 className={` md:flex justify-center items-center ${isopen ? "block absolute z-10 bg-fpblue w-42 right-2 top-16 rounded-lg shadow shadow-black text-center text-xl p-5" :"hidden"}`}>
        <div className=" absolute md:hidden border-l-[10px] border-l-transparent  border-b-[12px] border-b-fpblue border-r-[10px] border-r-transparent -top-3 right-4">
              </div>
      <ul className=' md:flex justify-center items-center font-extrabold uppercase md:lowercase'>
        <li className='mx-4  md:border-b-4 md: border-b-pblue transition-all rounded md:hover:border-b-4 hover:text-fpblue hover:brightness-150'>
          <Link spy={true} smooth={true} offset={50} duration={500}  to="Competences">Competences</Link></li>
        <li className='mx-4  md:hover:border-b-4 hover: border-b-pblue transition-all delay-150 hover:rounded hover:text-fpblue hover:brightness-150'><Link spy={true} smooth={true} offset={50} duration={500} to="services">Services</Link></li>
        <li className='mx-4  md:hover:border-b-4 md:hover: border-b-pblue transition-all delay-150 hover:rounded hover:text-fpblue hover:brightness-150'><Link spy={true} smooth={true} offset={50} duration={500} to="projets">Projets</Link></li>
        <li className='mx-4 md:hover:border-b-4 md:hover: border-b-pblue transition-all delay-150 hover:rounded hover:text-fpblue hover:brightness-150'><Link spy={true} smooth={true} offset={50} duration={500} to="atouts">atouts</Link></li>
        
      </ul>
      <a href="assets/cvmedard.pdf" download className='hidden md:flex md:justify-between transition-all delay-150 bg-pblue  ml-10 py-2 px-3 rounded-full hover:bg-white hover:text-pblue hover:scale-110'><DocumentArrowDownIcon className="h-5  text-blue-500 " /><span className='px-2'>CV</span></a>
      </div>
      <div className='absolute right-4 md:hidden '>
        <button className='border-solid border-2 border-white rounded-md' onClick={()=>handleClick()} >

        { isopen ? (<XMarkIcon className="h-9 w-9 text-blue-500   " />):(<Bars3Icon className="h-9 w-9 text-blue-500" />)}
        </button>
       
              
      </div>
    </nav>
  )
}
