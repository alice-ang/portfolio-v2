import { Constraints } from "@/components";
import { Table } from "@/components/Table";
import { jobs } from "@/lib/mock";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <main>
      <section className="py-24">
        <Constraints>
          <div className="grid grid-cols-12 gap-4 ">
            <div className="col-span-12 md:col-span-6 xl:col-span-7 space-y-2">
              <h2 className="text-palette-yellow">Who the f*** is Alice?</h2>
              <p>
                I’m a freelance creative developer from Amsterdam, the
                Netherlands. In 2018 I graduated from the University of Applied
                Sciences in Amsterdam and got my BaSc in Communication and
                Multimedia Design. I’ve been freelancing since July 2020, and
                since 2021 I’ve been a judge at Awwwards.
                <br />
                <br />
                Since 2022 I’ve been teaching parttime at the Associate
                Degree Frontend Design and Development at the Amsterdam
                University of Applied Sciences.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-5 bg-red-100"></div>
          </div>
        </Constraints>
      </section>
      <section className="">
        <Constraints>
          <div className="flex items-center space-x-8 justify-center">
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
          <h3 className="pb-4">Experience</h3>
          <Table items={jobs} />
        </Constraints>
      </section>
    </main>
  );
}
