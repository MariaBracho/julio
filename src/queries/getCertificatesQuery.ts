import type { TypedSupabaseClient } from '@/types/TypedSupabaseClient'

export function getCertificatesQuery(client: TypedSupabaseClient) {
  return client
    .from('certificate')
    .select(
      `
      id,
      img
    `
    )

}