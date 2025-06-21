import React from "react";
import { Variant, Variants, motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
      delay: 1,
    },
  },
};

const wordVariants: Variants = {
  hidden: (i) => ({
    opacity: 0,
    y: -10,
  }),
  visible: (i) => ({
    opacity: 1,
    y: [0, 3, 0],
    transition: {
      delay: i * 0.2,
      type: "tween",
      y: { repeat: Infinity, duration: 1 },
    },
  }),
};

const WavyText = ({ text }: { text: string }) => {
  const textArr = text.split("");
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {textArr.map((txt, i) => (
        <motion.p
          className="inline-block text-lg md:text-xl paragraph text-blue-700"
          custom={i}
          key={uuidv4()}
          variants={wordVariants}
          data-text={txt}
        >
          {txt}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default WavyText;
