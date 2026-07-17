import { render, screen } from "@testing-library/react";
import { EmptyState } from "./EmptyState";

describe("EmptyState", () => {
  it("renders title, description, and action", () => {
    render(
      <EmptyState
        action={<button type="button">Create project</button>}
        description="Start by creating your first project."
        title="No projects"
      />,
    );

    expect(screen.getByRole("heading", { name: "No projects" })).toBeInTheDocument();
    expect(screen.getByText("Start by creating your first project.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Create project" })).toBeInTheDocument();
  });
});
