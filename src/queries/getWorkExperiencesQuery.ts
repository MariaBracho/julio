import type { TypedSupabaseClient } from '@/types/TypedSupabaseClient'

export function getWorkExperiencesQuery(client: TypedSupabaseClient) {
 const WORK_EXPERIENCES_COLUMNS =
  "id,rol,company,description,start_date,end_date,isJobFinish";

  return client
    .from('workExperiences')
    .select(WORK_EXPERIENCES_COLUMNS)

}