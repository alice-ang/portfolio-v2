import { Constraints, ScrollingText, Table } from "@/components";
import { jobs } from "@/lib/mock";
import Image from "next/image";

export default function Home() {
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
                    className="aspect-[9/16] absolute bottom-0 scale-110 origin-bottom hover:grayscale-0 grayscale animation-transition "
                  />
                </div>
              </div>
            </div>
          </Constraints>
          <div className="space-y-4">
            <ScrollingText
              repeat={4}
              text={[
                "React native",
                "GraphQL",
                "Figma",
                "NextJs",
                "Expo",
                "Hygraph",
                "React",
                "Supabase",
              ]}
            />
            <ScrollingText
              repeat={4}
              invert
              text={[
                "Tailwind",
                "Tanstack query",
                "Framer-motion",
                "Prismic",
                "Firebase",
                "Hygraph",
                "Typescript",
                "Flutter",
              ]}
            />
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
      <section className="py-24">
        <Constraints>
          <div className="grid grid-cols-12 gap-4 ">
            <div className="col-span-12 md:col-span-6 xl:col-span-7 space-y-2">
              <h2 className="text-palette-yellow">Who the f*** is Alice?</h2>
              <p>
                I’m a freelance creative developer from Amsterdam, the
                Netherlands. In 2018 I graduated from the University of Applied
                Sciences in Amsterdam and got my BaSc in Communication and
                Multimedia Design. I’ve been freelancing since July 2020, and
                since 2021 I’ve been a judge at Awwwards.
                <br />
                <br />
                Since 2022 I’ve been teaching parttime at the Associate
                Degree Frontend Design and Development at the Amsterdam
                University of Applied Sciences.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-5 bg-red-100 aspect-square"></div>
          </div>
        </Constraints>
      </section>
      <section className="py-24">
        <Constraints>
          <h3 className="pb-4">Experience</h3>
          <Table items={jobs} />
        </Constraints>
      </section>
    </main>
  );
}
