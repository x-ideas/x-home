// import { createClient } from "@supabase/supabase-js";
import { supabase } from "../client.ts";

export interface ProjectInfo {
  id: number;
  name: string;
  description: string;
  // published: boolean;
  // deleted: boolean;
}

/**
 * 查询项目列表
 */
export async function getProjects(): Promise<ProjectInfo[]> {
  return supabase
    .from("projects")
    .select()
    .then((res) => {
      return res.data as ProjectInfo[];
    });
  // return fetch(`/api/projects`).then(async (res) => {
  //   const result = (await res.json()) as IApiResponse<ProjectInfo[]>;
  //   return result.data;
  // });
}
