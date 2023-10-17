import Image from 'next/image'
import pgmservices from "@/public/assets/Handcoding-bro.svg"
import {BriefcaseIcon} from "@heroicons/react/24/solid"
import {ClockIcon} from "@heroicons/react/24/solid"
import {MapPinIcon} from "@heroicons/react/24/solid"
import {ComputerDesktopIcon} from "@heroicons/react/24/solid"



export const Hireme = () => {
  return (
    <div className='flex-wrap md:flex justify-center items-center w-full py-14'>
        
    
    <div className='md:flex flex-col '>
        <h2 className='text-2xl md:text-4xl md:leading-normal  font-semibold'>Aviez-vous besoin<br/>de mes <span className='bg-pblue px-2 mr-2 font-extrabold shadow-lg rounded-tl-2xl rounded-br-2xl mt-2'>Services</span>?</h2>
        <p className='pt-11 font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> A officia molestiae dolorum tempora ut accusamus cupiditate!<br/> Nesciunt tempora reiciendis libero voluptate!</p>
        
            <div className='pt-5 grid grid-cols-2 gap-3 '>
                <div className='flex '>

                   <BriefcaseIcon className="h-14 w-14 cursor-pointer text-pblue bg-pblue bg-opacity-10 p-2 rounded-lg hover:bg-fpblue hover:text-white transition-all hover:transition-all hover:delay-150 hover:-translate-y-1" />
                <div className='pl-4'>
                    <h3 className='font-semibold text-2xl'>Hire me</h3>
                    <p className='font-sans'>Lorem ipsum dolor sit <br/> amet consectetur adipisicing <br/> amet consectetur adipisicing</p>
                </div>
                </div>


                <div className='flex'>

                    <ClockIcon className="h-14 w-14 cursor-pointer text-pblue bg-pblue bg-opacity-10 p-2 rounded-lg hover:bg-fpblue hover:text-white transition-all hover:transition-all hover:delay-150 hover:-translate-y-1" />
                    <div className='pl-4'>
                    <h3 className='font-semibold text-2xl'>Disponibilité</h3>
                    <p className='font-sans'>Lorem ipsum dolor sit <br/> amet consectetur adipisicing <br/> amet consectetur adipisicing</p>
                </div>
                </div>


                <div className='flex'>

                        <MapPinIcon className="h-14 w-14 cursor-pointer text-pblue bg-pblue bg-opacity-10 p-2 rounded-lg hover:bg-fpblue hover:text-white transition-all hover:transition-all hover:delay-150 hover:-translate-y-1" />
                        <div className='pl-4'>
                    <h3 className='font-semibold text-2xl'>Localisation</h3>
                    <p className='font-sans'>Lorem ipsum dolor sit <br/> amet consectetur adipisicing <br/> amet consectetur adipisicing</p>
                </div>
                </div>  


                  <div className='flex'>

                        <ComputerDesktopIcon className="h-14 w-14  cursor-pointer text-pblue bg-pblue bg-opacity-10 p-2 rounded-lg hover:bg-fpblue hover:text-white transition-all hover:transition-all hover:delay-150 hover:-translate-y-1" />
                        <div className='pl-4'>
                    <h3 className='font-semibold text-2xl'>Free-lance</h3>
                    <p className='font-sans'>Lorem ipsum dolor sit <br/> amet consectetur adipisicing <br/> amet consectetur adipisicing</p>
                </div>
                </div>         
                
            </div>
       
        
    </div>

    <div className='' >
        <Image src={pgmservices} alt='le programmeur' className=' h-72 md:h-96  transition-all hover:opacity-70 hover:transition-all hover:delay-150 '/>
    </div>

    
    
</div>
  )
}
