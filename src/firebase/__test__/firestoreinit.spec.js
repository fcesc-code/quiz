import { db } from "../firebaseinit";

describe("Test set for firestore init", () => {
  test("Test that db is not empty", () => {
    expect(db).toBeDefined();
  });
});
