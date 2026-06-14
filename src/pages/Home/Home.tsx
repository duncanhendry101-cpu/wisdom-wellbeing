import type { Resource } from "@/types/resource";
import styles from "./Home.module.css";
import { fetchResources } from "@/util/fetchResources";
import { useEffect, useState } from "react";
import { ResourceCard } from "@/components/ResourceCard/ResourceCard";
import { ResourceFilter } from "./ResourceFilter/ResourceFilter";

export function Home() {
  const [resources, setResources] = useState<Resource[]>([]);

  const loadResources = async () => {
    const data = await fetchResources();
    setResources(data);
  };

  useEffect(() => {
    loadResources();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <ResourceFilter />

      <div className={styles.resourcesContainer}>
        {resources.map((resource) => (
          <ResourceCard key={resource.id} data={resource} />
        ))}
      </div>
    </div>
  );
}
