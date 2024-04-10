import type { TypedSupabaseClient } from "@/types/TypedSupabaseClient";

export function getProjectsQuery(client: TypedSupabaseClient) {
  const PROJECT_COLUMNS =
    "id,img,logo,title,url_link,category_id,created_at,categories(name,id)";

  return client.from("projects").select(PROJECT_COLUMNS);
}

export function getProjectByIdQuery(client: TypedSupabaseClient, id: number) {
  const PROJECT_COLUMNS =
    "id,img,logo,title,url_link,category_id,created_at,categories(name,id)";

  return client.from("projects").select(PROJECT_COLUMNS).eq("id", id);
}
