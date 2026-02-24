"use client";
import {
  AboutSection,
  Constraints,
  HorizontalScrollCarousel,
  ScrollingText,
  Table,
} from "@/components";
import { fetchProjects } from "@/lib/api";
import { jobs } from "@/lib/mock";
import { PreviewProject, TECH_LABELS } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export default  function Home() {
  const techLabels = Object.values(TECH_LABELS);

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

          <div className="space-y-4">
              <ScrollingText
                repeat={4}
                highlightedText={["Next.js", "Tailwind CSS"]}
                text={techLabels.map((label) => label)}
              />
              <ScrollingText
                repeat={4}
                invert
                highlightedText={["Next.js", "Tailwind CSS"]}
                text={techLabels.map((label) => label).reverse()}
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

      <AboutSection />
      <Constraints>
        <div className="flex justify-between items-center">
          <h3 className="pb-4">Experience</h3>
          <Link
            href="/CV.pdf"
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
