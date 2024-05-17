"use client";
import { projectLinks, socials } from "@/lib/mock";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const scaleSpring = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
  });

  const y = useTransform(scaleSpring, [0, 1], ["200%", "-300%"]);
  const showBackButton = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  return (
    <div
      ref={targetRef}
      className="relative h-[400vh]  mx-auto max-w-screen-2xl py-24"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden flex-col justify-center space-y-4 md:space-y-8 p-4">
        <div>
          <h6 className="text-center">
            react, next.js, graphql, styled-components, typescript
          </h6>
          <h1 className="text-8xl md:text-9xl xl:text-[240px] text-center">
            Arrowhead
          </h1>
        </div>

        <p className="font-light text-center  w-full lg:w-1/2">
          This project is designed by Merijn Laan, my role was to develop the
          website and create and implement a cohesive motion strategy.
          Rembrandts Amsterdam is a spectacular video art experience. In around
          25 minutes you will be transported with music, video projections and
          special effects to Amsterdam of the 17th century: Rembrandt’s
          Amsterdam.
        </p>
        <div className="space-x-4 flex justify-center md:justify-start items-end ">
          {projectLinks.map((link) => (
            <Link
              href={"/"}
              passHref
              target="_blank"
              key={link}
              className="external-link"
            >
              {link}
            </Link>
          ))}
        </div>
        <motion.h2
          className="text-palette-yellow hover:underline animation-transition md:animate-bounce"
          onClick={() => router.back()}
          style={{ opacity: showBackButton }}
        >
          Go back
        </motion.h2>
        <motion.div style={{ y }} className=" w-full absolute aspect-video">
          <iframe
            src="https://www.youtube.com/embed/oD3pxbG9YYI?si=F8xI4etqxs2EG9hY&amp;controls=0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="aspect-video h-full w-full"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}
