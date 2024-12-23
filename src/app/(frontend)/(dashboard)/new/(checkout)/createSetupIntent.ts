import { getClientSideURL } from '@utils/getURL'

import type { Team } from '@dashboard/types'

export interface PayloadStripeSetupIntent {
  setup_intent: string
  client_secret?: string

  error?: string
}

export const createSetupIntent = async (args: {
  team?: Team
}): Promise<PayloadStripeSetupIntent> => {
  const { team } = args

  try {
    const req = await fetch(`${getClientSideURL()}/api/create-setup-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        team: team?.id
      })
    })

    const res: PayloadStripeSetupIntent = await req.json()

    if (!req.ok) {
      throw new Error(res.error)
    }
    return res
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    throw new Error(`Could not create setup intent: ${message}`)
  }
}
