import type { TypedSupabaseClient } from '@/types/TypedSupabaseClient'

export function getProjectsQuery(client: TypedSupabaseClient) {
 const PROJECT_COLUMNS =
  "id,img,logo,title,url_link,category_id,created_at,categories(name,id)";

  return client
    .from('projects')
    .select(PROJECT_COLUMNS)

}