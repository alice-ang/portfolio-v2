"use client";
import React from "react";
import { motion } from "framer-motion";
import { opacity, expand, numOfCols } from "@/lib/utils";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        {[...Array(numOfCols)].map((_, i) => {
          return (
            <motion.div
              key={i}
              custom={i}
              variants={expand}
              animate="enter"
              exit="exit"
              initial="initial"
              className="relative h-full w-full bg-palette-yellow"
            />
          );
        })}
      </div>
      {children}
    </motion.div>
  );
}
