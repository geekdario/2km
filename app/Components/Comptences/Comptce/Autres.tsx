
import React from 'react'

export const Autres = () => {
  return (
    <div className='flex items-center justify-center '>
      <div className='pr-1 text-xl'>
      En cours
      </div >
        <div className="flex gap-1">
        <div className="w-2 h-2 rounded-full bg-pblue animate-bounce"></div>
        <div className="w-2 h-2 rounded-full  bg-pblue animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-2 h-2 rounded-full  bg-pblue animate-bounce [animation-delay:-.5s]"></div>
        </div>
    </div>
  )
}
