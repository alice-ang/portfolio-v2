import React, { ReactNode } from "react";
import Link from "next/link";

export const Logo = ({ children }: { children: ReactNode }) => {
  return (
    <Link href="/" passHref className="main-title">
      <h2>
        {children}
        <span className="text-palette-yellow">.</span>
      </h2>
    </Link>
  );
};
