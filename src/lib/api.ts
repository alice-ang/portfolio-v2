import { AboutData, PreviewProject, Project, Stack } from "./types";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = process.env.NEXT_PUBLIC_PAYLOAD_API_URL ?? "http://localhost:3000";

export const fetchAbout = async (): Promise<AboutData> => {
  const res = await fetch(
    `${BASE_URL}/api/pages?where[slug][equals]=about&depth=1&limit=1`
  );
  const data = await res.json();
  const doc = data.docs?.[0];

  if (!doc) {
    return { heading: '', bio: null, images: [], experience: [] };
  }

  return {
    heading: doc.heading ?? '',
    bio: doc.bio ?? null,
    images: (doc.images ?? []).map((item: any) => ({
      image: {
        id: String(item.image?.id ?? ''),
        url: item.image?.url ?? '',
        alt: item.image?.alt ?? '',
      },
      link: item.link || undefined,
    })),
    experience: (doc.experience ?? []).map((e: any) => ({
      company: e.company ?? '',
      role: e.role ?? '',
      year: e.year ?? '',
    })),
  };
};

export const fetchStack = async (): Promise<Stack[]> => {
  const res = await fetch(`${BASE_URL}/api/stacks?limit=100`);
  const data = await res.json();
  return data.docs as Stack[];
};

export const fetchProjects = async (): Promise<PreviewProject[]> => {
  const res = await fetch(`${BASE_URL}/api/projects?limit=100&depth=1`);
  const data = await res.json();

  return data.docs.map((doc: any) => ({
    id: String(doc.id),
    title: doc.title,
    projectStatus: doc.projectStatus,
    stacks: (doc.stacks ?? []).map((s: any) => ({
      id: String(s.id),
      name: s.name,
    })),
    images: (doc.images ?? []).map((item: any) => ({
      id: String(item.image?.id ?? ""),
      url: item.image?.url ?? "",
    })),
  })) as PreviewProject[];
};

export const useProjectById = (id: string) => {
  return useQuery({
    queryKey: ["projectById", id],
    queryFn: async (): Promise<Project> => {
      const res = await fetch(`${BASE_URL}/api/projects/${id}?depth=1`);
      const doc = await res.json();

      return {
        id: String(doc.id),
        title: doc.title,
        description: doc.description ?? null,
        projectStatus: doc.projectStatus,
        dateOfCreation: doc.dateOfCreation,
        projectLinks: doc.projectLinks ?? [],
        stacks: (doc.stacks ?? []).map((s: any) => ({
          id: String(s.id),
          name: s.name,
          tech: s.tech,
        })),
        images: (doc.images ?? []).map((item: any) => ({
          id: String(item.image?.id ?? ""),
          url: item.image?.url ?? "",
        })),
      };
    },
  });
};
