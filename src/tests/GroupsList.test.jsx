import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import GroupsList from "../components/groups/GroupsList";

describe("GroupsList", () => {
  it("should render", () => {
    expect(true).toBe(true);
  });
  it("should render a list of groups", () => {
    const groups = [
      { id: 1, name: "Group 1" },
      { id: 2, name: "Group 2" },
    ];
    render(
      <Router>
        <GroupsList />
      </Router>
    );
    expect(screen.getByText("Group 1")).toBeInTheDocument();
    expect(screen.getByText("Group 2")).toBeInTheDocument();
  });
});
