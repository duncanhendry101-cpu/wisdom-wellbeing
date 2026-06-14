import type { Resource } from "@/types/resource";
import mockData from "../../data/mock.json";

export const fetchResources = async (): Promise<Resource[]> => {
  try {
    return mockData as Resource[];
  } catch (error) {
    console.error("Mock data fetch failed:", error);
    throw error;
  }
};
