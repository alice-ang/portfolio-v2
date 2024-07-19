import { Constraints } from "@/components";
import { Table } from "@/components/Table";
import { aboutImages, jobs } from "@/lib/mock";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main>
      <section className="">
        <Constraints>
          <div className="grid grid-cols-12 gap-8 2xl:gap-[130px]  ">
            <div className="col-span-12 md:col-span-8 space-y-2">
              <h2 className="text-palette-yellow">Who the f*** is Alice?</h2>
              <p>
                I am a life-long nerd with a passion for pretty visuals. ✨
                Thanks to an early interest in gaming I have always had an a
                thing for tech, but it was not something I thought to pursue as
                a career until it was time to apply to uni. Before that I
                studied film & visual design and had dreams of going into the
                special effects industry. But when I found out I could combine
                my creative side with tech in the role as frontend developer, I
                applied to study web development at uni and haven't looked back
                since!
                <br />
                <br />
                I'm looking for roles where I can utilize my skills in areas
                that are relevant to my interests, passions or values and allow
                me to make a difference. I love to learn new things and try out
                new technologies, although React, Next.js and Tailwind will
                always be my favorite children.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 relative aspect-square bg-red-100 ">
              <Image src={"/mini-me.png"} alt={"young alice"} fill />
            </div>
          </div>
        </Constraints>
      </section>
      <section className="">
        <Constraints>
          <div className="flex items-center space-x-3 lg:space-x-8 justify-center overflow-x-scroll">
            {aboutImages.map((img, i) => (
              <div
                className={cn(
                  i % 2 ? "-rotate-2" : "rotate-2",
                  "aspect-square h-full w-full min-h-[200px] hover:rotate-0 animation-transition relative"
                )}
              >
                {img.link ? (
                  <Link href={img.link} passHref target="_blank">
                    <Image src={img.url} alt={img.alt} fill />
                  </Link>
                ) : (
                  <Image src={img.url} alt={img.alt} fill />
                )}
              </div>
            ))}
          </div>
        </Constraints>
      </section>
      <section className="">
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
