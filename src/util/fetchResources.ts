import type { Resource } from "@/types/resource";

export const fetchResources = async (): Promise<Resource[]> => {
  try {
    const response = await fetch("/data/mock.json");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: Resource[] = await response.json();

    return data;
  } catch (error) {
    console.error("Mock data fetch failed:", error);
    return [];
  }
};
