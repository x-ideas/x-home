import Head from "next/head";
import styles from "@/styles/Home.module.css";
import FilterButtons from "./filter-buttons";
import ProjectList from "./project-list";
import { useState } from "react";
import { uniq } from "lodash-es";

interface ProjectInfo {
  value: string;
  name: string;
  /** 类别 */
  category: string;
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [projects] = useState<ProjectInfo[]>([
    {
      value: "orizon",
      name: "Orizon",
      category: "web development",
    },
    {
      value: "orizon",
      name: "Orizon",
      category: "web design",
    },
    {
      value: "orizon",
      name: "Orizon",
      category: "applications",
    },
  ]);

  const categories = Object.values(projects).map((proj) => proj.category);
  categories.unshift("All");
  const allCategories = uniq(categories);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <article className="portfolio active" data-page="portfolio">
          <header>
            <h2 className="h2 article-title">XXX</h2>
          </header>

          <section className="projects">
            <FilterButtons
              value={selectedCategory}
              options={allCategories.map((category) => {
                return {
                  value: category,
                  name: category,
                };
              })}
              onChange={(newValue) => {
                setSelectedCategory(newValue);
              }}
            ></FilterButtons>

            <ProjectList
              allOptions={projects}
              filter={(opt) => {
                if (selectedCategory === "All") {
                  return true;
                }
                return opt.category === selectedCategory;
              }}
            ></ProjectList>
          </section>
        </article>
      </main>
    </>
  );
}
