"use client";
import Link from "next/link";

import { FC } from "react";
import { useExperience } from "@/lib/api";
import { Table } from "./Table";
import { Constraints } from "./Constraints";

export const JobsTable: FC = () => {
  const { data, isLoading } = useExperience();

  if(isLoading) {
    return (
      <div className="grid gap-4 p-4">
        <div className="flex justify-between items-center h-8">
        <div className="h-8 w-64 animate-pulse bg-palette-lightGrey rounded"/>
        <div className="h-8 w-16 animate-pulse bg-palette-lightGrey rounded"/>

        </div>
        <div className="gap-4 grid grid-cols-1">
        {Array.from({length: 4}).map(() => (
          <div className="grid grid-cols-3 gap-4 col-span-1">
          {Array.from({length:3}).map(() => (
            <div className="h-8 animate-pulse bg-palette-lightGrey rounded"/>
          ))}
      </div>
        ))}
        </div>
      </div>
    )
  }

  return (
    <section >
      <Constraints>
        <div className="flex justify-between items-center">
          <h3 className="pb-4">Experience</h3>
          <Link href="/CV.pdf" target="_blank" rel="noopener noreferrer">
            Download cv
          </Link>
        </div>
          <Table items={data ?? []} />
      </Constraints>
    </section>
  );
}
