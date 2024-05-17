import React from "react";
import Link from "next/link";
import { Constraints } from "./Constraints";
import { socials } from "@/lib/mock";

export const Footer = () => {
  return (
    <footer>
      <Constraints>
        <div className="grid grid-cols-2 gap-4">
          <div className=" col-span-2 md:col-span-1 space-x-4 flex justify-center md:justify-start items-end ">
            {socials.map((link) => (
              <Link
                href={"/"}
                passHref
                target="_blank"
                key={link}
                className="external-link"
              >
                {link}
              </Link>
            ))}
          </div>
          <div className="col-span-2 md:col-span-1 ">
            <h4 className="text-center md:text-end">© Alice Anglesjö 2024</h4>
          </div>
        </div>
      </Constraints>
    </footer>
  );
};
