import { numOfCols } from "@/lib/utils";
import React, { FC } from "react";

export const LineGrid: FC = () => {
  return (
    <div className="fixed w-screen h-screen flex top-0 left-0 pointer-events-none z-4">
      {[...Array(numOfCols)].map((_, i) => (
        <div className="relative h-full w-full border-x-[0.2px] border-[#D9D9D9] opacity-10" />
      ))}
    </div>
  );
};
