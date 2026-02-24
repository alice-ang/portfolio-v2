import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { Media } from './src/collections/Media'
import { Projects } from './src/collections/Projects'
import { Stacks } from './src/collections/Stacks'
import { Pages } from './src/collections/Pages'
import { Experience } from './src/collections/Experience'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET as string,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL as string,
    },
    push: true,
  }),
  editor: lexicalEditor({}),
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN as string,
    }),
  ],
  collections: [Media, Projects, Stacks, Pages, Experience],
  typescript: {
    outputFile: path.resolve(dirname, 'src/payload-types.ts'),
  },
  admin: {
    meta: {
      titleSuffix: '— Portfolio CMS',
    },
    livePreview: {
      url: 'http://localhost:3000',
      collections: ['pages'],

    },
  },
})
