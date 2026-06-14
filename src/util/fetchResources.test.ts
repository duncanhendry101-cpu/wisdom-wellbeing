import {
  describe,
  beforeEach,
  afterEach,
  it,
  expect,
  jest,
} from "@jest/globals";
import { fetchResources } from "./fetchResources";

describe("fetchResources", () => {
  // Create a clean spy placeholder variable
  let fetchSpy: jest.SpiedFunction<typeof fetch>;

  beforeEach(() => {
    // 1. Spy on the global fetch function cleanly—no type casting required
    fetchSpy = jest.spyOn(globalThis, "fetch");

    // Suppress console outputs to keep your test runs readable
    jest.spyOn(console, "log").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    // 2. Automatically restores global fetch back to its original state
    jest.restoreAllMocks();
  });

  it("returns data when fetch is successful", async () => {
    const mockData = [{ id: "001", title: "Test Resource" }];

    // 3. Chain your mock resolution directly onto the clean spy
    fetchSpy.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    } as Response); // Simple cast to mock the minimal expected native response shape

    const result = await fetchResources();

    expect(result).toEqual(mockData);
    expect(fetchSpy).toHaveBeenCalledWith("/data/mock.json");
  });

  it("returns an empty array when fetch fails", async () => {
    fetchSpy.mockResolvedValueOnce({
      ok: false,
    } as Response);

    const result = await fetchResources();

    expect(result).toEqual([]);
    expect(console.error).toHaveBeenCalled();
  });
});
