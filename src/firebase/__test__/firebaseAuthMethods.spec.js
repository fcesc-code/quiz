import authMethods from "../firebaseAuthMethods";
import { email, password } from "../../mockdata/USER";

describe("Test set for firebase authentication methods", () => {
  test("Test that the signIn function does not return undefined", () => {
    const result = authMethods.signIn(email, password);
    expect(result).toBeDefined();
  });
  test("Test that the signInWithGoogle function does not return undefined", () => {
    const result = authMethods.signInWithGoogle();
    expect(result).toBeDefined();
  });
  test("Test that the signOut function does not return undefined", () => {
    const result = authMethods.signOut();
    expect(result).toBeDefined();
  });
});
