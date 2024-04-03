import type { TypedSupabaseClient } from '@/types/TypedSupabaseClient'

export function getCategoriesQuery(client: TypedSupabaseClient) {
  const CATEGORIES_COLUMNS = 'id,name,icon' as const

  return client
    .from('categories')
    .select(CATEGORIES_COLUMNS)

}