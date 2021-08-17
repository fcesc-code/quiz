import renderer from "react-test-renderer";
import React from "react";
import { render, screen } from "@testing-library/react";
import Game from "../Game.jsx";

describe("Game snapshot", () => {
  const props = {
    match: {
      params: {
        themeSlug: "general-knowledge",
      },
    },
  };
  const treeGame = renderer.create(<Game {...props} />);

  test("should match", () => {
    expect(treeGame).toMatchSnapshot();
  });

  test("test whether Game Component has been displayed", async () => {
    render(<Game {...props} />);
    const TEXT = "Loading question data...";
    const someGameContent = await screen.findByText(TEXT);
    expect(someGameContent).toBeVisible();
  });
});
