import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false
        })
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/CMS/Footer/RowLabel#RowLabel'
        }
      }
    }
  ],
  hooks: {
    afterChange: [revalidateFooter]
  }
}
