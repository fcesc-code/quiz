import renderer from "react-test-renderer";
import React from "react";
import Question from "../Question.jsx";

describe("App snapshot", () => {
  const treeQuestion = renderer.create(<Question />);

  it("should match", () => {
    expect(treeQuestion).toMatchSnapshot();
  });
});
