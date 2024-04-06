import type { TypedSupabaseClient } from "@/types/TypedSupabaseClient";

export function getRecommendations(client: TypedSupabaseClient) {
  const RECOMMENDATION_COLUMNS = "id,username,role,profilePicture,description";

  return client.from("recommendations").select(RECOMMENDATION_COLUMNS);
}
