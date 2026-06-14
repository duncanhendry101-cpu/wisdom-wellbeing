// import { ResourceCard } from "@/components/ResourceCard/ResourceCard";
import { useResourceContext } from "@/context/ResourceContext";
import styles from "./ResourceFilter.module.css";
import { useState } from "react";

export function ResourceFilter() {
  const { masterResources, setResources } = useResourceContext();

  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSort, setActiveSort] = useState("newest");

  const applyFilterAndSort = (category: string, sortOrder: string) => {
    let processed =
      category === "all"
        ? [...masterResources]
        : masterResources.filter(
            (r) => r.category.toLowerCase() === category.toLowerCase(),
          );

    processed.sort((a, b) => {
      const dateA = new Date(a.date_uploaded).getTime();
      const dateB = new Date(b.date_uploaded).getTime();

      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    setResources(processed);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextSort = e.target.value;
    setActiveSort(nextSort);
    applyFilterAndSort(activeCategory, nextSort);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextCategory = e.target.value;
    setActiveCategory(nextCategory);
    applyFilterAndSort(nextCategory, activeSort);
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterInner}>
        <p className={styles.filterTitle}>Filter/Sort Resources</p>

        <div className={styles.filterOptions}>
          <div className={styles.categorySelect}>
            <label htmlFor="sort">Sort by:</label>
            <select
              id="sort"
              name="sort"
              defaultValue="newest"
              onChange={handleSortChange}
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </div>

          <div className={styles.categorySelect}>
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              defaultValue="all"
              onChange={handleCategoryChange}
            >
              <option value="all">All</option>
              <option value="articles">Articles</option>
              <option value="fitness">Fitness</option>
              <option value="meditation">Meditation</option>
              <option value="newsletters">Newsletters</option>
              <option value="podcasts">Podcasts</option>
              <option value="recipes">Recipes</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
