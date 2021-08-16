import React from "react";
import renderer from "react-test-renderer";
import Register from "../Register.jsx";

describe("Register snapshot", () => {
  const tree = renderer.create(<Register />).toJSON();

  test("should match", () => {
    expect(tree).toMatchSnapshot();
  });
});
