"use client";
import Link from "next/link";

import { FC } from "react";
import { useExperience } from "@/lib/api";
import { Table } from "./Table";
import { Constraints } from "./Constraints";

export const JobsTable: FC = () => {
  const { data, isLoading } = useExperience();

  return (
    <section className="">
      <Constraints>
        <div className="flex justify-between items-center">
          <h3 className="pb-4">Experience</h3>
          <Link href="/CV.pdf" target="_blank" rel="noopener noreferrer">
            Download cv
          </Link>
        </div>
        {isLoading ? (
          <table className="table-auto w-full">
            <tbody>
              {Array.from({ length: 4 }).map((_, i) => (
                <tr key={i}>
                  {Array.from({ length: 3 }).map((_, j) => (
                    <td key={j} className="py-1 pr-4">
                      <div className="h-4 rounded bg-muted animate-pulse" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <Table items={data ?? []} />
        )}
      </Constraints>
    </section>
  );
}
