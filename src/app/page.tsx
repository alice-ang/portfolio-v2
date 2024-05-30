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
          <div className="grid grid-cols-12 gap-8 lg:gap-[130px]  ">
            <div className="col-span-12 md:col-span-6 xl:col-span-8 space-y-2">
              <h2 className="text-palette-yellow">Who the f*** is Alice?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                eleifend porta sem, sit amet ultricies nunc vehicula at.
                Vestibulum urna arcu, suscipit semper nisl ut, imperdiet
                imperdiet purus. Maecenas accumsan ullamcorper arcu ac finibus.
                Aenean porttitor, libero quis tempus venenatis, nibh urna
                tincidunt felis, non condimentum augue lacus vel ligula. Morbi
                id orci tristique.
                <br />
                <br />
                Etiam vulputate enim nunc, et aliquet mi ultrices sed. Nunc sit
                amet urna rutrum, imperdiet tortor lobortis, vestibulum augue.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
                interdum purus, sed posuere felis.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-4 relative aspect-square">
              <Image
                src={
                  " https://alice-ang.vercel.app/_next/image?url=%2Fvan.png&w=3840&q=75"
                }
                alt="Profile picture "
                fill
                className="object-cover bg-center "
              />
            </div>
          </div>
        </Constraints>
      </section>
      <Constraints>
        <h3 className="pb-4">Experience</h3>
        <Table items={jobs} />
      </Constraints>
      {projects && (
        <section>
          <HorizontalScrollCarousel projects={projects} />
        </section>
      )}
    </main>
  );
}
