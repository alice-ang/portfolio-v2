import { REST_DELETE, REST_GET, REST_OPTIONS, REST_PATCH, REST_POST, REST_PUT } from '@payloadcms/next/routes'
import config from '@payload-config'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const c = config as any

export const GET = REST_GET(c)
export const POST = REST_POST(c)
export const DELETE = REST_DELETE(c)
export const PATCH = REST_PATCH(c)
export const PUT = REST_PUT(c)
export const OPTIONS = REST_OPTIONS(c)
