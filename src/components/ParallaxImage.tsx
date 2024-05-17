"use client";
import { useAnimation, motion } from "framer-motion";
import React from "react";

export const ParallaxImage = () => {
  const imgAnimation = useAnimation();

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const offsetFactor = 15;

    imgAnimation.start({
      x: moveX / offsetFactor,
      y: moveY / offsetFactor,
    });
  };

  return (
    <motion.img
      src="https://images.pexels.com/photos/4226939/pexels-photo-4226939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      alt="alt"
      animate={imgAnimation}
      onMouseMove={(e: any) => handleMouseMove(e)}
    />
  );
};
