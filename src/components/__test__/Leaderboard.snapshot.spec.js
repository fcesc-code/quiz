import React from "react";
import renderer from "react-test-renderer";
import Leaderboard from "../LeaderBoard.jsx";

describe("Leaderboard snapshot", () => {
  const tree = renderer.create(<Leaderboard />).toJSON();

  test("should match", () => {
    expect(tree).toMatchSnapshot();
  });
});
