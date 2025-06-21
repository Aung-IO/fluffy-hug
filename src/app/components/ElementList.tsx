"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";

export default function ElementList() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Fade logic for 3 screens (overlapping in one sticky container)
    const screen1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.35], [1, 1, 0]);
    const screen2Opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.65], [0, 1, 0]);
    const screen3Opacity = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 1]);

    return (
        <div ref={containerRef} className="h-[300vh] relative">
            <div className="sticky top-0 h-screen w-full">
                {/* Screen 1 */}
                <Screen1 screen1Opacity={screen1Opacity} />

                {/* Screen 2 */}
                <Screen2 screen2Opacity={screen2Opacity} />

                {/* Screen 3 */}
                <Screen3 screen3Opacity={screen3Opacity} />
            </div>
        </div>
    );
}
