"use client";
import { PreviewProject } from "@/lib/types";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

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

  const x = useTransform(scrollSpring, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="space-y-8">
          <h2 className="text-palette-yellow underline pl-8">Projects</h2>
          <motion.div style={{ x }} className="flex gap-16">
            {projects.map((project) => (
              <Link
                href={`/projects/${project.id}`}
                passHref
                className="aspect-video min-h-[20vh] md:h-[40vh] flex justify-center items-center relative group "
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
                <div className="absolute inset-0 w-full h-full bg-black bg-opacity-80 group-hover:bg-opacity-20 animation-transition "></div>

                <h3 className="font-feta absolute group-hover:opacity-0 animation-transition ">
                  {project.title}
                </h3>
              </Link>
              // <div
              //   className="aspect-video min-h-[20vh] md:h-[40vh] flex justify-center items-center relative group "
              //   style={{
              //     backgroundImage: `url(${project.images[0].url})`,
              //     backgroundSize: "cover",
              //     backgroundPosition: "center",
              //   }}
              //   key={project.id}
              // >
              //   <div className="absolute inset-0 w-full h-full bg-black bg-opacity-80 group-hover:bg-opacity-20 animation-transition "></div>

              //   <h3 className="absolute group-hover:opacity-0 animation-transition ">
              //     {project.title}
              //   </h3>
              // </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

type CardType = {
  url: string;
  title: string;
  id: number;
};
