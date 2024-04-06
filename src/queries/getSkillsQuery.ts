import type { TypedSupabaseClient } from "@/types/TypedSupabaseClient";

export function getSkillQuery(client: TypedSupabaseClient) {
  return client.from("skills").select("id,name");
}
