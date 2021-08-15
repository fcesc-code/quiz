import renderer from "react-test-renderer";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import LoginScreen from "../LoginScreen.jsx";

describe("LoginScreen snapshot", () => {
  const treeLoginScreen = renderer.create(
    <BrowserRouter>
      <LoginScreen />
    </BrowserRouter>
  );

  it("should match", () => {
    expect(treeLoginScreen).toMatchSnapshot();
  });
});
