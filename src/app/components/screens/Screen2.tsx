import React from 'react'
import { motion, MotionValue } from "framer-motion"

export default function Screen2({ screen2Opacity }: { screen2Opacity: MotionValue<number> }) {
    return (
        <motion.div
            style={{ opacity: screen2Opacity }}
            className="absolute top-0 left-0 h-screen w-full bg-green-100 flex items-center justify-center text-4xl font-bold"
        >
            Screen 2
        </motion.div>
    )
}
