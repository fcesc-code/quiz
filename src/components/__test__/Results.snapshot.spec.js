import renderer from "react-test-renderer";
import React from "react";
import { BrowserRouter } from "react-router-dom";
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
});
