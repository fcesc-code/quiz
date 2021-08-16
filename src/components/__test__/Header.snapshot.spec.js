import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../Header.jsx";

describe("Header snapshot", () => {
  const tree = renderer
    .create(
      <Router>
        <Header />
      </Router>
    )
    .toJSON();

  test("should match", () => {
    expect(tree).toMatchSnapshot();
  });
});
