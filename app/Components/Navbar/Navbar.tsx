"use client"
import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'


export const Navbar = () => {

       const [isopen,SetIsopen]=useState<boolean>(false)
    

       const handleClick=()=>{
        SetIsopen(!isopen)
  
       }

  return (
    <nav className='w-full text-l flex justify-between md:justify-around items-center p-3'>
      <div className='text-4xl font-bold border-2 rounded w-20 h-auto border-pblue text-center'>
        2K<span className='text-pblue'>M</span>
      </div>
      <div className={` md:flex justify-center items-center ${isopen ? "block absolute z-10 bg-fpblue w-42 right-2 top-16 rounded-lg shadow shadow-black text-center text-xl p-5" :"hidden"}`}>
        <div className=" absolute md:hidden border-l-[10px] border-l-transparent  border-b-[12px] border-b-fpblue border-r-[10px] border-r-transparent -top-3 right-4">
              </div>
      <ul className=' md:flex justify-center items-center'>
        <li className='mx-4 border-b-4 border-b-pblue transition-all rounded hover:border-b-4 '><a href="#">Competences</a></li>
        <li className='mx-4  hover:border-b-4 hover: border-b-pblue transition-all delay-150 hover:rounded '><a href="#">Services</a></li>
        <li className='mx-4  hover:border-b-4 hover: border-b-pblue transition-all delay-150 hover:rounded '><a href="#">Projets</a></li>
        <li className='mx-4 hover:border-b-4 hover: border-b-pblue transition-all delay-150 hover:rounded'><a href="#">Contact</a></li>
        
      </ul>
      <a href="assets/cvmedard.pdf" download className='hidden md:block -transition-all bg-pblue  ml-10 py-2 px-3 rounded-full hover:bg-white hover:text-pblue hover:scale-110'>Telecharger CV</a>
      </div>
      <div className='absolute right-4 md:hidden '>
        <button className='border-solid border-2 border-white rounded-md' onClick={()=>handleClick()} >

        { isopen ? (<XMarkIcon className="h-9 w-9 text-blue-500   " />):(<Bars3Icon className="h-9 w-9 text-blue-500" />)}
        </button>
       
              
      </div>
    </nav>
  )
}
