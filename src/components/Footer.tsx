import React from "react";
import Link from "next/link";
import { Constraints } from "./Constraints";
import { socials } from "@/lib/mock";

export const Footer = () => {
  return (
    <footer>
      <Constraints>
        <div className="grid grid-cols-3 gap-4 pt-24 pb-4 items-center">
          <div className=" col-span-3 md:col-span-1 space-x-4 flex justify-center md:justify-start items-end ">
            {socials.map((link) => (
              <div key={link.type}>
                {link.type === "email" ? (
                  <a href={link.link} className="external-link" >
                    {link.type}
                  </a>
                ) : (
                  <Link
                    href={link.link}
                    passHref
                    target="_blank"
      
                    className="external-link"
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="col-span-3 md:col-span-1 ">
            <p className="text-center text-sm text-palette-lightGrey">Developed with ♥️ and ☕️ </p>
          </div>
          <div className="col-span-3 md:col-span-1 ">
            <h4 className="text-center md:text-end">© Alice Anglesjö 2024</h4>
          </div>
        </div>
      </Constraints>
    </footer>
  );
};
