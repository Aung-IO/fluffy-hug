// components/AnimatedHuman.tsx
import { motion, MotionValue } from "framer-motion";
import Image from "next/image";

type AnimatedHumanProps = {
  y: MotionValue<number>;
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  left: MotionValue<string>;
  translateX?: string;
  translateY?: string;
};

export default function AnimatedHuman({
  y,
  rotate,
  scale,
  left,
  translateX,
  translateY
}: AnimatedHumanProps) {
  return (
    <div className="sticky top-0 z-50">
      <motion.div
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: 1,
        }}
        initial={{
          rotate: -90,
          left: "50%",
        }}
        style={{
          y,
          rotate,
          scale,
          left,
          translateX,
          translateY,
        }}
        className="absolute md:w-[200px] w-[150px] h-[300px] md:h-[450px]"
      >
        <Image
          src="/assets/human.webp"
          fill
          alt="human"
          className="object-contain"
        />
      </motion.div>
    </div>
  );
}
