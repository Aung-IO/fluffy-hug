"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
        <motion.div
          style={{ opacity: screen1Opacity }}
          className="absolute top-0 left-0 h-screen w-full bg-red-100 flex items-center justify-center text-4xl font-bold"
        >
          Screen 1
        </motion.div>

        {/* Screen 2 */}
        <motion.div
          style={{ opacity: screen2Opacity }}
          className="absolute top-0 left-0 h-screen w-full bg-green-100 flex items-center justify-center text-4xl font-bold"
        >
          Screen 2
        </motion.div>

        {/* Screen 3 */}
        <motion.div
          style={{ opacity: screen3Opacity }}
          className="absolute top-0 left-0 h-screen w-full bg-blue-100 flex items-center justify-center text-4xl font-bold"
        >
          Screen 3
        </motion.div>
      </div>
    </div>
  );
}
