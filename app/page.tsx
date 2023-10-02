import Image from 'next/image'

import Background from '@/public/assets/Back2.jpg'
import Accueil from "./Pages/Accueil/Accueil";

export default function Home() {
  return (
    <div className="relative">
   <Image src={Background} alt="l'arriere plan de ma page " className='w-full h-full absolute -z-10 '/>
   <Accueil/>
    </div>
  )
}
