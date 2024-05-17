"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { blur, height, translate } from "./animate";
import { Constraints } from "../Constraints";
import { socials } from "@/lib/mock";

const links = [
  {
    title: "Home",

    href: "/",

    src: "home.png",
  },

  {
    title: "About",

    href: "/about",

    src: "shop.png",
  },
  {
    title: "Projects",

    href: "/projects",

    src: "shop.png",
  },
];

export const Nav = () => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  const getChars = (word: string) => {
    let chars: any = [];

    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });

    return chars;
  };

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="overflow-hidden flex flex-col bg-palette-darkBackground "
    >
      <motion.div className="flex flex-col justify-center items-center text-left flex-1">
        {links.map((link, index) => (
          <Link href={link.href} passHref className="main-title ">
            <motion.p
              className="flex main-title text-palette-white overflow-hidden "
              key={link.title}
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index });
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index });
              }}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index != index
                  ? "open"
                  : "closed"
              }
            >
              {getChars(link.title)}
            </motion.p>
          </Link>
        ))}
      </motion.div>
      <div className="w-full">
        <Constraints>
          <ul className="flex flex-row justify-between items-end 0">
            {socials.map((link, index) => (
              <li className="external-link" key={index * 0.1}>
                <Link href={"/"} passHref target="_blank">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </Constraints>
      </div>
    </motion.div>
  );
};
