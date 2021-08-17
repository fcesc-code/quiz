import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer.jsx";

describe("Footer snapshot", () => {
  const tree = renderer.create(<Footer />).toJSON();

  test("should match", () => {
    expect(tree).toMatchSnapshot();
  });

  test("test whether Footer Component has been displayed", async () => {
    render(<Footer />);
    const TEXT = "Skylab Coders";
    const someFooterContent = await screen.findByText(TEXT);
    expect(someFooterContent).toBeVisible();
  });
});
