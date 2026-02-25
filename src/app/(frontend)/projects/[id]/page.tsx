"use client";
import { useProjectById } from "@/lib/api";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import { RichText } from "@payloadcms/richtext-lexical/react";

export default function Project() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const { data } = useProjectById(id);
  const scaleSpring = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
  });

  const y = useTransform(scaleSpring, [0, 1], ["160%", "-300%"]);
  const showBackButton = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const showScrollIndication = useTransform(
    scrollYProgress,
    [0.6, 0.8],
    [1, 0],
  );
  const backdropOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.55, 0.72],
    [0, 1, 1, 0],
  );

  if (!data) {
    return;
  }

  console.log(data.stacks);

  return (
    <div
      ref={targetRef}
      className="relative h-[400vh] mx-auto max-w-screen-2xl pt-16"
    >
      <div className="sticky top-0 flex h-screen items-center flex-col justify-center space-y-4 md:space-y-8 p-4">
        <div
          className={cn(
            data.projectStatus === "WIP"
              ? "bg-palette-yellow"
              : "bg-palette-green",
            "px-8 py-2",
          )}
        >
          <p className="text-palette-darkBackground">{data.projectStatus}</p>
        </div>
        <div className="">
          <div className="flex gap-2 justify-center flex-wrap">
            {data.stacks.map((stack) => (
              <>
                {stack.tech.map((t) => (
                  <h6 className="text-center uppercase text-palette-lightGrey">
                    {t}
                  </h6>
                ))}
              </>
            ))}
          </div>

          <h1 className="text-8xl md:text-9xl xl:text-[240px] text-center">
            {data.title}
          </h1>
        </div>

        <div className="font-light text-center w-full lg:w-4/5">
          {data.description && <RichText data={data.description as any} />}
        </div>
        {data.projectLinks && (
          <div className="space-x-4 flex justify-center md:justify-start items-end ">
            {data.projectLinks.map((link) => (
              <Link
                href={link.url}
                passHref
                target="_blank"
                key={link.url}
                className="external-link"
              >
                <p>{link.externalLink}</p>
              </Link>
            ))}
          </div>
        )}

        <motion.h4
          style={{
            opacity: showScrollIndication,
          }}
          className="pl-8 animate-bounce flex gap-4"
        >
          Keep going <FaArrowDown />
        </motion.h4>

        <motion.h2
          className="text-palette-yellow hover:underline animation-transition md:animate-bounce"
          onClick={() => router.back()}
          style={{ opacity: showBackButton }}
        >
          Go back
        </motion.h2>

        <motion.div
          style={{ opacity: backdropOpacity }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10 pointer-events-none"
        />

        {data.images && (
          <motion.div
            style={{
              y,
            }}
            className=" w-full absolute aspect-video space-y-8 md:space-y-12 z-20"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            {data.images.map((image) => (
              <div
                className="aspect-video min-h-[20vh] md:h-[40vh] flex justify-center items-center relative group mx-auto"
                style={{
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                key={image.id}
              ></div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
