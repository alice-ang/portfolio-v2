"use client";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export const HorizontalScrollCarousel = () => {
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
            {cards.map((card, i) => (
              <div
                className="bg-red-100 aspect-video h-[20vh] md:h-[40vh] "
                style={{
                  backgroundImage: `url(${card.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                key={i}
              />
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

const cards: CardType[] = [
  {
    url: "https://www.arrowheadgamestudios.com/wp-content/uploads/2024/02/Testament_PS4_PDP_BG_3840x2160_NoLogo-1536x864.png",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://www.arrowheadgamestudios.com/wp-content/uploads/2024/02/Testament_PS4_PDP_BG_3840x2160_NoLogo-1536x864.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://www.arrowheadgamestudios.com/wp-content/uploads/2024/02/Testament_PS4_PDP_BG_3840x2160_NoLogo-1536x864.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://www.arrowheadgamestudios.com/wp-content/uploads/2024/02/Testament_PS4_PDP_BG_3840x2160_NoLogo-1536x864.png",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://www.arrowheadgamestudios.com/wp-content/uploads/2024/02/Testament_PS4_PDP_BG_3840x2160_NoLogo-1536x864.png",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://www.arrowheadgamestudios.com/wp-content/uploads/2024/02/Testament_PS4_PDP_BG_3840x2160_NoLogo-1536x864.png",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://www.arrowheadgamestudios.com/wp-content/uploads/2024/02/Testament_PS4_PDP_BG_3840x2160_NoLogo-1536x864.png",
    title: "Title 7",
    id: 7,
  },
];
