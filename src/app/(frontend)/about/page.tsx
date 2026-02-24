import { AboutSection, Constraints } from "@/components";
import { Table } from "@/components/Table";
import { fetchAbout } from "@/lib/api";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default async function About() {
  const about = await fetchAbout();

  return (
    <main>
      <AboutSection />
      {about.images.length > 0 && (
        <section className="">
          <Constraints>
            <div className="flex items-center space-x-3 lg:space-x-8 justify-center overflow-x-scroll">
              {about.images.map((item, i) => (
                <div
                  key={item.image.id || i}
                  className={cn(
                    i % 2 ? "-rotate-2" : "rotate-2",
                    "aspect-square h-full w-full min-h-[200px] hover:rotate-0 animation-transition relative"
                  )}
                >
                  {item.link ? (
                    <Link href={item.link} passHref target="_blank">
                      <Image src={item.image.url} alt={item.image.alt} fill />
                    </Link>
                  ) : (
                    <Image src={item.image.url} alt={item.image.alt} fill />
                  )}
                </div>
              ))}
            </div>
          </Constraints>
        </section>
      )}
      <section className="">
        <Constraints>
          <div className="flex justify-between items-center">
            <h3 className="pb-4">Experience</h3>
            <Link
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download cv
            </Link>
          </div>
          <Table items={about.experience} />
        </Constraints>
      </section>
    </main>
  );
}
