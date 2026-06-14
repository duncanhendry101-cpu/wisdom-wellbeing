import { render, screen, fireEvent } from "@testing-library/react";
import { ResourceFilter } from "./ResourceFilter";
import { useResourceContext } from "@/context/ResourceContext";

// 1. Mock the custom context hook
jest.mock("@/context/ResourceContext", () => ({
  useResourceContext: jest.fn(),
}));

// 2. Setup a clear, minimal mock dataset
const mockMasterResources = [
  {
    id: "1",
    title: "Old Podcast",
    category: "Podcasts",
    date_uploaded: "2024-01-01T00:00:00.000Z",
    description: "Old podcast desc",
  },
  {
    id: "2",
    title: "New Article",
    category: "Articles",
    date_uploaded: "2026-05-01T00:00:00.000Z",
    description: "New article desc",
  },
  {
    id: "3",
    title: "New Podcast",
    category: "Podcasts",
    date_uploaded: "2026-06-01T00:00:00.000Z",
    description: "New podcast desc",
  },
];

describe("ResourceFilter Component", () => {
  let mockSetResources: jest.Mock;

  beforeEach(() => {
    mockSetResources = jest.fn();

    (useResourceContext as jest.Mock).mockReturnValue({
      masterResources: mockMasterResources,
      resources: mockMasterResources,
      setResources: mockSetResources,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // --- CASE 1: FILTERING ---
  it("should filter by category selection", () => {
    render(<ResourceFilter />);

    const categorySelect = screen.getByLabelText("Category:");
    fireEvent.change(categorySelect, { target: { value: "podcasts" } });

    // 🚀 Update: Expect index 2 (Newest) first, then index 0 (Oldest) due to default "newest" sorting layout
    expect(mockSetResources).toHaveBeenCalledWith([
      mockMasterResources[2],
      mockMasterResources[0],
    ]);
  });

  // --- CASE 2: SORTING ---
  it("should sort chronologically from oldest to newest", () => {
    render(<ResourceFilter />);

    // 🚀 Update: Query cleanly using the accessible label link layout
    const sortSelect = screen.getByLabelText("Sort by:");
    fireEvent.change(sortSelect, { target: { value: "oldest" } });

    const processedData = mockSetResources.mock.calls[0][0];

    expect(processedData[0].id).toBe("1");
    expect(processedData[2].id).toBe("3");
  });
});
