import React, { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import AnimatedHuman from "../AnimatedHuman";
import Image from "next/image";
import WavyText from "../WavyText";

export default function Screen2({
    screen2Opacity,
}: {
    screen2Opacity: MotionValue<number>;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref });

     const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-90, 0, 0]);
        const left = useTransform(scrollYProgress, [0, 0.5, 1], ["50%", "30%", "50%"]);
        const y = useTransform(scrollYProgress, [0, 0.5, 1], [400, 350, 470]);
        const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.3, 1.5, 1.7]);
    

 
    return (
        <div>
            <motion.div
                ref={ref}
                style={{ opacity: screen2Opacity }}
                className="absolute top-0 left-0 h-screen w-full bg-green-100 flex items-center justify-center overflow-hidden"
            >
                {/* AnimatedHuman continues from 90° */}
                <motion.div
                    className="absolute top-1/2 left-1/2 z-0"

                >
                    <AnimatedHuman
                        y={y}
                        rotate={rotate}
                        scale={scale}
                        left={left}
                        translateX="-50%"
                        translateY="-112%"
                    />
                </motion.div>

                {/* Screen 2 Content */}
                <div className="absolute left-12 top-6 ">
                    <Image
                        src="/assets/logo.webp"
                        alt="logo"
                        width={360}  // 60 * 4 (Tailwind w-60 = 15rem = 240px)
                        height={240}
                        className="object-contain mt-10"
                    />
                </div>

                <div>
                    <motion.div className="absolute z-[99999] w-full md:w-3/12 h-[200px] left-[30px] top-[80%] md:-translate-y-1/2">
                        <WavyText text="lorem-ipsum dollar sit amat" />
                        <div className="mt-5"></div>
                        <WavyText text="lorem ipsum dollar sit amat" />
                        <div className="mt-5"></div>
                        <WavyText text="Lorem ipsum, dolor sitsss ?" />
                    </motion.div>
                </div>


            </motion.div>


        </div>
    );
}
