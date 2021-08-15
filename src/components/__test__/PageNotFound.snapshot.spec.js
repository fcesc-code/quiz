import renderer from "react-test-renderer";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import PageNotFound from "../PageNotFound.jsx";

describe("Page not found snapshot", () => {
  const treePageNotFound = renderer.create(
    <BrowserRouter>
      <PageNotFound />
    </BrowserRouter>
  );

  it("should match", () => {
    expect(treePageNotFound).toMatchSnapshot();
  });
});
