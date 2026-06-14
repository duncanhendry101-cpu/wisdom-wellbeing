import {
  describe,
  beforeEach,
  afterEach,
  it,
  expect,
  jest,
} from "@jest/globals";
import { fetchResources } from "./fetchResources";

// 1. Correctly type a mock function wrapper for fetch
const mockFetch = jest.fn<() => Promise<any>>();

describe("fetchResources", () => {
  beforeEach(() => {
    // 2. Safely cast our mock function to overwrite the global fetch property
    global.fetch = mockFetch as unknown as typeof global.fetch;

    // Suppress console outputs
    jest.spyOn(console, "log").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
    mockFetch.mockReset(); // Clean up the fetch mock evaluation history
  });

  it("returns data when fetch is successful", async () => {
    const mockData = [{ id: "001", title: "Test Resource" }];

    // 3. Use the typed mock wrapper instead of a sketchy global cast
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const result = await fetchResources();

    expect(result).toEqual(mockData);
    expect(mockFetch).toHaveBeenCalledWith("/data/mock.json");
  });

  it("returns an empty array when fetch fails", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
    });

    const result = await fetchResources();

    expect(result).toEqual([]);
    expect(console.error).toHaveBeenCalled();
  });
});
