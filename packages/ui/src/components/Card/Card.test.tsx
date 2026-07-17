import { render, screen } from "@testing-library/react";
import { Card, CardContent, CardFooter, CardHeader } from "./Card";

describe("Card", () => {
  it("renders structured card regions", () => {
    render(
      <Card>
        <CardHeader>Header</CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});
