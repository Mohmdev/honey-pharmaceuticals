import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor
} from '@payloadcms/richtext-lexical'

import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'

import type { CollectionConfig } from 'payload'

import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Media: CollectionConfig<'media'> = {
  slug: 'media',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated
  },
  fields: [
    {
      name: 'alt',
      type: 'text'
      //required: true,
    },
    {
      name: 'caption',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            FixedToolbarFeature(),
            InlineToolbarFeature()
          ]
        }
      })
    }
  ],
  upload: {
    crop: true,
    displayPreview: true,
    focalPoint: true,
    disableLocalStorage: true,
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*', 'video/*'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300
      },
      {
        name: 'square',
        width: 500,
        height: 500
      },
      {
        name: 'small',
        width: 600
      },
      {
        name: 'medium',
        width: 900
      },
      {
        name: 'large',
        width: 1400
      },
      {
        name: 'xlarge',
        width: 1920
      },
      {
        name: 'og',
        width: 1200,
        height: 630,
        crop: 'center'
      }
    ],
    staticDir: path.resolve(dirname, '../../public/media')
  }
}