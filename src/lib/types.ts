export type WeatherObject = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
  minutely: Minutely[];
  hourly: Hourly[];
  weather: Weather[];
};

interface Current {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather[];
  daily: Daily[];
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Minutely {
  dt: number;
  precipitation: number;
}

interface Hourly {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather[];
  pop: number;
}

interface Daily {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  summary: string;
  temp: Temp;
  feels_like: Feelslike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather[];
  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
}

interface Feelslike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export type AboutExperience = {
  company: string;
  role: string;
  year: string;
};

export type AboutImage = {
  image: { id: string; url: string; alt: string };
  link?: string;
};

export type AboutData = {
  heading: string;
  bio: Record<string, unknown> | null;
  images: AboutImage[];
  experience: AboutExperience[];
};

export type Stack = {
  id?: string;
  name: string;
  tech: string[];
};

export const TECH_LABELS: Record<string, string> = {
  EXPO: 'Expo',
  FRAMER: 'Framer',
  REACT: 'React',
  NEXTJS: 'Next.js',
  TAILWIND: 'Tailwind CSS',
  FIREBASE: 'Firebase',
  SUPABASE: 'Supabase',
  TANSTACK_QUERY: 'TanStack Query',
  REACT_NATIVE: 'React Native',
  PRISMIC: 'Prismic',
  TYPESCRIPT: 'TypeScript',
  FLUTTER: 'Flutter',
  SANITY: 'Sanity',
  STRAPI: 'Strapi',
  FIGMA: 'Figma',
  GRAPHQL: 'GraphQL',
  PAYLOAD: 'Payload',
  HYGRAPH: 'Hygraph',
  CLERK: 'Clerk',
  SHADCN: 'shadcn/ui',
  STORYBLOK: 'Storyblok',
  SQLITE: 'SQLite',
  DRIZZLE: 'Drizzle',
  NEON: 'Neon DB',
};

export type Image = {
  id: string;
  url: string;
};

export type ProjectLink = {
  externalLink: "DEMO" | "GITHUB" | "FIGMA";
  url: string;
};

export type ProjectStatus = "WIP" | "COMPLETED" | "UNFINISHED" | "ABANDONED";
export type Project = {
  id: string;
  title: string;
  images: Image[];
  description: Record<string, unknown> | null;
  projectStatus: ProjectStatus;
  dateOfCreation: string;
  projectLinks: ProjectLink[];
  stacks: Stack[];
};

export type PreviewProject = Pick<
  Project,
  "id" | "title" | "images" | "projectStatus"
> & {
  stacks?: { id?: string; name: string }[];
};
