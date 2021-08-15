import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../Header.jsx";

const tree = renderer
  .create(
    <Router>
      <Header />
    </Router>
  )
  .toJSON();

describe("Header snapshot", () => {
  test("should match", () => {
    expect(tree).toMatchSnapshot();
  });
});
