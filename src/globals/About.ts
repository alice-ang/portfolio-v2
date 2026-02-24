import type { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Who the f*** is Alice?',
    },
    {
      name: 'bio',
      type: 'richText',
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
        {
          name: 'link',
          type: 'text',
        },
      ],
    },
    {
      name: 'experience',
      type: 'array',
      fields: [
        {
          name: 'company',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          required: true,
        },
        {
          name: 'year',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
