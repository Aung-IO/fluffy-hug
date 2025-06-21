import React, { useRef } from 'react'
import { motion, MotionValue, useScroll, useTransform } from "framer-motion"
import Image from 'next/image'
import AnimatedHuman from '../AnimatedHuman'

export default function Screen1({ screen1Opacity }: { screen1Opacity: MotionValue<number> }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, -45, -90]);

    const left = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        ["50%", "30%", "50%"]
    );
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [400, 350, 470]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.3, 1.5, 1.7]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity: screen1Opacity }}
            className="absolute top-0 left-0 h-screen w-full bg-red-100 flex items-center justify-center overflow-hidden"
        >
            {/* Animated Human */}
            <div className="sticky top-0 z-40 scale-[0.5] md:scale-[0.5] md:scale-100">
                <AnimatedHuman
                    y={y}
                    rotate={rotate}
                    scale={scale}
                    left={left}
                    translateX="-50%"
                    translateY="-120%"
                />
            </div>


            {/* logo */}
            <div className="absolute w-10/12 md:w-6/12 h-[120px] md:h-[200px] -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2">
                <Image src="/assets/logo.webp" alt="logo" fill className="object-contain" />
            </div>

            {/* View Collection Button */}
            <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 z-50">
                <button className="bg-blue-500 text-white text-xs md:text-sm lg:text-base px-4 md:px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transition">
                    View Collection
                </button>
            </div>
        </motion.div>
    );
}
