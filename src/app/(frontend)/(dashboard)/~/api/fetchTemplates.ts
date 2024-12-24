import { getClientSideURL } from '@utils/getURL'

import type { Template } from '@dashboard/types'

import { payloadCloudToken } from './token'

import { TEMPLATES } from '@data/templates'

export const fetchTemplates = async (): Promise<Template[]> => {
  const { cookies } = await import('next/headers')
  const token = (await cookies()).get(payloadCloudToken)?.value ?? null

  const doc: Template[] = await fetch(`${getClientSideURL()}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `JWT ${token}` } : {})
    },
    next: { tags: ['templates'] },
    body: JSON.stringify({
      query: TEMPLATES
    })
  })
    ?.then((res) => res.json())
    ?.then((res) => {
      if (res.errors)
        throw new Error(res?.errors?.[0]?.message ?? 'Error fetching doc')
      return res?.data?.Templates?.docs
    })

  return doc
}