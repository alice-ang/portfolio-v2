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

enum Tech {
  EXPO,
  FRAMER,
  REACT,
  NEXTJS,
  HYGRAPH,
  TAILWIND,
  FIREBASE,
  SUPABASE,
  TANSTACK_QUERY,
  REACT_NATIVE,
  PRISMIC,
  TYPESCRIPT,
  FLUTTER,
  SANITY,
  STRAPI,
  FIGMA,
  GRAPHQL,
}

export type Stack = {
  name: string;
  tech: Tech;
};

export type Image = {
  id: string;
  url: string;
};

export type ProjectLink = {
  externalLink: "DEMO" | "GITHUB" | "FIGMA";
  url: string;
};

export type Project = {
  id: string;
  title: string;
  images: Image[];
  description: {
    markdown: any;
  };
  projectStatus: "WIP" | "COMPLETED" | "UNFINISHED" | "ABANDONED";
  dateOfCreation: string;
  projectLinks: ProjectLink[];
  stacks: Stack[];
};

export type PreviewProject = Pick<Project, "id" | "title" | "images">;
