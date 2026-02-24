import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'dateOfCreation',
      type: 'date',
    },
    {
      name: 'projectStatus',
      type: 'select',
      options: [
        { label: 'Work in Progress', value: 'WIP' },
        { label: 'Completed', value: 'COMPLETED' },
        { label: 'Unfinished', value: 'UNFINISHED' },
        { label: 'Abandoned', value: 'ABANDONED' },
      ],
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'projectLinks',
      type: 'array',
      fields: [
        {
          name: 'externalLink',
          type: 'select',
          options: [
            { label: 'Demo', value: 'DEMO' },
            { label: 'GitHub', value: 'GITHUB' },
            { label: 'Figma', value: 'FIGMA' },
          ],
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'stacks',
      type: 'relationship',
      relationTo: 'stacks',
      hasMany: true,
    },
  ],
}
