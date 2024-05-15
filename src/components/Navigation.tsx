"use client";
import React from "react";
import { Hamburger } from "./Hamburger";
import { Constraints } from "./Constraints";

export const Navigation = () => {
  return (
    <Constraints>
      <nav className="flex flex-row justify-between">
        <h2>Alice.</h2>
        <Hamburger onClick={() => console.log("gej")} />
      </nav>
    </Constraints>
  );
};
