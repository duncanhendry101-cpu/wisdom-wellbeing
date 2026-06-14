import { createContext, useContext, useState, type ReactNode } from "react";
import type { Resource } from "@/types/resource";

interface ResourceModalContextType {
  isOpen: boolean;
  activeResource: Resource | null;
  openResourceModal: (resource: Resource) => void;
  closeResourceModal: () => void;
}

// context provider component for managing resource modal
const ResourceModalContext = createContext<
  ResourceModalContextType | undefined
>(undefined);

export function ResourceModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeResource, setActiveResource] = useState<Resource | null>(null);

  const openResourceModal = (resource: Resource) => {
    setActiveResource(resource);
    setIsOpen(true);
  };

  const closeResourceModal = () => {
    setIsOpen(false);
    setActiveResource(null);
  };

  return (
    <ResourceModalContext.Provider
      value={{
        isOpen,
        activeResource,
        openResourceModal,
        closeResourceModal,
      }}
    >
      {children}
    </ResourceModalContext.Provider>
  );
}

// context hook for accessing the resource modal context
export function useResourceModal() {
  const context = useContext(ResourceModalContext);
  if (!context) {
    throw new Error(
      "useResourceModal must be used within a ResourceModalProvider",
    );
  }
  return context;
}
