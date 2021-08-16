import React from "react";
import renderer from "react-test-renderer";
import Profile from "../Profile.jsx";

describe("Profile snapshot", () => {
  const tree = renderer.create(<Profile />).toJSON();

  it("should match", () => {
    expect(tree).toMatchSnapshot();
  });
});
