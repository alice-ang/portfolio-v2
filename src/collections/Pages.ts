import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: { read: () => true },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { description: 'Unique identifier for this page (e.g. "about")' },
    },
    { name: 'heading', type: 'text', defaultValue: 'Who the f*** is Alice?' },
    { name: 'bio', type: 'richText', editor: lexicalEditor({}) },
    {
      name: 'images',
      type: 'array',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'link', type: 'text' },
      ],
    },
    {
      name: 'experience',
      type: 'relationship',
      relationTo: 'experience',
      hasMany: true,
    },
  ],
}
