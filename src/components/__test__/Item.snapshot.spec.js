import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Item from "../Item.jsx";

describe("Item snapshot", () => {
  const treeItems = renderer.create(
    <BrowserRouter>
      <Item />
    </BrowserRouter>
  );

  it("should match", () => {
    expect(treeItems).toMatchSnapshot();
  });
});
