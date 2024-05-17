import { Constraints } from "@/components";
import Link from "next/link";
export default function About() {
  return (
    <main className="min-h-screen">
      <section className="py-24">
        <Constraints>
          <div className="space-y-16">
            <div className="space-y-4">
              <div className="flex flex-row items-end justify-between">
                <h2 className="text-palette-yellow">Projects</h2>
                <div className="flex items-end space-x-6">
                  <div className="h-4 w-4 bg-palette-lightGrey rounded-full" />
                  <div className="h-4 w-4 bg-palette-yellow rounded-full" />
                  <div className="h-4 w-4 bg-palette-green rounded-full" />
                </div>
              </div>
              <div className="flex items-center flex-wrap gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <button
                    key={i}
                    className="py-1 px-6 border border-palette-lightGrey rounded-full text-base font-poppins"
                  >
                    Next.js
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <Link
                  href={"/projects/1"}
                  passHref
                  className="bg-red-100 aspect-video h-full w-full col-span-6 md:col-span-4 "
                  key={i}
                ></Link>
              ))}
            </div>
          </div>
        </Constraints>
      </section>
    </main>
  );
}
