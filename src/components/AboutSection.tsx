"use client";

import { Constraints } from "@/components";
import { fetchAbout } from "@/lib/api";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { useQuery } from "@tanstack/react-query";
import type { SerializedEditorState } from "lexical";
import Image from "next/image";

export function AboutSection() {
  const { data: about } = useQuery({
    queryKey: ["about"],
    queryFn: fetchAbout,
  });

  if (!about) return null;

  return (
    <section>
      <Constraints>
        <div className="grid grid-cols-12 gap-8 2xl:gap-[130px]">
          <div className="col-span-12 md:col-span-8 space-y-2">
            {about.heading && (
              <h2 className="text-palette-yellow">{about.heading}</h2>
            )}
            {about.bio && (
              <RichText
                data={about.bio as unknown as SerializedEditorState}
                disableContainer
              />
            )}
          </div>
          <div className="col-span-12 md:col-span-4 relative aspect-square bg-red-100">
            <Image src={"/mini-me.png"} alt={"young alice"} fill />
          </div>
        </div>
      </Constraints>
    </section>
  );
}
