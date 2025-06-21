import React from 'react'
import { motion, MotionValue } from "framer-motion"


export default function Screen3({ screen3Opacity }: { screen3Opacity: MotionValue<number> }) {
  return (
     <motion.div
          style={{ opacity: screen3Opacity }}
          className="absolute top-0 left-0 h-screen w-full bg-blue-100 flex items-center justify-center text-4xl font-bold"
        >
          Screen 3
        </motion.div>
  )
}
