import React from 'react'
import {motion, MotionValue} from "framer-motion"
import Image from 'next/image'
import SocialIcons from '../SocialIcons'

export default function Screen1({screen1Opacity} : {screen1Opacity : MotionValue<number>}) {
  return (
   <motion.div
          style={{ opacity: screen1Opacity }}
          className="absolute top-0 left-0 h-screen w-full bg-red-100 flex items-center justify-center text-4xl font-bold"
        >
           {/* logo */}
                <div className="absolute w-10/12 md:w-6/12 h-[120px] md:h-[200px] -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2">
                    <Image src="/assets/logo.webp" alt="logo" fill className="object-contain" />
                </div>
              
        </motion.div>
  )
}
