// import { createClient } from "@supabase/supabase-js";
import { createClient } from "@xxx-utils/supabase/client";

export interface ProjectInfo {
  id: number;
  name: string;
  description: string;
  /** 链接地址 */
  url?: string;
  /** 预览图片 */
  previewImgs?: string[];
}

/**
 * 查询项目列表
 */
export async function getProjects(): Promise<ProjectInfo[]> {
  return createClient()
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
