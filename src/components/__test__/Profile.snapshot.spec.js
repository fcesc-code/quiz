import React from "react";
import renderer from "react-test-renderer";
import Profile from "../Profile.jsx";

const tree = renderer.create(<Profile />).toJSON();

describe("Profile snapshot", () => {
  test("should match", () => {
    expect(tree).toMatchSnapshot();
  });
});
