import renderer from "react-test-renderer";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Results from "../Results.jsx";

describe("App snapshot", () => {
  const treeResults = renderer.create(
    <BrowserRouter>
      <Results />
    </BrowserRouter>
  );

  it("should match", () => {
    expect(treeResults).toMatchSnapshot();
  });

  test("test whether Results Component has been displayed", async () => {
    render(
      <BrowserRouter>
        <Results />
      </BrowserRouter>
    );
    const TEXT = "Play a new theme";
    const ACTION_TEXT = "Save results";
    const someResults = await screen.findByText(TEXT);
    const saveResults = await screen.findByText(ACTION_TEXT);
    expect(someResults).toBeVisible();
    saveResults.click();
  });
});
