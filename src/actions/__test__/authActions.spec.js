import { login, loginGoogle, logout } from "../authActions";
import { email, password } from "../../mockdata/USER";

describe("Test set for authentication actions", () => {
  test("Test login action from authentication actions, should not be undefined", () => {
    expect(login(email, password)).toBeDefined();
  });

  test("Test loginGoogle action from authentication actions, should not be undefined", () => {
    expect(loginGoogle()).toBeDefined();
  });

  test("Test logout action from authentication actions, should not be undefined", () => {
    expect(logout()).toBeDefined();
  });
});
