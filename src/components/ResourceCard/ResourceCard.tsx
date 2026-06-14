import type { Resource } from "@/types/resource";
import styles from "./ResourceCard.module.css";

interface ResourceProps {
  data: Resource;
}

export function ResourceCard({ data }: ResourceProps) {
  return (
    <div className={styles.resourceContainer}>
      <img
        className={styles.thumbnail}
        src={data.thumbnail}
        width="100%"
        height="200"
        alt={data.title}
      />
      <h4 className={styles.title}>{data.title}</h4>
      <p>{data.duration} minutes</p>

      {data?.tags?.length > 0 && (
        <div className={styles.tagsContainer}>
          {data.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
