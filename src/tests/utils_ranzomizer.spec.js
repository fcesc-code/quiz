import getRandomIntInclusive from "../utils/randomizer";

describe("Test set for randomizer", () => {
  test("should return an integer between 0 and n", () => {
    const nMax = 20;
    const nMin = 0;

    const result = getRandomIntInclusive(nMin, nMax);
    expect(result).toBeGreaterThanOrEqual(nMin);
    expect(result).toBeLessThanOrEqual(nMax);
    expect(typeof result).toBe("number");
  });
});
