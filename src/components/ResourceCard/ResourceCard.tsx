import type { Resource } from "@/types/resource";
import styles from "./Resource.module.css";

interface ResourceProps {
  data: Resource;
}

export function ResourceCard({ data }: ResourceProps) {
  return <div className={styles.resource}>Resource</div>;
}
