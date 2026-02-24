import type { CollectionConfig } from 'payload'

export const Stacks: CollectionConfig = {
  slug: 'stacks',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'tech',
      type: 'select',
      hasMany: true,
      required: true,
      options: [
        { label: 'Expo', value: 'EXPO' },
        { label: 'Framer', value: 'FRAMER' },
        { label: 'React', value: 'REACT' },
        { label: 'Next.js', value: 'NEXTJS' },
        { label: 'Tailwind CSS', value: 'TAILWIND' },
        { label: 'Firebase', value: 'FIREBASE' },
        { label: 'Supabase', value: 'SUPABASE' },
        { label: 'TanStack Query', value: 'TANSTACK_QUERY' },
        { label: 'React Native', value: 'REACT_NATIVE' },
        { label: 'Prismic', value: 'PRISMIC' },
        { label: 'TypeScript', value: 'TYPESCRIPT' },
        { label: 'Flutter', value: 'FLUTTER' },
        { label: 'Sanity', value: 'SANITY' },
        { label: 'Strapi', value: 'STRAPI' },
        { label: 'Figma', value: 'FIGMA' },
        { label: 'GraphQL', value: 'GRAPHQL' },
        { label: 'Payload', value: 'PAYLOAD' },
        { label: 'Hygraph', value: 'HYGRAPH' },
        { label: 'Clerk', value: 'CLERK' },
        { label: 'shadcn/ui', value: 'SHADCN' },
        { label: 'Storyblok', value: 'STORYBLOK' },
        { label: 'SQLite', value: 'SQLITE' },
        { label: 'Drizzle', value: 'DRIZZLE' },
        { label: 'Neon DB', value: 'NEON' },
      ],
    },
  ],
}
