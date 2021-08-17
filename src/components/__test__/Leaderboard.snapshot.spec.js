import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import Leaderboard from "../LeaderBoard.jsx";

describe("Leaderboard snapshot", () => {
  const tree = renderer.create(<Leaderboard />).toJSON();

  test("should match", () => {
    expect(tree).toMatchSnapshot();
  });

  test("test whether Leaderboard Component has been displayed", async () => {
    render(<Leaderboard />);
    const TEXT = "Leaderboard";
    const someLeaderboardContent = await screen.findByText(TEXT);
    expect(someLeaderboardContent).toBeVisible();
  });
});
