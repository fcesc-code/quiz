import renderer from "react-test-renderer";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard.jsx";

describe("Dashboard snapshot", () => {
  test("should match", () => {
    const treeDashboard = renderer.create(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
    expect(treeDashboard).toMatchSnapshot();
  });

  test("test whether some category 'Books' has been displayed in the dashboard", async () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
    const TEXT = "Computers";
    const foundTheme = await screen.findByText(TEXT);
    expect(foundTheme).toBeVisible();
  });
});
