import { IApiResponse } from "../types/index.ts";

export interface ProjectInfo {
  id: string;
  name: string;
  description: string;
  published: boolean;
  deleted: boolean;
  /** 标签 */
  tag: string;
}

export async function getProjects(): Promise<ProjectInfo[]> {
  return fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/projects`).then(
    async (res) => {
      const result = (await res.json()) as IApiResponse<ProjectInfo[]>;
      return result.data;
    },
  );
}
