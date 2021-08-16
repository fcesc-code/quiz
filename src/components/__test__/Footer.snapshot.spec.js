import React from "react";
import renderer from "react-test-renderer";
import Footer from "../Footer.jsx";

describe("Footer snapshot", () => {
  const tree = renderer.create(<Footer />).toJSON();

  test("should match", () => {
    expect(tree).toMatchSnapshot();
  });
});
