import renderer from "react-test-renderer";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "../Dashboard.jsx";

describe("Dashboard snapshot", () => {
  const treeDashboard = renderer.create(<Dashboard />);

  test("should match", () => {
    expect(treeDashboard).toMatchSnapshot();
  });

  test("test whether some category 'Books' has been displayed in the dashboard", async () => {
    render(
      <Router>
        <Dashboard />
      </Router>
    );
    const TEXT = "Computers";
    const foundTheme = await screen.findByText(TEXT);
    expect(foundTheme).toBeVisible();
  });
});
