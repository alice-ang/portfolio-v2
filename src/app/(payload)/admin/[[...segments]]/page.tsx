import type { Metadata } from 'next'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import config from '@payload-config'

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  generatePageMetadata({ config: config as any, params, searchParams })

export default function Page({ params, searchParams }: Args) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return RootPage({ config: config as any, importMap, params, searchParams })
}
