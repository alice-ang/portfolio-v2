import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export const expand = {
  initial: {
    top: 0,
  },
  enter: (i: number) => ({
    top: "100vh",
    transition: {
      duration: 0.6,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
    transitionEnd: { height: "0", top: "0" },
  }),

  exit: (i: number) => ({
    height: "100vh",
    transition: {
      duration: 0.6,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export const opacity = {
  initial: {
    opacity: 0.6,
  },
  enter: {
    opacity: 0,
  },
  exit: {
    opacity: 0.6,
  },
};

export const getLocalTime = (dateString: string): string => {
  // Parse the string into a Date object
  const date = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }

  // Format the Date object to get the local time
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Use 24-hour format
  };

  return date.toLocaleTimeString(undefined, options);
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const numOfCols = 8;
