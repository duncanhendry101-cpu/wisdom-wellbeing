import styles from "./Home.module.css";
import { fetchResources } from "@/util/fetchResources";
import { useEffect } from "react";
import { ResourceCard } from "@/components/ResourceCard/ResourceCard";
import { ResourceFilter } from "./ResourceFilter/ResourceFilter";
import { useResourceContext } from "@/context/ResourceContext";

export function Home() {
  const { resources, setResources, setMasterResources } = useResourceContext();

  const loadResources = async () => {
    const data = await fetchResources();

    // sort newest to oldest by default
    const sortedData = [...data].sort((a, b) => {
      return (
        new Date(b.date_uploaded).getTime() -
        new Date(a.date_uploaded).getTime()
      );
    });

    // set cached resources and master resources in context
    setResources(sortedData);
    setMasterResources(sortedData);
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
