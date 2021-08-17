import renderer from "react-test-renderer";
import React from "react";
import { render, screen } from "@testing-library/react";
import Question from "../Question.jsx";

describe("App snapshot", () => {
  const treeQuestion = renderer.create(<Question />);

  test("should match", () => {
    expect(treeQuestion).toMatchSnapshot();
  });

  test("test whether Question Component has been displayed", async () => {
    render(<Question i={1} click={(v) => v} />);
    const TEXT = "seconds";
    const someQuestionContent = await screen.findByText(TEXT);
    expect(someQuestionContent).toBeVisible();
  });
});
