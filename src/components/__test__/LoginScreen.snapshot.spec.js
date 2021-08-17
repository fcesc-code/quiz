import renderer from "react-test-renderer";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import LoginScreen from "../LoginScreen.jsx";

describe("LoginScreen snapshot", () => {
  const treeLoginScreen = renderer.create(
    <BrowserRouter>
      <LoginScreen />
    </BrowserRouter>
  );

  test("should match", () => {
    expect(treeLoginScreen).toMatchSnapshot();
  });

  test("test whether LoginScreen Component has been displayed", async () => {
    render(
      <BrowserRouter>
        <LoginScreen />
      </BrowserRouter>
    );
    const TEXT = "Sign in with google";
    const someLoginScreenContent = await screen.findByText(TEXT);
    expect(someLoginScreenContent).toBeVisible();
    const loginAction = await screen.findByText(
      "Sign in with email and password"
    );
    loginAction.click();
    const loginActionGoogle = await screen.findByText("Sign in with google");
    loginActionGoogle.click();
  });
});
