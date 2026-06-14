import { fetchResources } from "./fetchResources";

describe("fetchResources", () => {
  let fetchSpy: any;

  beforeEach(() => {
    // 🚀 Ensure fetch exists on globalThis before we attempt to spy on it
    if (!globalThis.fetch) {
      globalThis.fetch = jest.fn() as any;
    }

    // Now spying will pass safely every time
    fetchSpy = jest.spyOn(globalThis, "fetch");

    jest.spyOn(console, "log").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns data when fetch is successful", async () => {
    const mockData = [{ id: "001", title: "Test Resource" }];

    fetchSpy.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const result = await fetchResources();

    expect(result).toEqual(mockData);
    expect(fetchSpy).toHaveBeenCalledWith("/data/mock.json");
  });

  it("returns an empty array when fetch fails", async () => {
    fetchSpy.mockResolvedValueOnce({
      ok: false,
    });

    const result = await fetchResources();

    expect(result).toEqual([]);
    expect(console.error).toHaveBeenCalled();
  });
});
