
import React from 'react'
import Image from 'next/image'
import imnode from "@/public/assets/Nodejs.png"
import impgssl from "@/public/assets/postgesql.png"
import immgdb from "@/public/assets/Mongodb.png"
import imexpjs from "@/public/assets/ExpressJs.png"
import imlaravel from "@/public/assets/laravel.png"
import immysql from "@/public/assets/mysql.png"


export const Backend = () => {
  return (
    <div className='grid grid-cols-2 mt-14 md:grid-cols-3 gap-4 md:mt-4'>
        {/* Node js */}
        <div className=' flex justify-center items-center border pr-5 py-1 rounded-xl bg-pblue bg-opacity-20 border-pblue border-opacity-75 hover:border-pblue cursor-pointer hover:animate-pulse'>
          <Image src={imnode} alt='Postgres' className='w-9 ' />
        <div className='ml-2'>
          <h3 className='text-l text-white'>Node js</h3>
          <ul className='text-xs pl-3 list-disc'><li>Bon niveau</li></ul>
        </div>
      </div>
             {/* Postgres  */}
      <div className=' flex justify-center items-center border pr-5 py-1 rounded-xl bg-pblue bg-opacity-20 border-pblue border-opacity-75 hover:border-pblue cursor-pointer hover:animate-pulse'>
          <Image src={impgssl} alt='Postgres' className='w-9 ' />
        <div className='ml-2'>
          <h3 className='text-l text-white'>Postgres</h3>
          <ul className='text-xs pl-3 list-disc'><li>Bon niveau</li></ul>
        </div>
      </div>
      
              {/* Mongo */}

      <div className=' flex justify-center items-center border pr-5 py-1 rounded-xl bg-pblue bg-opacity-20 border-pblue border-opacity-75 hover:border-pblue cursor-pointer hover:animate-pulse'>
          <Image src={immgdb} alt='Mongo' className='w-9 ' />
        <div className='ml-2'>
          <h3 className='text-l text-white'>Mongo db</h3>
          <ul className='text-xs pl-3 list-disc'><li>Bon niveau</li></ul>
        </div>
      </div>
                    {/* Tailwind css */}
      <div className=' flex justify-center items-center border pr-5 py-1 rounded-xl bg-pblue bg-opacity-20 border-pblue border-opacity-75 hover:border-pblue cursor-pointer hover:animate-pulse '>
          <Image src={imexpjs} alt='Express' className='w-9' />
        <div className='ml-2'>
          <h3 className='text-l text-white'>Express js</h3>
          <ul className='text-xs pl-3 list-disc'><li>Bon niveau</li></ul>
        </div>
      </div>
                             {/* Typescript */}
      <div className=' flex justify-center items-center border pr-5 py-1 rounded-xl bg-pblue bg-opacity-20 border-pblue border-opacity-75 hover:border-pblue  cursor-pointer hover:animate-pulse'>
          <Image src={imlaravel} alt='Laravel' className='w-9' />
        <div className='ml-2'>
          <h3 className='text-l text-white'>Laravel</h3>
          <ul className='text-xs pl-3 list-disc'><li>Bon niveau</li></ul>
        </div>
      </div>
                          {/* Framer */}
      <div className=' flex justify-center items-center border pr-5 py-1 rounded-xl bg-pblue bg-opacity-20 border-pblue border-opacity-75 hover:border-pblue  cursor-pointer hover:animate-pulse'>
          <Image src={immysql} alt='MySql' className='w-9' />
        <div className='ml-2'>
          <h3 className='text-l text-white'>MySql</h3>
          <ul className='text-xs pl-3 list-disc'><li>Bon niveau</li></ul>
        </div>
      </div>
    
    </div>
  )
}
