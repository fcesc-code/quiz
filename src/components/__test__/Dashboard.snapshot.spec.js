import renderer from "react-test-renderer";
import React from "react";
import Dashboard from "../Dashboard.jsx";

describe("Dashboard snapshot", () => {
  const treeDashboard = renderer.create(<Dashboard />);

  it("should match", () => {
    expect(treeDashboard).toMatchSnapshot();
  });
});
