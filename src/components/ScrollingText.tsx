"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const ScrollingText = ({
  invert = false,
  text,
  highlightedText,
  repeat = 1,
}: {
  invert?: boolean;
  text: string[];
  highlightedText?: string[];
  repeat?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scaleSpring = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
  });

  const x = useTransform(
    scaleSpring,
    [0, 1],
    [invert ? "-10%" : "1%", invert ? "1%" : "-10%"]
  );

  return (
    <div
      ref={ref}
      className="flex flex-row justify-center overflow-hidden h-full"
    >
      <motion.div style={{ x }} className="flex flex-row space-x-8">
        {Array.from({ length: repeat }).map(() => (
          <>
            {text.map((item, index) => (
              <h6
                className={cn(
                  highlightedText && highlightedText.includes(item)
                    ? "text-palette-yellow"
                    : "",
                  "font-poppins underline uppercase whitespace-nowrap	text-3xl md:text-5xl"
                )}
                key={index}
              >
                {item}
              </h6>
            ))}
          </>
        ))}
      </motion.div>
    </div>
  );
};
