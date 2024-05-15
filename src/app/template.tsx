"use client";
import React from "react";
import { motion } from "framer-motion";

const expand = {
  initial: {
    top: 0,
  },
  enter: (i: number) => ({
    top: "100vh",
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
    transitionEnd: { height: "0", top: "0" },
  }),
  exit: (i: number) => ({
    height: "100vh",
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

const opacity = {
  initial: {
    opacity: 0.5,
  },
  enter: {
    opacity: 0,
  },
  exit: {
    opacity: 0.5,
  },
};
export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nbOfColumns = 5;

  return (
    <motion.div>
      <div className="fixed w-screen h-screen flex top-0 left-0 pointer-events-none	z-10">
        <motion.div
          className="fixed w-full h-full bg-black z-4 top-0 left-0 pointer-events-none"
          variants={opacity}
          animate="enter"
          exit="exit"
          initial="initial"
        />
        {[...Array(nbOfColumns)].map((_, i) => {
          return (
            <motion.div
              key={i}
              custom={i}
              variants={expand}
              animate="enter"
              exit="exit"
              initial="initial"
              className="relative h-full w-full bg-black"
            />
          );
        })}
      </div>
      {children}
    </motion.div>
  );
}

// .stairs{
//     .transition-container{
//         position: fixed;
//         width: 100vw;
//         height: 100vh;
//         display: flex;
//         left: 0;
//         top: 0;
//         pointer-events: none;
//         z-index: 2;
//         div{
//             position: relative;
//             height: 100%;
//             width: 100%;
//             background-color: black;
//         }
//     }
//     .transition-background{
//         position: fixed;
//         width: 100%;
//         height: 100vh;
//         background-color: black;
//         z-index: 1;
//         pointer-events: none;
//         top: 0;
//         left: 0;
//     }
// }
