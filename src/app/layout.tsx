import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { feta, poppins } from "./fonts";
import { Navigation } from "@/components";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${feta.className}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
