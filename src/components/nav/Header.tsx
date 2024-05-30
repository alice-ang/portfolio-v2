"use client";
import React, { useEffect, useState } from "react";
import { Hamburger } from "../Hamburger";
import { Constraints } from "../Constraints";
import { AnimatePresence, motion } from "framer-motion";
import { Nav } from "./Nav";
import { usePathname } from "next/navigation";
import { background } from "./animate";
import Link from "next/link";
import { WeatherObject } from "@/lib/types";
import Image from "next/image";
import { Logo } from "../Logo";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const [localWeather, setLocalWeather] = useState<Partial<WeatherObject>>({});

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await fetch("/api/weather", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data: Partial<WeatherObject> = await response.json();
        setLocalWeather(data);
      } catch (error) {
        console.error(error);
      }
    };
    if (process.env.NEXT_PUBLIC_ENV === "prod") {
      getWeather();
    }
  }, []);
  // Round a number to the nearest integer with one decimal place (16.57 => 17)

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="bg-palette-darkBackground fixed w-full box-border	z-10 ">
      <Constraints>
        <nav className="flex flex-row justify-between">
          <Logo>A</Logo>
          <div className="flex space-x-16">
            <div className=" flex flex-row items-center">
              {localWeather.current && (
                <div className="flex space-x-2 items-center">
                  <p className="text-palette-lightGrey text-xs">
                    {Math.round(localWeather.current?.temp * 10) / 10}°C{" "}
                    <span className="font-bold text-palette-white">Skövde</span>
                    , Sweden
                  </p>
                  <Image
                    src={`https://openweathermap.org/img/wn/${localWeather.current.weather[0].icon}@2x.png`}
                    alt={localWeather.current.weather[0].description}
                    width={30}
                    height={30}
                  />
                </div>
              )}
            </div>

            <button onClick={() => setOpen(!isOpen)}>
              <Hamburger isClicked={isOpen} />
            </button>
          </div>
        </nav>
      </Constraints>
      <motion.div
        variants={background}
        initial="initial"
        animate={isOpen ? "open" : "closed"}
        className="bg-palette-yellow w-full h-full absolute left-0 top-[100%] overflow-hidden"
      />

      <AnimatePresence mode="wait">{isOpen && <Nav />}</AnimatePresence>
    </div>
  );
};
