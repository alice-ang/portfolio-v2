"use client";
import {
  Constraints,
  HorizontalScrollCarousel,
  ScrollingText,
  Table,
} from "@/components";
import { fetchProjects, fetchStack } from "@/lib/api";
import { jobs } from "@/lib/mock";
import { PreviewProject, Stack } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { data: stack } = useQuery<Stack[]>({
    queryKey: ["stacks"],
    queryFn: fetchStack,
  });

  const { data: projects } = useQuery<PreviewProject[]>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  return (
    <main className="flex flex-col justify-between items-stretch min-h-screen">
      <section className="pt-16">
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
                    className="aspect-[9/16] absolute bottom-0 scale-110 origin-bottom hover:grayscale-0 grayscale animation-transition "
                  />
                </div>
              </div>
            </div>
          </Constraints>

          {stack && (
            <div className="space-y-4">
              <ScrollingText
                repeat={4}
                highlightedText={["Next.js", "Tailwind"]}
                text={stack.map((stack) => stack.name)}
              />
              <ScrollingText
                repeat={4}
                invert
                highlightedText={["Next.js", "Tailwind"]}
                text={stack.map((stack) => stack.name).reverse()}
              />
            </div>
          )}

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

      <section className="">
        <Constraints>
          <div className="grid grid-cols-12 gap-8 2xl:gap-[130px]  ">
            <div className="col-span-12 md:col-span-8 space-y-2">
              <h2 className="text-palette-yellow">Who the f*** is Alice?</h2>
              <p>
                I am a life-long nerd with a passion for pretty visuals. ✨
                Thanks to an early interest in gaming I have always had an a
                thing for tech, but it was not something I thought to pursue as
                a career until it was time to apply to uni. Before that I
                studied film & visual design and had dreams of going into the
                special effects industry. But when I found out I could combine
                my creative side with tech in the role as frontend developer, I
                applied to study web development at uni and haven't looked back
                since!
                <br />
                <br />
                I'm looking for roles where I can utilize my skills in areas
                that are relevant to my interests, passions or values and allow
                me to make a difference. I love to learn new things and try out
                new technologies, although React, Next.js and Tailwind will
                always be my favorite children.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 relative aspect-square bg-red-100 ">
              <Image src={"/mini-me.png"} alt={"young alice"} fill />
            </div>
          </div>
        </Constraints>
      </section>
      <Constraints>
        <div className="flex justify-between items-center">
          <h3 className="pb-4">Experience</h3>
          <Link
            href="/CV.pdf"
            locale={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download cv
          </Link>
        </div>
        <Table items={jobs} />
      </Constraints>
      {projects && (
        <section>
          <HorizontalScrollCarousel projects={projects} />
        </section>
      )}
      <section>
        <h2 className="text-palette-yellow text-center hover:underline ">
          <a
            className="font-feta "
            target="_blank"
            href="https://www.linkedin.com/in/alice-anglesj%C3%B6-9503121a7/"
          >
            Lets connect! 👋
          </a>
        </h2>
      </section>
    </main>
  );
}
