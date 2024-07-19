import type { Metadata } from "next";
import "./globals.css";
import { feta, poppins } from "./fonts";
import { Footer, Header, LineGrid } from "@/components";
import { QueryProvider } from "@/lib/QueryProvider";

export const metadata: Metadata = {
  title: "Alice A.",
  description: "Frontend developer portfolio",

  openGraph: {
    title: "Alice A.",
    description: "Frontend developer portfolio",
    url: "https://alice-ang.vercel.app/",
    siteName: "Alice A.",
    locale: "en_US",
    type: "website",
    images: {
      url: "https://alice-ang.vercel.app/og-large.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <html lang="en">
        <body
          className={`${poppins.variable} ${feta.className}
           pb-12 `}
        >
          <Header />
          <LineGrid />
          {children}
          <Footer />
        </body>
      </html>
    </QueryProvider>
  );
}
