import renderer from "react-test-renderer";
import React from "react";
import App from "../../App.jsx";

describe("App snapshot", () => {
  const tree = renderer.create(<App />);

  it("should match", () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
