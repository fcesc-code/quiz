import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary.jsx";
import Dashboard from "../Dashboard.jsx";

describe("ErrorBoundary snapshot", () => {
  test("test whether ErrorBoundary Component fails when children fails", async () => {
    render(
      <BrowserRouter>
        <ErrorBoundary error={true}>
          <Dashboard />
        </ErrorBoundary>
      </BrowserRouter>
    );
    const TEXT = "Internal error:";
    const someErrorBoundaryContent = await screen.findByText(TEXT);
    expect(someErrorBoundaryContent).toBeVisible();
  });
});
