import renderer from "react-test-renderer";
import React from "react";
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

  it("should match", () => {
    expect(treeGame).toMatchSnapshot();
  });
});
