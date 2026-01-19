import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title", () => {
  test("rende un h2 di default", () => {
    render(<Title text="Test Title" />);
    const titleElement = screen.getByText("Test Title");
    expect(titleElement.tagName).toBe("H2");
  });

  test("rende un h3 se specificato", () => {
    render(<Title text="Test H3" as="h3" />);
    const titleElement = screen.getByText("Test H3");
    expect(titleElement.tagName).toBe("H3");
  });
});
