"use client";
import { motion } from "framer-motion";
import React from "react";

export const TextTyping = ({
  text,
  duration = 0.25,
}: {
  text: string;
  duration?: number;
}) => {
  return (
    <>
      {text.split("").map((letter, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: duration,
            delay: i / 16,
          }}
          key={i}
        >
          {letter}
        </motion.span>
      ))}
    </>
  );
};
