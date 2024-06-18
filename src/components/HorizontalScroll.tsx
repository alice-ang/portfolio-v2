"use client";
import { PreviewProject } from "@/lib/types";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaArrowDown } from "react-icons/fa";

export const HorizontalScrollCarousel = ({
  projects,
}: {
  projects: PreviewProject[];
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const scrollSpring = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
  });

  const opacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0]);

  const x = useTransform(scrollSpring, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden ">
        <div className="space-y-8">
          <h2 className="text-palette-yellow underline pl-8">Projects</h2>
          <motion.div style={{ x }} className="flex gap-6 md:gap-16">
            {projects.map((project) => (
              <Link
                href={`/projects/${project.id}`}
                passHref
                className="aspect-video min-h-[30vh] md:h-[40vh] flex justify-center items-center relative group font-feta "
                key={project.id}
              >
                <Image
                  src={project.images[0].url}
                  alt={project.title}
                  fill
                  className="aspect-video"
                  placeholder="blur"
                  blurDataURL={project.images[0].url}
                />
                <div className="absolute inset-0 w-full h-full bg-black bg-opacity-60 group-hover:bg-opacity-20 animation-transition "></div>

                <h3 className="font-feta absolute group-hover:opacity-0 animation-transition text-2xl md:text-4xl text-center">
                  {project.title}
                </h3>
              </Link>
            ))}
          </motion.div>
          <motion.h4
            style={{
              opacity,
            }}
            className="pl-8 animate-bounce flex gap-4"
          >
            Keep going <FaArrowDown />
          </motion.h4>
        </div>
      </div>
    </section>
  );
};
