"use client";

import ProjectList from "./project-list";
import { useQuery } from "@tanstack/react-query";

import { HomeAPI } from "@xxx/services-api";

export default function Home() {
  // const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: HomeAPI.getProjects,
  });

  // const categories = Object.values(projects || []).map((proj) => proj.tag);
  // categories.unshift("All");
  // const allCategories = uniq(categories);

  return (
    <>
      <div className="h-full flex flex-col p-24">
        <div className="mb-32">
          <h1 className="font-bold text-5xl">x-home</h1>
          <p className="text-lg text-gray-500">
            Project Home page of xjiaxiang
          </p>
        </div>
        <ProjectList projects={projects}></ProjectList>
      </div>
    </>
  );
}
