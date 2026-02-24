import type { ServerFunctionClient } from 'payload'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import config from '@payload-config'
import { importMap } from './admin/importMap'
import '@payloadcms/next/css'
import React from 'react'

type Args = {
  children: React.ReactNode
}

export default async function PayloadLayout({ children }: Args) {
  const serverFunction: ServerFunctionClient = async function (args) {
    'use server'
    return handleServerFunctions({
      ...args,
      config,
      importMap,
    })
  }

  return (
    <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  )
}
