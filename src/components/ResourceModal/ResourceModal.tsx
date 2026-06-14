import { useResourceModal } from "@/context/ResourceModalContext";
import styles from "./ResourceModal.module.css";

export function ResourceModal() {
  const { isOpen, activeResource, closeResourceModal } = useResourceModal();

  if (!isOpen || !activeResource) return null;

  return (
    <div className={styles.overlay} onClick={closeResourceModal}>
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={closeResourceModal}>
          x
        </button>

        <p className={styles.category}>{activeResource.category}</p>

        <h3 className={styles.title}>{activeResource.title}</h3>

        <div className={styles.metadata}>
          <p>{activeResource.duration} minutes</p>
          <p className={styles.date}>
            Added: {new Date(activeResource.date_uploaded).toLocaleDateString()}
          </p>
        </div>

        <p className={styles.description}>{activeResource.description}</p>

        {/* Interactive Tag Strips */}
        {activeResource.tags?.length > 0 && (
          <ul className={styles.tagsContainer}>
            {activeResource.tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
