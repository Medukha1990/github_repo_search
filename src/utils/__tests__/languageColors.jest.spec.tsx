import { getLanguageColor } from "../languageColors";

describe("getLanguageColor", () => {
  it("returns the correct color for a given language", () => {
    // Test each language case
    expect(getLanguageColor("HTML")).toBe("bg-red-500");
    expect(getLanguageColor("CSS")).toBe("bg-indigo-700");
    expect(getLanguageColor("JavaScript")).toBe("bg-yellow-500");
    expect(getLanguageColor("TypeScript")).toBe("bg-blue-600");

    // Test the default case for an undefined language
    expect(getLanguageColor(undefined)).toBe("bg-gray-500");

    // Test the default case for an unknown language
    expect(getLanguageColor("Python")).toBe("bg-gray-500");
  });
});
