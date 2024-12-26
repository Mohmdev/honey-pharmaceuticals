'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { EdgeScroll } from '@components/EdgeScroll'
import { Gutter } from '@components/Gutter'
import { usePathnameSegments } from '@dashboard/utils/use-pathname-segments'

import classes from './layout.module.scss'

import { DASHBOARD_SLUG } from '@constants'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [, settingsTab] = usePathnameSegments()
  const pathname = usePathname()

  const sidebarNavRoutes = [
    {
      label: 'Account',
      url: `/${DASHBOARD_SLUG}/${settingsTab}`
    },
    {
      label: 'Logout',
      url: `/logout`
    }
  ]

  return (
    <Gutter className="grid">
      <div className="cols-4 cols-m-8">
        <div className={classes.sidebarNav}>
          <EdgeScroll mobileOnly>
            {sidebarNavRoutes.map((route, index) => {
              const isActive = pathname === route.url

              return (
                <p
                  key={route.label}
                  className={[
                    classes.sidebarNavItem,
                    isActive && classes.active,
                    index === sidebarNavRoutes.length - 1 && classes.lastItem
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <Link href={route.url}>{route.label}</Link>
                </p>
              )
            })}
          </EdgeScroll>
        </div>
      </div>
      <div className="cols-12">{children}</div>
    </Gutter>
  )
}
