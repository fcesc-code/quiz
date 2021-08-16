import React from "react";
import renderer from "react-test-renderer";
import Answer from "../Answer.jsx";

describe("Answer snapshot", () => {
  const tree = renderer.create(<Answer />).toJSON();

  test("should match", () => {
    expect(tree).toMatchSnapshot();
  });
});
