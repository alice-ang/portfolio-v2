"use client";
import { Constraints, Tooltip } from "@/components";
import { fetchProjects, fetchStack } from "@/lib/api";
import { PreviewProject, ProjectStatus, Stack } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function About() {
  const { data: projects } = useQuery<PreviewProject[]>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const { data: stacks } = useQuery<Stack[]>({
    queryKey: ["stacks"],
    queryFn: fetchStack,
  });

  const [activeStatus, setActiveStatus] = useState<ProjectStatus | "ALL">(
    "ALL"
  );

  const [activeTags, setActiveTags] = useState<Stack[]>([]);

  const filteredProjects = useMemo(() => {
    if (!projects) return [];
    const statusFiltered =
      activeStatus === "ALL"
        ? projects
        : projects.filter((p) => p.projectStatus === activeStatus);

    if (activeTags.length === 0) return statusFiltered;

    const activeTagNames = new Set(activeTags.map((t) => t.name));
    return statusFiltered.filter((p) =>
      (p.stacks ?? []).some((s) => activeTagNames.has(s.name))
    );
  }, [projects, activeStatus, activeTags]);

  function StatusButton({
    status,
    onClick,
  }: {
    status: ProjectStatus;
    onClick: () => void;
  }) {
    const bgClassByStatus: Record<ProjectStatus, string> = {
      WIP: "bg-palette-yellow",
      COMPLETED: "bg-palette-green",
      ABANDONED: "bg-palette-red",
    };
    const ringClassByStatus: Record<ProjectStatus, string> = {
      WIP: "ring-2 ring-palette-yellow",
      COMPLETED: "ring-2 ring-palette-green",
      ABANDONED: "ring-2 ring-palette-red",
    };
    return (
      <button
        aria-label={`Show ${status} projects`}
        onClick={onClick}
        className={`h-4 w-4 rounded-full border border-transparent cursor-pointer ${
          bgClassByStatus[status]
        } ${status === activeStatus ? ringClassByStatus[status] : ""}`}
      />
    );
  }
  return (
    <main className="min-h-screen">
      <section className="">
        <Constraints>
          <div className="space-y-16">
            <div className="space-y-4">
              <div className="flex flex-row items-end justify-between">
                <div className="space-y-2 ">
                  <h2 className="text-palette-yellow">Projects</h2>
                  <p className="text-palette-lightGrey text-sm">
                    A selection of side projects. <br />
                    When I get the itch to start a new project I also like to to
                    dabble in Figma instead of starting a new coding project.
                    Check out my{" "}
                    <Link
                      href="https://www.behance.net/aliceanglesj1"
                      className="underline"
                    >
                      behance
                    </Link>{" "}
                    for some of my Figma adventures.
                  </p>
                </div>
                <div className="flex items-end space-x-2 md:space-x-4">

                  <Tooltip label="Work in progress">
                    <StatusButton
                      status="WIP"
                      onClick={() =>
                        setActiveStatus(activeStatus === "WIP" ? "ALL" : "WIP")
                      }
                    />
                  </Tooltip>
                  <Tooltip label="Completed">
                    <StatusButton
                      status="COMPLETED"
                      onClick={() =>
                        setActiveStatus(
                          activeStatus === "COMPLETED" ? "ALL" : "COMPLETED"
                        )
                      }
                    />
                  </Tooltip>
                  <Tooltip label="Abandoned">
                    <StatusButton
                      status="ABANDONED"
                      onClick={() =>
                        setActiveStatus(
                          activeStatus === "ABANDONED" ? "ALL" : "ABANDONED"
                        )
                      }
                    />
                  </Tooltip>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {stacks?.map((stack, i) => (
                  <button
                    key={i}
                    className={cn(
                      "px-4 py-1 rounded-full w-fit border border-palette-yellow animation-transition hover:bg-palette-yellow hover:text-palette-background",
                      activeTags.includes(stack)
                        ? "bg-palette-yellow text-palette-background"
                        : "bg-transparent text-palette-white"
                    )}
                    onClick={() =>
                      setActiveTags(
                        activeTags.includes(stack)
                          ? activeTags.filter((t) => t !== stack)
                          : [...activeTags, stack]
                      )
                    }
                  >
                    {stack.name}
                  </button>
                ))}
              </div>
            </div>
            {filteredProjects && (
              <div className="grid grid-cols-12 gap-2 md:gap-4">
                {filteredProjects.map((project, i) => (
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
