import { Constraints } from "@/components";
import { Table } from "@/components/Table";
import { jobs } from "@/lib/mock";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function About() {
  return (
    <main>
      <section className="py-24">
        <Constraints>
          <div className="grid grid-cols-12 gap-8 2xl:gap-[130px]  ">
            <div className="col-span-12 md:col-span-8 space-y-2">
              <h2 className="text-palette-yellow">Who the f*** is Alice?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                eleifend porta sem, sit amet ultricies nunc vehicula at.
                Vestibulum urna arcu, suscipit semper nisl ut, imperdiet
                imperdiet purus. Maecenas accumsan ullamcorper arcu ac finibus.
                Aenean porttitor, libero quis tempus venenatis, nibh urna
                tincidunt felis, non condimentum augue lacus vel ligula. Morbi
                id orci tristique.
                <br />
                <br />
                Etiam vulputate enim nunc, et aliquet mi ultrices sed. Nunc sit
                amet urna rutrum, imperdiet tortor lobortis, vestibulum augue.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
                interdum purus, sed posuere felis.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 relative aspect-square bg-red-100 "></div>
          </div>
        </Constraints>
      </section>
      <section className="">
        <Constraints>
          <div className="flex items-center space-x-3 lg:space-x-8 justify-center">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                className={cn(
                  i % 2 ? "-rotate-2" : "rotate-2",
                  "bg-red-100 aspect-square h-full w-full hover:rotate-0 animation-transition"
                )}
              />
            ))}
          </div>
        </Constraints>
      </section>
      <section className="py-24">
        <Constraints>
          <div className="flex justify-between items-center">
            <h3 className="pb-4">Experience</h3>
            <Link
              href="/CV.pdf"
              locale={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download cv
            </Link>
          </div>
          <Table items={jobs} />
        </Constraints>
      </section>
    </main>
  );
}
