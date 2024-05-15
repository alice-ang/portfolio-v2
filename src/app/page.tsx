"use client";

import { Constraints } from "@/components";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const scaleSpring = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
  });

  const x = useTransform(scaleSpring, [0, 1], [0, -100]);
  const invert = useTransform(scaleSpring, [0, 1], [-100, 10]);

  return (
    <main className="flex flex-col justify-between items-stretch min-h-screen">
      <section className="py-24">
        <div className="flex flex-col justify-between items-stretch space-y-16">
          <Constraints>
            <div className="grid grid-cols-2 gap-16 w-full">
              <div className="col-span-2 md:col-span-1">
                <h1 className="text-palette-lightGrey main-title">
                  Frontend <br />
                  developer
                </h1>
              </div>
              <div className="col-span-2 md:col-span-1 justify-self-end">
                <div className="h-[380px] w-[280px] border-4 border-white aspect-[9/16] relative">
                  <Image
                    src={"/alice.png"}
                    alt="Profile picture "
                    fill
                    className="aspect-[9/16] absolute bottom-0 scale-110 hover:scale-125 origin-bottom hover:grayscale-0 grayscale transition duration-300 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </Constraints>
          <div className="space-y-4">
            <motion.div style={{ x }} className="flex flex-row space-x-8">
              {Array.from({ length: 6 }).map(() => (
                <h6 className="font-poppins underline uppercase whitespace-nowrap	text-5xl">
                  React Native
                </h6>
              ))}
            </motion.div>
            <motion.div
              style={{ x: invert }}
              className="flex flex-row space-x-8"
            >
              {Array.from({ length: 6 }).map(() => (
                <h6 className="font-poppins underline uppercase whitespace-nowrap	text-5xl">
                  React Native
                </h6>
              ))}
            </motion.div>
          </div>
          <Constraints>
            <div className="flex flex-row justify-end">
              <h1 className="text-palette-lightGrey text-right main-title main-title">
                Alice <br />
                Anglesjö
              </h1>
            </div>
          </Constraints>
        </div>
      </section>
      <section className="py-24  min-h-screen">
        <Constraints>
          <div className="space-y-2">
            <h2 className="text-palette-yellow underline">
              Lorem ipsum dolor sit amet
            </h2>
            <p>
              I’m a frontend developer with a weak spot for making things fun
              and looking pretty ✨
            </p>
          </div>
        </Constraints>
      </section>
    </main>
  );
}
