"use client";
import { Constraints } from "@/components";
import { fetchProjects, fetchStack } from "@/lib/api";
import { PreviewProject, Stack } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const { data: stack } = useQuery<Stack[]>({
    queryKey: ["stacks"],
    queryFn: fetchStack,
  });

  const { data: projects } = useQuery<PreviewProject[]>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  return (
    <main className="min-h-screen">
      <section className="py-24">
        <Constraints>
          <div className="space-y-16">
            <div className="space-y-4">
              <div className="flex flex-row items-end justify-between">
                <h2 className="text-palette-yellow">Projects</h2>
                <div className="flex items-end space-x-2 md:space-x-6">
                  <div className="h-4 w-4 bg-palette-lightGrey rounded-full" />
                  <div className="h-4 w-4 bg-palette-yellow rounded-full" />
                  <div className="h-4 w-4 bg-palette-green rounded-full" />
                </div>
              </div>
              {/* {stack && (
                <div className="flex items-center flex-wrap gap-4">
                  {stack.map((item, i) => (
                    <button
                      key={i}
                      className="py-1 px-6 border border-palette-lightGrey rounded-full text-base font-poppins"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )} */}
            </div>
            {projects && (
              <div className="grid grid-cols-12 gap-2 md:gap-4">
                {projects.map((project, i) => (
                  <Link
                    href={`/projects/${project.id}`}
                    passHref
                    className=" aspect-video h-full w-full col-span-6 md:col-span-4 relative"
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
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Constraints>
      </section>
    </main>
  );
}
