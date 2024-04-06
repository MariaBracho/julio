import type { TypedSupabaseClient } from "@/types/TypedSupabaseClient";

export function getEducationQuery(client: TypedSupabaseClient) {
  const EDUCATION_COLUMNS =
    "id,training,institution,start_date,end_date,isEducationFinish,logo";

  return client.from("education").select(EDUCATION_COLUMNS);
}
