import React, { createContext, useContext, useState } from "react";
import type { Resource } from "@/types/resource";

interface ResourceContextProps {
  resources: Resource[];
  masterResources: Resource[];
  setResources: React.Dispatch<React.SetStateAction<Resource[]>>;
  setMasterResources: React.Dispatch<React.SetStateAction<Resource[]>>;
}

const ResourceContext = createContext<ResourceContextProps | undefined>(
  undefined,
);

// context provider component for managing resources and master resources
export const ResourceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [masterResources, setMasterResources] = useState<Resource[]>([]);

  return (
    <ResourceContext.Provider
      value={{ resources, masterResources, setResources, setMasterResources }}
    >
      {children}
    </ResourceContext.Provider>
  );
};

// context hook for accessing the resource context
export const useResourceContext = () => {
  const context = useContext(ResourceContext);
  if (!context)
    throw new Error("useResourceContext must be used within ResourceProvider");
  return context;
};
