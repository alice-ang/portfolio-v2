"use client";
import React, { useEffect, useState } from "react";
import { Hamburger } from "../Hamburger";
import { Constraints } from "../Constraints";
import { AnimatePresence, motion } from "framer-motion";
import { opacity, expand } from "@/lib/misc";
import { Nav } from "./Nav";
import { usePathname } from "next/navigation";
import { background } from "./animate";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <div className="bg-palette-darkBackground fixed w-full box-border	z-10 top-0">
      <Constraints>
        <nav className="flex flex-row justify-between">
          <h2>
            A<span className="text-palette-yellow">.</span>
          </h2>
          <button onClick={() => setOpen(!isOpen)}>
            <Hamburger isClicked={isOpen} />
          </button>
        </nav>
      </Constraints>
      <motion.div
        variants={background}
        initial="initial"
        animate={isOpen ? "open" : "closed"}
        className="bg-palette-yellow w-full h-full absolute left-0 top-[100%] overflow-hidden"
      />

      <AnimatePresence mode="wait">{isOpen && <Nav />}</AnimatePresence>
    </div>
  );
};
