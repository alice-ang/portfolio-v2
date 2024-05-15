import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "400", "600"],
  variable: "--font-poppins",
});

export const feta = localFont({
  src: "../../public/fonts/FetaMorgana.ttf",
  variable: "--font-feta",
});
