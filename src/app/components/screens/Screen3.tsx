import React from 'react'
import { motion, MotionValue } from "framer-motion"
import WavyText from '../WavyText'
import Image from 'next/image'
import AnimatedHuman from '../AnimatedHuman'


export default function Screen3({ screen3Opacity }: { screen3Opacity: MotionValue<number> }) {
  const rotate = 0
  return (
    <motion.div
      style={{ opacity: screen3Opacity }}
      className="absolute top-0 left-0 h-screen w-full bg-blue-100 flex items-center justify-center text-4xl font-bold"
    >
      <div className="w-full h-[100vh] bg-blue-100 overflow-hidden relative">
        <motion.div

          className="absolute w-[150px] h-[50px] md:w-[350px] md:h-[100px] md:top-[45px] md:left-[45px] top-[20px] left-[20px] z-[1000]">
          <Image src="/assets/logo.webp" alt="" fill objectFit="contain" />
        </motion.div>




        {/* think smoke */}
        <div className='-mt-40'>

          <svg
            viewBox="0 0 1728 766"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-full h-full scale-[4] md:scale-[1]"
          >
            <path fill="white">
              <animate
                id="animation-to-check"
                repeatCount="indefinite"
                fill="freeze"
                attributeName="d"
                dur="3s"
                values="M1728 0.5H0.5C6.16667 8.5 19.4 26 27 32C36.5 39.5 106.5 66 114 100C121.5 134 167 177.5 214 192.5C261 207.5 329.5 268.5 343 302.5C356.5 336.5 420.5 389.5 458 402.5C495.5 415.5 567.5 489 588 518C608.5 547 682 633.5 728.5 643C775 652.5 798.5 701 834.5 741.5C870.5 782 883.5 763.5 895.5 741.5C907.5 719.5 948.5 662 1011 633.5C1073.5 605 1131.5 546.5 1145.5 518C1159.5 489.5 1259 378.5 1299.5 378.5C1340 378.5 1432 287 1456 246C1480 205 1550 121 1593.5 123C1628.3 124.6 1697.67 42 1728 0.5Z;

                M1728 0.5H0.5C6.16667 8.5 27 22.317 27 32C27 61.5 83.6105 83.008 114 100C160.5 126 188.074 150.525 214 192.5C245.5 243.5 308.5 291.5 343 302.5C377.853 313.613 442.568 365.933 458 402.5C481 457 560.36 495.7 588 518C632 553.5 710.947 598.905 728.5 643C749 694.5 798.5 701 834.5 741.5C870.5 782 883.5 763.5 895.5 741.5C907.5 719.5 980.5 694.5 1011 633.5C1041.72 572.061 1134 587.5 1145.5 518C1157 448.5 1261.5 449.5 1299.5 378.5C1317.48 344.901 1403.5 274.681 1456 246C1471 237.806 1566 199.5 1593.5 123C1605.28 90.2171 1697.67 42 1728 0.5Z;

                M1728 0.5H0.5C6.16667 8.5 19.4 26 27 32C36.5 39.5 106.5 66 114 100C121.5 134 167 177.5 214 192.5C261 207.5 329.5 268.5 343 302.5C356.5 336.5 420.5 389.5 458 402.5C495.5 415.5 567.5 489 588 518C608.5 547 682 633.5 728.5 643C775 652.5 798.5 701 834.5 741.5C870.5 782 883.5 763.5 895.5 741.5C907.5 719.5 948.5 662 1011 633.5C1073.5 605 1131.5 546.5 1145.5 518C1159.5 489.5 1259 378.5 1299.5 378.5C1340 378.5 1432 287 1456 246C1480 205 1550 121 1593.5 123C1628.3 124.6 1697.67 42 1728 0.5Z"
              />
            </path>
          </svg>
        </div>

        {/* Half-body Human */}
        <div >
          <Image
            src="/assets/human-top.webp"
            alt="human top"
            fill
            className="object-contain object-center"
           
          />
        </div>



        <motion.div className="absolute z-[99999] w-full md:w-3/12 h-[200px] left-[30px] top-[80%] md:-translate-y-1/2">
          <WavyText text="lorem-ipsum dollar sit amat" />
          <div className="mt-5"></div>
          <WavyText text="lorem ipsum dollar sit amat" />
          <div className="mt-5"></div>
          <WavyText text="Lorem ipsum, dolor sitsss ?" />
        </motion.div>
      </div>
    </motion.div>
  )
}
